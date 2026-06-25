import { useState } from "react";
import LiveCalculator from "./components/LiveCal";
import Counter from "./components/Counter";
import List from "./components/List";
export default function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState(null);
  const handleSubmit = () => {
    if (num1 === "" || num2 === "") return;
    setResult({
      addition: num1 + num2,
      subtraction: num1 - num2,
      multiplication: num1 * num2,
      division: num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by 0",
    });

    setNum1("");
    setNum2("");
  };

  return (
    <>
      <div className="flex  w-full h-screen justify-center items-center bg-gray-50 ">
        <div className="flex flex-col gap-2 shadow-lg rounded-3xl p-5 bg-[#ffffff]">
          <h1 className="  text-3xl  font-bold text-center font-mono  ">
            Calculator
          </h1>

          <input
            className="font-mono bg-gray-200 px-4 py-2 rounded-md"
            type="number"
            placeholder="Number 1"
            onChange={(e) => setNum1(Number(e.target.value))} //event store
            value={num1}
          ></input>
          <input
            className="font-mono bg-gray-200 px-4 py-2 rounded-md"
            type="number"
            placeholder="Number 2"
            onChange={(e) => setNum2(Number(e.target.value))} //event store
            value={num2} //if we want to change at same time keep value{num1}
          ></input>
          <button
            className="font-mono bg-[#4db3db] px-4 py-2 rounded-md text-white"
            onClick={handleSubmit}
            // () =>: You only need the arrow function if you need to pass an argument, like onClick={() => handleAddition(id)}.
          >
            Submit
          </button>
          {result !== null && (
            <div className="flex flex-col gap-1 mt-2 text-center font-mono text-sm">
              <p>Addition: {result.addition}</p>
              <p>Subtraction: {result.subtraction}</p>
              <p>Multiplication: {result.multiplication}</p>
              <p>Division: {result.division}</p>
            </div>
          )}
        </div>
      </div>
      <LiveCalculator />
      <Counter />
      <List />
    </>
  );
}
