import React, { useState } from "react";

function CSHAFrailtyScale() {
    const [selectedScore, setSelectedScore] = useState(null);

    const frailtyLevels = [
        { score: 1, description: "Very fit — robust, active, energetic, well-motivated and fit; these people commonly exercise regularly and are in the most fit group for their age." },
        { score: 2, description: "Well — without active disease, but less fit than people in category 1." },
        { score: 3, description: "Well, with treated comorbid disease — disease symptoms are well controlled compared with those in category 4." },
        { score: 4, description: "Apparently vulnerable — although not frankly dependent, these people commonly complain of being “slowed up” or have disease symptoms." },
        { score: 5, description: "Mildly frail — with limited dependence on others for instrumental activities of daily living." },
        { score: 6, description: "Moderately frail — help is needed with both instrumental and non-instrumental activities of daily living." },
        { score: 7, description: "Severely frail — completely dependent on others for the activities of daily living, or terminally ill." },
    ];

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>CSHA Frailty Scale</h2>
            <p style={descriptionStyle}>Select the appropriate frailty level for the patient:</p>
            <div style={frailtyListStyle}>
                {frailtyLevels.map((level) => (
                    <div key={level.score} style={frailtyItemStyle}>
                        <input
                            type="radio"
                            id={`frailty-${level.score}`}
                            name="frailty"
                            value={level.score}
                            onChange={() => setSelectedScore(level.score)}
                            checked={selectedScore === level.score}
                        />
                        <label htmlFor={`frailty-${level.score}`} style={labelStyle}>
                            <strong>Level {level.score}:</strong> {level.description}
                        </label>
                    </div>
                ))}
            </div>
            {selectedScore && (
                <div style={resultStyle}>
                    <h3>Selected Frailty Level: {selectedScore}</h3>
                    <p>{frailtyLevels.find((level) => level.score === selectedScore).description}</p>
                </div>
            )}
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

const descriptionStyle = {
    fontSize: "16px",
    marginBottom: "20px",
    color: "#555",
};

const frailtyListStyle = {
    marginBottom: "20px",
};

const frailtyItemStyle = {
    marginBottom: "10px",
};

const labelStyle = {
    marginLeft: "10px",
    fontSize: "16px",
    color: "#333",
};

const resultStyle = {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#e6f7ff",
    border: "1px solid #91d5ff",
    borderRadius: "4px",
    color: "#003a8c",
};

export default CSHAFrailtyScale;
