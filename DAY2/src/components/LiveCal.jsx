import { useState } from "react";

export default function LiveCalculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const inputsAreValid = num1 !== "" && num2 !== "";

  const n1 = Number(num1) || 0;
  const n2 = Number(num2) || 0;

  const addition = n1 + n2;
  const subtraction = n1 - n2;
  const multiplication = n1 * n2;

  const division = n2 !== 0 ? (n1 / n2).toFixed(2) : "Cannot divide by 0";

  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-gray-50 p-6">
      <div className="flex flex-col gap-4 shadow-lg rounded-3xl p-6 bg-white w-96 border-2 border-[#4db3db]">
        <h1 className="text-3xl font-bold text-center font-mono text-gray-800">
          Live Math Calc
        </h1>
        <p className="text-xs font-mono text-gray-400 text-center -mt-2">
          (Updates instantly on input change)
        </p>

        <div className="flex flex-col gap-2">
          <input
            className="font-mono bg-gray-100 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4db3db]"
            type="number"
            placeholder="Enter Number 1"
            onChange={(e) => setNum1(e.target.value)}
            value={num1}
          />

          <input
            className="font-mono bg-gray-100 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4db3db]"
            type="number"
            placeholder="Enter Number 2"
            onChange={(e) => setNum2(e.target.value)}
            value={num2}
          />
        </div>

        {inputsAreValid ? (
          <div className="flex flex-col gap-2 mt-2 font-mono">
            <div className="flex justify-between items-center bg-emerald-500 px-4 py-2 rounded-md text-white">
              <span>Addition (+)</span>
              <span className="font-bold">{addition}</span>
            </div>

            <div className="flex justify-between items-center bg-amber-500 px-4 py-2 rounded-md text-white">
              <span>Subtraction (-)</span>
              <span className="font-bold">{subtraction}</span>
            </div>

            <div className="flex justify-between items-center bg-indigo-500 px-4 py-2 rounded-md text-white">
              <span>Multiplication (×)</span>
              <span className="font-bold">{multiplication}</span>
            </div>

            <div className="flex justify-between items-center bg-rose-500 px-4 py-2 rounded-md text-white">
              <span>Division (÷)</span>
              <span className="font-bold">{division}</span>
            </div>
          </div>
        ) : (
          <div className="text-center font-mono text-sm text-gray-400 py-6 border border-dashed border-gray-200 rounded-md mt-2">
            Please enter both numbers to see results.
          </div>
        )}
      </div>
    </div>
  );
}
