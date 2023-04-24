import React, { useState } from "react";
import "./App.css";
import Router from "./components/Routes/Router";
import { UidContext } from "./components/AppContext";

function App() {
  const [uid, setUid] = useState(false);
  return (
    <UidContext.Provider value={uid}>
      <Router />
    </UidContext.Provider>
  );
}

export default App;
