import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handlePredict = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", { text });
      setResult(response.data.sentiment);
    } catch (error) {
      console.error("Error:", error);
      setResult("Error connecting to backend!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Sentiment Analysis</h2>
      <input
        type="text"
        placeholder="Enter text..."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handlePredict}>Analyze</button>
      <p>Prediction: {result}</p>
    </div>
  );
}

export default App;
