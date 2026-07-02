import axios from "axios";
import { useEffect } from "react";

const UseEffectComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get(
        "https://potterapi-fedeperin.vercel.app/en/books",
      );
      console.log(Date.now());
      return response.data;
    };
    console.og(fetchData());
  }, []);

  return (
    <div>
      UseEffectComponent <br />
      <p>{Date.now()}</p>
    </div>
  );
};

export default UseEffectComponent;
