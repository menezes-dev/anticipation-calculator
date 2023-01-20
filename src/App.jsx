import "./App.css";
import Card from "./components/Card";
import CalcProvider from "./contexts";
// import Loading from "./components/Loading";

function App() {
  return (
    <div className="App">
      <CalcProvider>
        <Card />
        {/* <Loading /> */}
      </CalcProvider>
    </div>
  );
}

export default App;
