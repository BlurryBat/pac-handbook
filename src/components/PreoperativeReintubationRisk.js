import React from "react";

function PreoperativeReintubationRisk() {
    const predictors = [
        { predictor: "ASA score ≥3", points: 3 },
        { predictor: "Emergency procedure", points: 3 },
        { predictor: "High-risk surgery (vascular, transplant, neurosurgery, thoracic, general, burns)", points: 2 },
        { predictor: "History of congestive heart failure", points: 2 },
        { predictor: "Chronic pulmonary disease", points: 1 },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Preoperative Risk Factors for Postoperative Reintubation</h2>
            <p style={descriptionStyle}>
                This table outlines the risk factors and corresponding point values for predicting postoperative reintubation. A total score can be used to estimate the probability of reintubation based on the provided chart.
            </p>

            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Predictor</th>
                    <th style={thStyle}>Point Value</th>
                </tr>
                </thead>
                <tbody>
                {predictors.map((item, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>{item.predictor}</td>
                        <td style={tdStyle}>{item.points}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div style={chartContainerStyle}>
                <img
                    src="/path-to-your-image/reintubation-risk-chart.png"
                    alt="Score for Prediction of Postoperative Reintubation"
                    style={chartStyle}
                />
            </div>

            <p style={referenceStyle}>
                <strong>Reference:</strong> Adapted from Brueckmann B, Villa-Uribe JL, et al. Development and validation of a score for prediction of postoperative respiratory complications. Anesthesiology. 2013;118:1276–1285.
            </p>
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
    color: "#555",
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
};

const thStyle = {
    padding: "10px",
    textAlign: "left",
    borderBottom: "2px solid #ddd",
    backgroundColor: "#f0f0f0",
};

const tdStyle = {
    padding: "10px",
    textAlign: "center",
    border: "1px solid #ddd",
};

const chartContainerStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0",
};

const chartStyle = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const referenceStyle = {
    textAlign: "center",
    fontSize: "14px",
    color: "#777",
};

export default PreoperativeReintubationRisk;