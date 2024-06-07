import logo from "./logo.svg";
import Accordion from "./Components/myaccordion";
import "./Components/myaccordion/styles.css";
import ColorPicker from "./Components/ColorPicker";
function App() {
  return (
    <div className="App">
      <Accordion />
      <ColorPicker />
    </div>
  );
}

export default App;
