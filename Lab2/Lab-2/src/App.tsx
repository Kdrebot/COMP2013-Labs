import "./App.css";
import ResortContainer from "./assets/Components/ResortContainer";
import listings from "./assets/Components/Data/data";

function App() {
  return (
    <>
      <h1 className="header">Resorts Lite</h1>
      <ResortContainer listings={listings} />
    </>
  );
}

export default App;
