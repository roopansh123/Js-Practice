import { useEffect } from "react";

const UseEffectComponent = () => {
  useEffect(() => {
    console.log(Date.now());

    console.log("component Registered");
  }, []);

  return (
    <div>
      UseEffectComponent <br />
      <p>{Date.now()}</p>
    </div>
  );
};

export default UseEffectComponent;
