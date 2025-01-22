import React from "react";

function RiskFactorsForAKIAndCKDClassification() {
    const akiRiskFactors = [
        { riskFactor: "Age >59 y", category: "Class I (0 risk factors)", frequency: "0.3%" },
        { riskFactor: "BMI >32", category: "Class II (1 risk factor)", frequency: "0.5%" },
        { riskFactor: "Emergency surgery", category: "Class II (1 risk factor)", frequency: "1.3%" },
        { riskFactor: "High-risk surgery", category: "Class IV (≥3 risk factors)", frequency: "4.3%" },
        { riskFactor: "Peripheral vascular disease", category: "-", frequency: "-" },
        { riskFactor: "COPD", category: "-", frequency: "-" },
        { riskFactor: "Liver disease", category: "-", frequency: "-" },
    ];

    const ckdClassification = [
        { stage: "Stage 1", gfr: "≥90 ml/min/1.73 m²", description: "Normal GFR with other evidence of chronic kidney damage" },
        { stage: "Stage 2", gfr: "60–89 ml/min/1.73 m²", description: "Mild impairment with other evidence of chronic kidney damage" },
        { stage: "Stage 3", gfr: "30–59 ml/min/1.73 m²", description: "Moderate impairment" },
        { stage: "Stage 4", gfr: "15–29 ml/min/1.73 m²", description: "Severe impairment" },
        { stage: "Stage 5", gfr: "<15 ml/min/1.73 m² or on dialysis", description: "Established renal failure" },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Risk Factors for AKI After Noncardiac Surgery</h2>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Risk Factor</th>
                    <th style={thStyle}>Risk Category</th>
                    <th style={thStyle}>AKI Frequency (%)</th>
                </tr>
                </thead>
                <tbody>
                {akiRiskFactors.map((item, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>{item.riskFactor}</td>
                        <td style={tdStyle}>{item.category}</td>
                        <td style={tdStyle}>{item.frequency}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h2 style={headerStyle}>Classification of CKD</h2>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Stage</th>
                    <th style={thStyle}>GFR</th>
                    <th style={thStyle}>Description</th>
                </tr>
                </thead>
                <tbody>
                {ckdClassification.map((item, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>{item.stage}</td>
                        <td style={tdStyle}>{item.gfr}</td>
                        <td style={tdStyle}>{item.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
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

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
};

const thStyle = {
    padding: "10px",
    textAlign: "center",
    border: "1px solid #ddd",
    backgroundColor: "#f0f0f0",
};

const tdStyle = {
    padding: "10px",
    textAlign: "center",
    border: "1px solid #ddd",
};

export default RiskFactorsForAKIAndCKDClassification;
