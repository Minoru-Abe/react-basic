import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [num, setNum] = useState(0);
  const onClickCountup = () => setNum(num+1);
  return (
    <div>
      <h1 style={{color:"red"}}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="green">元気です</ColorfulMessage>
      <button onClick={onClickCountup}>Countup</button>
      <p>{num}</p>
    </div>
  );
};

