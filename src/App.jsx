export const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {color: "red"};
  return (
    <div>
      <h1 style={contentStyle}>こんにちは！</h1>
      <p>お元気ですか</p>
      <button onClick={onClickButton}>ボタン</button>
    </div>
  );
};

