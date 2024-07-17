import { useState } from "react";

import Counter from "./components/Counter/Counter";
import Settings from './components/Settings/Settings'

import "./App.css";

function App() {
  const [bpm, setBPM] = useState<number>(60);
  const [noteType, setNoteType] = useState<number>(4);
  const [measure, setMeasure] = useState<number>(4)

  return (
    <div>
      <div className="flex">
        <Counter notesPerBar={measure} />
      </div>
      <div>
        <Settings bpm={bpm} setBPM={setBPM} setNoteType={setNoteType} setMeasure={setMeasure} />
      </div>
    </div>
  );
}

export default App;
