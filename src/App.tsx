import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [bpm, setBpm] = useState<number>(60);
  const [notesPerBar, setNotesPerBar] = useState<4 | 6>(4);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <Counter bpm={bpm} notesPerBar={notesPerBar} />
      </div>
      <select onChange={(e) => setBpm(Number(e.target.value))}>
        <option value={60}>60</option>
        <option value={120}>120</option>
      </select>
      <select
        onChange={(e: React.FormEvent<HTMLSelectElement>) => {
          const number = Number(e.currentTarget.value);
          // not sure if this is the best way
          if (number !== 4 && number !== 6) {
            throw new Error("no!");
          }

          setNotesPerBar(number);
        }}
      >
        <option value={4}>4</option>
        <option value={6}>6</option>
      </select>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
