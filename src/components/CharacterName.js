import { useState, useRef, useEffect } from "react";

function CharacterName({ name, setName }) {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null)

  function handleNameChange(element) {
    setName(element.target.value);
  }

  function handleBlur() {
    setIsEditing(false);
  }

  function handleKeyDown(element) {
    if (element.key === "Enter") {
      setIsEditing(false);
    }
  }

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  if (isEditing) {
    return (
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={handleNameChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
    );
  }

  return <h1 onClick={() => setIsEditing(true)}>Character Name: {name}</h1>;
}

export default CharacterName;
