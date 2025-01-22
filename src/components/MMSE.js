import React, { useState } from "react";

function MMSEInteractive() {
    const [scores, setScores] = useState({
        orientation: 0,
        registration: 0,
        attention: 0,
        recall: 0,
        language: 0,
        copying: 0,
    });

    const maxScores = {
        orientation: 10,
        registration: 3,
        attention: 5,
        recall: 3,
        language: 9,
        copying: 1,
    };

    const handleScoreChange = (section, value) => {
        const parsedValue = parseInt(value) || 0;
        if (parsedValue <= maxScores[section]) {
            setScores({ ...scores, [section]: parsedValue });
        }
    };

    const calculateTotal = () => {
        return Object.values(scores).reduce((acc, val) => acc + val, 0);
    };

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Mini-Mental State Examination (MMSE)</h2>

            {/* Orientation Section */}
            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Orientation (Max: {maxScores.orientation})</h3>
                <ol>
                    <li>What is the year, season, date, day, month? (5 points)</li>
                    <li>Where are we now? (State, county, town/city, hospital, floor) (5 points)</li>
                </ol>
                <input
                    type="number"
                    min="0"
                    max={maxScores.orientation}
                    value={scores.orientation}
                    onChange={(e) => handleScoreChange("orientation", e.target.value)}
                    style={inputStyle}
                />
            </section>

            {/* Registration Section */}
            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Registration (Max: {maxScores.registration})</h3>
                <p>Examiner names three objects (e.g., apple, pen, table). Patient repeats all three. (1 point per correct object).</p>
                <input
                    type="number"
                    min="0"
                    max={maxScores.registration}
                    value={scores.registration}
                    onChange={(e) => handleScoreChange("registration", e.target.value)}
                    style={inputStyle}
                />
            </section>

            {/* Attention Section */}
            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Attention (Max: {maxScores.attention})</h3>
                <ol>
                    <li>Count backward from 100 by sevens (e.g., 93, 86, 79...). Stop after five subtractions. (5 points)</li>
                    <li>Alternatively, spell "WORLD" backward (D-L-R-O-W) (5 points).</li>
                </ol>
                <input
                    type="number"
                    min="0"
                    max={maxScores.attention}
                    value={scores.attention}
                    onChange={(e) => handleScoreChange("attention", e.target.value)}
                    style={inputStyle}
                />
            </section>

            {/* Recall Section */}
            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Recall (Max: {maxScores.recall})</h3>
                <p>Ask the patient to name the three objects learned earlier during the Registration section. (1 point per object).</p>
                <input
                    type="number"
                    min="0"
                    max={maxScores.recall}
                    value={scores.recall}
                    onChange={(e) => handleScoreChange("recall", e.target.value)}
                    style={inputStyle}
                />
            </section>

            {/* Language Section */}
            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Language (Max: {maxScores.language})</h3>
                <ol>
                    <li>Name two objects shown by the examiner (e.g., a pencil and watch). (2 points)</li>
                    <li>Repeat the sentence: "No ifs, ands, or buts." (1 point)</li>
                    <li>Follow a three-stage command (e.g., "Take this paper, fold it in half, and put it on the floor.") (3 points)</li>
                    <li>Read and obey the command: "Close your eyes." (1 point)</li>
                    <li>Write a sentence containing a subject and a verb. (1 point)</li>
                </ol>
                <input
                    type="number"
                    min="0"
                    max={maxScores.language}
                    value={scores.language}
                    onChange={(e) => handleScoreChange("language", e.target.value)}
                    style={inputStyle}
                />
            </section>

            {/* Copying Section */}
            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Copying (Max: {maxScores.copying})</h3>
                <p>Ask the patient to copy a pair of intersecting pentagons. Score if the copy has 10 angles and the sides intersect. (1 point)</p>
                <input
                    type="number"
                    min="0"
                    max={maxScores.copying}
                    value={scores.copying}
                    onChange={(e) => handleScoreChange("copying", e.target.value)}
                    style={inputStyle}
                />
            </section>

            {/* Total Score */}
            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Total Score: {calculateTotal()} / 30</h3>
            </section>
        </div>
    );
}

const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const headerStyle = {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
};

const sectionStyle = {
    marginBottom: "20px",
};

const subHeaderStyle = {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#555",
};

const inputStyle = {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    width: "100px",
};

export default MMSEInteractive;
