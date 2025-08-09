import { useState } from "react";

import CharacterName from "./CharacterName";
import HpTracker from "./HpTracker";
import SaveCharacter from "./SaveCharacter";

function Character(props) {
  const [characterName, setCharacterName] = useState(props.name);
  const [currentHp, setHp] = useState(props.hp);

  //todo: Add in edit button
  return (
    <div>
      <CharacterName name={characterName} setName={setCharacterName} />
      <HpTracker currentHp={currentHp} setHp={setHp} />
      <SaveCharacter name={characterName} currentHp={currentHp} />
    </div>
  );
}
export default Character;