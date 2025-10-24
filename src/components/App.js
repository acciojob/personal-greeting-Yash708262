
import React from "react";
import './../styles/App.css';

const App = () => {
   const [name, setName] = useState("");
  return (
     <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <div style={{ marginTop: "20px", fontSize: "20px", fontWeight: "bold" }}>
        {name && `Hello, ${name}!`}
      </div>
    </div>
  )
}

export default App
