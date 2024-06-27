import { useEffect, useState } from "react";

const Counter = ({ bpm, notesPerBar }: { bpm: number; notesPerBar: 4 | 6 }) => {
    const [count, setCount] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setCount((count) => (count < notesPerBar ? count + 1 : 1));
                // play audio here
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
            <div>{count}</div>
            <button onClick={() => setIsPlaying((isPlaying) => !isPlaying)}>
                click me!
            </button>
        </div>
    );
};

export default Counter;
