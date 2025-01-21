import React from "react";

function CHA2DS2VAScAssessmentAF() {
    const scoreComponents = [
        { condition: "Congestive Heart Failure (CHF)", points: 1 },
        { condition: "Hypertension (HTN)", points: 1 },
        { condition: "Age ≥ 75 years", points: 2 },
        { condition: "Diabetes Mellitus (DM)", points: 1 },
        { condition: "Prior Stroke/Transient Ischemic Attack (TIA)", points: 2 },
    ];

    const strokeRisk = [
        { score: 0, yearlyRisk: "1.9%" },
        { score: 1, yearlyRisk: "2.8%" },
        { score: 2, yearlyRisk: "4.0%" },
        { score: 3, yearlyRisk: "5.9%" },
        { score: 4, yearlyRisk: "8.5%" },
        { score: 5, yearlyRisk: "12.5%" },
        { score: 6, yearlyRisk: "18.2%" },
    ];

    const treatmentPlan = [
        { score: "0 (Low Risk)", treatment: "Aspirin" },
        { score: "1 (Moderate Risk)", treatment: "Aspirin or Oral Anticoagulant" },
        { score: "2+ (High Risk)", treatment: "Oral Anticoagulant" },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>CHA2DS2-VASc Score Assessment and Treatment Plan for AF</h2>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Score Components</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Condition</th>
                        <th style={thStyle}>Points</th>
                    </tr>
                    </thead>
                    <tbody>
                    {scoreComponents.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.condition}</td>
                            <td style={tdStyle}>{item.points}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Yearly Stroke Risk</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>CHA2DS2 Score</th>
                        <th style={thStyle}>Yearly Stroke Risk (%)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {strokeRisk.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.score}</td>
                            <td style={tdStyle}>{item.yearlyRisk}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Treatment Plan</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>CHA2DS2 Score</th>
                        <th style={thStyle}>Treatment</th>
                    </tr>
                    </thead>
                    <tbody>
                    {treatmentPlan.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.score}</td>
                            <td style={tdStyle}>{item.treatment}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
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

const subHeaderStyle = {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#555",
};

const sectionStyle = {
    marginBottom: "30px",
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
};

const thStyle = {
    padding: "10px",
    textAlign: "left",
    border: "1px solid #ddd",
    backgroundColor: "#f0f0f0",
};

const tdStyle = {
    padding: "10px",
    textAlign: "left",
    border: "1px solid #ddd",
};

export default CHA2DS2VAScAssessmentAF;
