/*************************************************
 * GLOBAL STATE
 *************************************************/
let pdfDoc = null;
let frontData = null;
let backData = null;
let currentSide = "front";

const PVC_WIDTH = 1012;
const PVC_HEIGHT = 638;

/*************************************************
 * CANVAS
 *************************************************/
const canvas = new fabric.Canvas("cardCanvas", {
  width: PVC_WIDTH,
  height: PVC_HEIGHT,
  backgroundColor: "white"
});

/*************************************************
 * DOM ELEMENTS
 *************************************************/
const fileInput = document.getElementById("fileInput");
const browseBtn = document.getElementById("browseBtn");
const pdfPath = document.getElementById("pdfPath");
const passwordInput = document.querySelector('input[type="password"]');
const previewBtn = document.querySelector(".btn.blue");
const printBtn = document.querySelector(".btn.green");

/*************************************************
 * FILE SELECT (FIXED)
 *************************************************/
browseBtn.addEventListener("click", () => {
  fileInput.value = "";
  fileInput.click();
});

fileInput.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  pdfPath.value = file.name;

  const password = passwordInput.value || file.name.replace(".pdf", "");
  await loadAadhaarPDF(file, password);
});

/*************************************************
 * LOAD AADHAAR PDF
 *************************************************/
async function loadAadhaarPDF(file, password) {
  const buffer = await file.arrayBuffer();

  pdfDoc = await pdfjsLib.getDocument({
    data: new Uint8Array(buffer),
    password
  }).promise;

  const page = await pdfDoc.getPage(1);
  await processAadhaarPage(page);
  renderFront();
}

/*************************************************
 * PROCESS PAGE
 *************************************************/
async function processAadhaarPage(page) {
  const scale = 3;
  const viewport = page.getViewport({ scale });

  const fullCanvas = document.createElement("canvas");
  fullCanvas.width = viewport.width;
  fullCanvas.height = viewport.height;

  await page.render({
    canvasContext: fullCanvas.getContext("2d"),
    viewport
  }).promise;

  // ✅ Bottom 28% (your verified correct value)
  const cropY = fullCanvas.height * 0.72;
  const cropH = fullCanvas.height * 0.28;

  const pvcCanvas = cropCanvas(
    fullCanvas,
    0,
    cropY,
    fullCanvas.width,
    cropH
  );

  frontData = {
    photo: extractPhoto(pvcCanvas),
    qr: extractFrontQR(pvcCanvas),
    text: await extractText(page)
  };

  backData = {
    qr: extractBackQR(pvcCanvas)
  };
}

/*************************************************
 * HELPERS
 *************************************************/
function cropCanvas(src, x, y, w, h) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  c.getContext("2d").drawImage(src, x, y, w, h, 0, 0, w, h);
  return c;
}

function extractPhoto(src) {
  return cropCanvas(
    src,
    src.width * 0.05,
    src.height * 0.15,
    src.width * 0.18,
    src.height * 0.55
  ).toDataURL();
}

function extractFrontQR(src) {
  return cropCanvas(
    src,
    src.width * 0.72,
    src.height * 0.15,
    src.width * 0.22,
    src.width * 0.22
  ).toDataURL();
}

function extractBackQR(src) {
  return cropCanvas(
    src,
    src.width * 0.72,
    src.height * 0.40,
    src.width * 0.22,
    src.width * 0.22
  ).toDataURL();
}

/*************************************************
 * TEXT EXTRACTION (DYNAMIC)
 *************************************************/
async function extractText(page) {
  const content = await page.getTextContent();
  const text = content.items.map(i => i.str).join(" ");

  return {
    name: text.match(/[A-Z][a-z]+ [A-Z][a-z]+/)?.[0] || "",
    dob: text.match(/\d{2}\/\d{2}\/\d{4}/)?.[0] || "",
    gender: text.includes("MALE") ? "MALE" : "FEMALE",
    aadhaar: text.match(/\d{4} \d{4} \d{4}/)?.[0] || ""
  };
}

/*************************************************
 * RENDER FRONT
 *************************************************/
function renderFront() {
  currentSide = "front";
  canvas.clear();

  fabric.Image.fromURL(frontData.photo, img => {
    img.set({ left: 40, top: 120 });
    canvas.add(img);
  });

  canvas.add(new fabric.Text(frontData.text.name, {
    left: 260,
    top: 140,
    fontSize: 28,
    fontWeight: "bold"
  }));

  canvas.add(new fabric.Text(`DOB: ${frontData.text.dob}`, {
    left: 260,
    top: 180,
    fontSize: 22
  }));

  canvas.add(new fabric.Text(frontData.text.gender, {
    left: 260,
    top: 210,
    fontSize: 22
  }));

  canvas.add(new fabric.Text(frontData.text.aadhaar, {
    left: PVC_WIDTH / 2,
    top: 560,
    originX: "center",
    fontSize: 36,
    fontWeight: "bold"
  }));

  fabric.Image.fromURL(frontData.qr, img => {
    img.set({ left: 740, top: 130 });
    canvas.add(img);
  });
}

/*************************************************
 * RENDER BACK
 *************************************************/
function renderBack() {
  currentSide = "back";
  canvas.clear();

  fabric.Image.fromURL(backData.qr, img => {
    img.set({ left: 740, top: 160 });
    canvas.add(img);
  });
}

/*************************************************
 * TAB SWITCH
 *************************************************/
document.getElementById("tabFront")?.addEventListener("click", renderFront);
document.getElementById("tabBack")?.addEventListener("click", renderBack);

/*************************************************
 * PRINT → 2 PAGE PVC PDF
 *************************************************/
printBtn.addEventListener("click", () => {
  const { jsPDF } = window.jspdf;

  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: [85.6, 54]
  });

  renderFront();
  pdf.addImage(canvas.toDataURL("image/png", 1), "PNG", 0, 0, 85.6, 54);

  pdf.addPage();
  renderBack();
  pdf.addImage(canvas.toDataURL("image/png", 1), "PNG", 0, 0, 85.6, 54);

  pdf.save("Aadhaar_PVC.pdf");
});
