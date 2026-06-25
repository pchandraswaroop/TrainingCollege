import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [dcounter, dsetCounter] = useState(0);
  return (
    <div className="flex justify-center items-center shadow-lg gap-2 w-ful h-screen">
      <button
        className="font-mono bg-[#4db3db] px-4 py-2 rounded-md text-white"
        onClick={() => setCounter(counter + 1)}
      >
        Incrementer {counter}
      </button>
      <button
        className="font-mono bg-[#4db3db] px-4 py-2 rounded-md text-white"
        onClick={() => setCounter(counter - 1)}
      >
        Decrementer {counter}
      </button>

      <button
        className="font-mono bg-[#4db3db] px-4 py-2 rounded-md text-white"
        onClick={() => {
          setCounter(0);
          dsetCounter(0);
        }}
      >
        Reset
      </button>
      <button
        className="font-mono bg-[#4db3db] px-4 py-2 rounded-md text-white"
        onClick={() => dsetCounter(dcounter + 1)}
      >
        Incrementer {dcounter}
      </button>
      <button
        className="font-mono bg-[#4db3db] px-4 py-2 rounded-md text-white"
        onClick={() => dsetCounter(dcounter - 1)}
      >
        Decrementer {dcounter}
      </button>
    </div>
  );
};

export default Counter;
