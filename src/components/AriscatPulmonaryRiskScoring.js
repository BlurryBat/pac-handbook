import React from "react";

function AriscatPulmonaryRiskScoring() {
    const data = [
        { component: "Age ≤50 years", points: 0 },
        { component: "Age 51–80 years", points: 3 },
        { component: "Age >80 years", points: 16 },
        { component: "Preoperative oxygen saturation ≥96%", points: 0 },
        { component: "Preoperative oxygen saturation 91%–95%", points: 8 },
        { component: "Preoperative oxygen saturation ≤91%", points: 24 },
        { component: "Respiratory infection in prior month", points: 17 },
        { component: "Preoperative anemia (<100 g/L)", points: 11 },
        { component: "Surgical incision location: Peripheral", points: 0 },
        { component: "Surgical incision location: Upper abdominal", points: 15 },
        { component: "Surgical incision location: Intrathoracic", points: 24 },
        { component: "Duration of surgery ≤2 h", points: 0 },
        { component: "Duration of surgery >2–3 h", points: 16 },
        { component: "Duration of surgery >3 h", points: 23 },
        { component: "Emergency procedure", points: 8 },
    ];

    const riskData = [
        { score: "< 26", risk: "Low risk: 1.6%" },
        { score: "26–44", risk: "Intermediate risk: 13.3%" },
        { score: "≥ 45", risk: "High risk: 42.1%" },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>ARISCAT: Perioperative Pulmonary Risk Index Scoring Scheme</h2>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Component</th>
                    <th style={thStyle}>Points Assigned</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>{item.component}</td>
                        <td style={tdStyle}>{item.points}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h3 style={subHeaderStyle}>Risk of Pulmonary Complications</h3>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>ARISCAT Score</th>
                    <th style={thStyle}>Risk of Pulmonary Complications</th>
                </tr>
                </thead>
                <tbody>
                {riskData.map((item, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>{item.score}</td>
                        <td style={tdStyle}>{item.risk}</td>
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

const subHeaderStyle = {
    marginTop: "20px",
    fontSize: "20px",
    color: "#333",
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "10px",
};

const thStyle = {
    padding: "10px",
    textAlign: "left",
    borderBottom: "2px solid #ddd",
    backgroundColor: "#f0f0f0",
};

const tdStyle = {
    padding: "10px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
};

export default AriscatPulmonaryRiskScoring;
