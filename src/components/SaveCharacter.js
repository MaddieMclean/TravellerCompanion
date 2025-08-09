import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

function SaveCharacter({ name, currentHp }) {
  const saveCharacter = async () => {
    try {
      const docRef = await addDoc(collection(db, "characters"), {
        name: name,
        hp: currentHp,
      });
      console.log(`Document created for ID: ${docRef.id}`);
    } catch (e) {
      console.error(`Error adding document: ${e}`);
    }
  };

  function handleClick() {
    saveCharacter();
  }

  return (
    <div>
      <button onClick={handleClick}>Save Character</button>
    </div>
  );
}

export default SaveCharacter;
