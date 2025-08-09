import "./App.css";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import CharacterList from "./components/CharacterList";
import LogOut from "./components/LogOut";
import Login from "./components/Login";
import { auth } from "./firebase";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  function updateUser() {
    if (auth.currentUser) {
      setCurrentUser(auth.currentUser.uid);
    } else {
      setCurrentUser(null);
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, updateUser);
  });

  if (currentUser == null) {
    return <Login />;
  }

  return (
    <div className="App">
      <p>Current User: {auth.currentUser.uid}</p>
      <CharacterList />
      <LogOut />
    </div>
  );
}

export default App;
