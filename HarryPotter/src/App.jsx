import axios from "axios";
import Books from "./components/books";

async function getData() {
  let response = await axios.get(
    "https://potterapi-fedeperin.vercel.app/en/books",
  );
  return response.data;
}

let appdata = await getData();

console.log(appdata);
const App = () => {
  return (
    <>
      <Books data={appdata}></Books>
    </>
  );
};

export default App;
