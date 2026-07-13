const box = document.querySelector(".box");
const right = document.querySelector(".right");


right.addEventListener("dragover", (e) => {
  e.preventDefault();
});

right.addEventListener("drop", () => {
  right.appendChild(box);
});
