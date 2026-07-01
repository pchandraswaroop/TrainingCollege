import { useState } from "react";
export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleAdd = async () => {
    const response = await fetch("http://localhost:3000/add", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        a: Number(num1),
        b: Number(num2),
      }),
    });
    const data = await response.json();
    setResult(data.sum);
  };
  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <button onClick={handleAdd}>Add</button>
      <p>Result: {result}</p>
    </div>
  );
}
