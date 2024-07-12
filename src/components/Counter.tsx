import { useEffect, useState } from "react";
import "./Counter.css";
import metronome from "../audio/metronome.mp3";

const audio = new Audio(metronome);
const Counter = ({ bpm, notesPerBar }: { bpm: number; notesPerBar: 4 | 6 }) => {
    const [count, setCount] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setCount((count) => (count < notesPerBar ? count + 1 : 1));
                audio.currentTime = 0;
                audio.play();
            }, 60000 / bpm);

            // important to clear the interval when we don't need it anymore
            return () => {
                setCount(1);
                clearInterval(interval);
            };
        }
    }, [bpm, isPlaying, notesPerBar]);

    return (
        <div>
            <div className="inner-circle">
                <div>{count}</div>
                <button onClick={() => setIsPlaying((isPlaying) => !isPlaying)}>
                    click me!
                </button>
            </div>
        </div>
    );
};

export default Counter;
