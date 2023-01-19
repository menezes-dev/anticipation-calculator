import "./App.css";
import Card from "./components/Card";
import CalcProvider from "./contexts";

function App() {
  return (
    <div className="App">
      <CalcProvider>
        <Card />
      </CalcProvider>
    </div>
  );
}

export default App;
