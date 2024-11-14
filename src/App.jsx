import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const onClickButton = () => alert();
  return (
    <div>
      <h1 style={{color:"red"}}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="green">元気です</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </div>
  );
};

