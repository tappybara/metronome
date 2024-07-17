import { useEffect, useState } from "react";

import "./Counter.css";

import metronome from "../../audio/metronome.mp3";
import Play from '../../assets/play-button-arrowhead.png'
import Pause from '../../assets/pause.png'
import Reset from '../../assets/undo.png'

const audio = new Audio(metronome);

const Counter = ({ notesPerBar }: { notesPerBar: number }) => {
    const [count, setCount] = useState(0);
    const [bpm, setBPM] = useState(60)
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
                <div className="container">
                    <div className="input-container">
                        <input
                            maxLength={3}
                            defaultValue={bpm}
                            disabled={isPlaying}
                            onChange={(e: React.FormEvent<HTMLInputElement>) => {
                                const newBPM = Number(e.currentTarget.value);

                                if (newBPM >= 50 && newBPM <= 250) {
                                    setBPM(newBPM);
                                } else {
                                    // alert?
                                }
                            }}
                        />
                        <span>BPM</span>
                    </div>
                    <div className="controls">
                        {isPlaying ?
                            <>
                                <img src={Pause} />
                                <img src={Reset} />
                            </>
                            : <img src={Play} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
