import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

function CharacterList() {
  const [characterList, setCharacterList] = useState([]);

  function snapshotCallback(snapshot) {
    const characterData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setCharacterList(characterData);
  };

  useEffect(() => {
    const charactersCollection = collection(db, "characters");
    const unsubscribe = onSnapshot(charactersCollection, snapshotCallback);
    return () => {
      unsubscribe();
      console.log("Listener Detached.");
    };
  }, []);

  return (
    <div>
      <ul>
        {characterList.map((character) => (
          <li>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
