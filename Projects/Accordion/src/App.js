import logo from "./logo.svg";
import Accordion from "./Components/myaccordion";
import "./Components/myaccordion/styles.css";
import ColorPicker from "./Components/ColorPicker";
import StarRating from "./Components/starRating/StarRating";
function App() {
  return (
    <div className="App">
      <Accordion />
      <ColorPicker />
      <StarRating />
    </div>
  );
}

export default App;
