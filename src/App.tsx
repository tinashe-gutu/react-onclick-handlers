import AppHeader from "./components/AppHeader";
import ButtonWithClickExampleA from "./components/ButtonWithClickExampleA";
import ButtonWithClickExampleB from "./components/ButtonWithClickExampleB";
import ButtonWithClickExampleC from "./components/ButtonWithClickExampleC";
import ButtonWithClickExampleD from "./components/ButtonWithClickExampleD";
import ButtonWithClickExampleE from "./components/ButtonWithClickExampleE";
import ButtonWithClickExampleF from "./components/ButtonWithClickExampleF";
import TestButton from "./components/TestButton";

function App(): JSX.Element {
  return (
    <>
      <AppHeader title={"React onClick button demos"}/>
      <hr />
      <ButtonWithClickExampleA />
      <hr />
      <ButtonWithClickExampleB />
      <hr />
      <ButtonWithClickExampleC />
      <hr />
      <ButtonWithClickExampleD />
      <hr />
      <ButtonWithClickExampleE />
      <hr />
      <ButtonWithClickExampleF />
      <hr />
      <TestButton />
    </>
  );
}

export default App;
