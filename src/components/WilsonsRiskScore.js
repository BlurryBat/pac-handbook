import React, { useState } from "react";

function WilsonsRiskScore() {
    const [scores, setScores] = useState({
        weight: null,
        headAndNeckMovement: null,
        jawMovement: null,
        recedingMandible: null,
        buckTeeth: null,
    });

    const handleScoreChange = (parameter, value) => {
        setScores((prevScores) => ({
            ...prevScores,
            [parameter]: parseInt(value, 10),
        }));
    };

    const calculateTotalScore = () => {
        return Object.values(scores).reduce((sum, score) => sum + (score || 0), 0);
    };

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Airway Risk Assessment - Wilson’s Risk Score</h2>
            <p style={descriptionStyle}>
                Wilson’s risk score helps assess airway risks preoperatively. Higher scores indicate greater airway risk.
            </p>

            <form style={formStyle}>
                {[
                    { parameter: "weight", label: "Weight", options: ["<90 kg", "90–110 kg", ">110 kg"] },
                    { parameter: "headAndNeckMovement", label: "Head and Neck Movement", options: [">90°", "About 90°", "<90°"] },
                    {
                        parameter: "jawMovement",
                        label: "Jaw Movement",
                        options: ["IG>5 cm or sLux>0", "IG<5 cm and sLux=0", "IG<5 cm and sLux<0"],
                    },
                    { parameter: "recedingMandible", label: "Receding Mandible", options: ["None", "Moderate", "Severe"] },
                    { parameter: "buckTeeth", label: "Buck Teeth", options: ["None", "Moderate", "Severe"] },
                ].map((item, index) => (
                    <div key={index} style={formGroupStyle}>
                        <label style={labelStyle}>{item.label}</label>
                        <div style={radioGroupStyle}>
                            {item.options.map((option, i) => (
                                <label key={i} style={radioLabelStyle}>
                                    <input
                                        type="radio"
                                        name={item.parameter}
                                        value={i}
                                        onChange={() => handleScoreChange(item.parameter, i)}
                                    />{" "}
                                    {option}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </form>

            <div style={resultContainerStyle}>
                <h3>Total Score: {calculateTotalScore()}</h3>
                <p style={noteStyle}>
                    <strong>Interpretation:</strong> Higher scores indicate increased airway risk.
                </p>
            </div>
        </div>
    );
}

const pageContainerStyle = {
    maxWidth: "900px",
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
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "16px",
    color: "#666",
};

const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
};

const formGroupStyle = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
};

const labelStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "5px",
};

const radioGroupStyle = {
    display: "flex",
    gap: "15px",
};

const radioLabelStyle = {
    fontSize: "14px",
    color: "#333",
};

const resultContainerStyle = {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const noteStyle = {
    fontSize: "14px",
    color: "#666",
};

export default WilsonsRiskScore;
