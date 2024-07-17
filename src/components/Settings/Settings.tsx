import './Settings.css'

const NOTES = [2, 4, 8, 16]

const MEASURES = [1, 2, 3, 4, 5, 6, 7, 8]

const Settings = ({ bpm, setBPM, setNoteType, setMeasure }:
    { bpm: number; setBPM: Function; setNoteType: Function; setMeasure: Function; }) => {

    // audio settings?

    return (
        <div className="settings-container">
            <select
                onChange={(e: React.FormEvent<HTMLSelectElement>) => {
                    const note = Number(e.currentTarget.value);
                    setNoteType(note);
                }}
            >
                {NOTES.map(note =>
                    <option value={note}>{note}</option>
                )}
            </select>
            <div>/</div>
            <select
                onChange={(e: React.FormEvent<HTMLSelectElement>) => {
                    const number = Number(e.currentTarget.value);
                    setMeasure(number);
                }}
            >
                {MEASURES.map(length =>
                    <option value={length}>{length}</option>
                )}
            </select>
        </div>
    )
}

export default Settings