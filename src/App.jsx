import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  console.log("---App---")
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false);
  const onClickCountup = () => {
    setNum((prev) => prev + 1);
  }
  const onClickChangeShowFace = () => setIsShowFace(!isShowFace)
  useEffect( () => {
    if (num > 0){
    if ((num) % 3 === 0) {
        setIsShowFace(true)
      }
      else {
        setIsShowFace(false)
      }
    }
  },[num])
  return (
    <div>
      <h1 style={{color:"red"}}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="green">元気ですyo</ColorfulMessage>
      <button onClick={onClickCountup}>Countup</button>
      <p>{num}</p>
      <button onClick={onClickChangeShowFace}>ChangeShowFace</button>
      {isShowFace && <p>m(_ _)m</p>}
    </div>
  );
};

