import './App.css';
import CharacterName from "./components/CharacterName"
import HpTracker from "./components/HpTracker"

function App() {
  return (
    <div className="App">
      <CharacterName name="Dee Fault"/>
      <HpTracker/>
    </div>
  );
}

export default App;
