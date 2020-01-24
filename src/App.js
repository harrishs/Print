import React from "react";
import "./App.css";
import ChatBot from "./Components/ChatBot/ChatBot";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10vh"
      }}
    >
      <ChatBot />
    </div>
  );
}

export default App;
