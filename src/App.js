import './App.css';
import { useState } from "react";
import CharacterName from "./components/CharacterName"
import HpTracker from "./components/HpTracker"
import SaveCharacter from "./components/SaveCharacter";
import CharacterList from "./components/CharacterList"

function App() {
  const [name, setName] = useState("Dee Fault")
  const [currentHp, setHp] = useState(0);

  return (
    <div className="App">
      <CharacterName name={name} setName={setName}/>
      <HpTracker currentHp={currentHp} setHp={setHp}/>
      <SaveCharacter name={name} currentHp={currentHp}/>
      <CharacterList/>
    </div>
  );
}

export default App;
