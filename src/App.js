import './App.css';
import { useState } from "react";
import CharacterName from "./components/CharacterName"
import HpTracker from "./components/HpTracker"
import SaveCharacter from './components/SaveCharacter';

function App() {
  const name = "Dee Fault"
  const [currentHp, setHp] = useState(0);

  return (
    <div className="App">
      <CharacterName name={name}/>
      <HpTracker currentHp={currentHp} setHp={setHp}/>
      <SaveCharacter name={name} currentHp={currentHp}/>
    </div>
  );
}

export default App;
