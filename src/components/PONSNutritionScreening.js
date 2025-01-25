import React, { useState } from "react";

function PONSNutritionScreening() {
    const [bmi, setBmi] = useState("");
    const [weightLoss, setWeightLoss] = useState(false);
    const [lowIntake, setLowIntake] = useState(false);
    const [albumin, setAlbumin] = useState("");
    const [risk, setRisk] = useState(null);

    const calculateRisk = () => {
        const isBMIAtRisk = bmi < 18.5 || (bmi < 20 && albumin < 3.0);
        const isAtRisk = isBMIAtRisk || weightLoss || lowIntake;
        setRisk(isAtRisk ? "At Risk" : "No Significant Risk");
    };

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>PONS: The PeriOperative Nutrition Screening Score</h2>
            <div style={formStyle}>
                <div style={fieldStyle}>
                    <label style={labelStyle}>BMI:</label>
                    <input
                        type="number"
                        value={bmi}
                        onChange={(e) => setBmi(parseFloat(e.target.value))}
                        style={inputStyle}
                    />
                    <span style={hintStyle}>(Enter BMI &lt; 18.5 or &lt; 20 for age ≥ 65)</span>
                </div>
                <div style={fieldStyle}>
                    <label style={labelStyle}>Unplanned Weight Loss &gt;10% (Past 6 months):</label>
                    <input
                        type="checkbox"
                        checked={weightLoss}
                        onChange={(e) => setWeightLoss(e.target.checked)}
                        style={checkboxStyle}
                    />
                </div>
                <div style={fieldStyle}>
                    <label style={labelStyle}>Low Intake in Preceding Week (&lt; 50% Normal):</label>
                    <input
                        type="checkbox"
                        checked={lowIntake}
                        onChange={(e) => setLowIntake(e.target.checked)}
                        style={checkboxStyle}
                    />
                </div>
                <div style={fieldStyle}>
                    <label style={labelStyle}>Albumin Level (&lt; 3.0 g/dL):</label>
                    <input
                        type="number"
                        value={albumin}
                        onChange={(e) => setAlbumin(parseFloat(e.target.value))}
                        style={inputStyle}
                    />
                </div>
                <button onClick={calculateRisk} style={buttonStyle}>Calculate Risk</button>
                {risk && <div style={resultStyle}>PONS Score: {risk}</div>}
            </div>
        </div>
    );
}

const containerStyle = {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
};

const headerStyle = {
    textAlign: "center",
    color: "#333",
    fontSize: "22px",
    marginBottom: "20px",
};

const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
};

const fieldStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
};

const labelStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#555",
};

const inputStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "16px",
};

const checkboxStyle = {
    transform: "scale(1.2)",
};

const buttonStyle = {
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
};

const resultStyle = {
    textAlign: "center",
    color: "#007BFF",
    fontSize: "18px",
    fontWeight: "bold",
};

const hintStyle = {
    fontSize: "12px",
    color: "#777",
};

export default PONSNutritionScreening;
