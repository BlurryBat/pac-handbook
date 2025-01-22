import React from "react";

function ClinicalPulmonaryInfectionScore() {
    const data = [
        { component: "Temperature (°C)", points: [
                { condition: "≥ 36.5 and ≤ 38.4", score: 0 },
                { condition: "≥ 38.5 and ≤ 38.9", score: 1 },
                { condition: "≥ 39.0 and ≤ 36.0", score: 2 },
            ]},
        { component: "Blood leukocytes (μL)", points: [
                { condition: "≥ 4,000 and ≤ 11,000", score: 0 },
                { condition: "< 4,000 or > 11,000", score: 1 },
            ]},
        { component: "Tracheal secretions", points: [
                { condition: "Few", score: 0 },
                { condition: "Moderate", score: 1 },
                { condition: "Large", score: 2 },
                { condition: "Purulent", score: "+1" },
            ]},
        { component: "Oxygenation PaO₂/FiO₂ (mm Hg)", points: [
                { condition: "> 240 or presence of ARDS", score: 0 },
                { condition: "≤ 240 and absence of ARDS", score: 2 },
            ]},
        { component: "Chest radiograph", points: [
                { condition: "No infiltrate", score: 0 },
                { condition: "Patchy or diffuse infiltrate", score: 1 },
                { condition: "Localized infiltrate", score: 2 },
            ]},
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>CPIS: Clinical Pulmonary Infection Score</h2>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Component</th>
                    <th style={thStyle}>Condition</th>
                    <th style={thStyle}>Points</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    item.points.map((point, subIndex) => (
                        <tr key={`${index}-${subIndex}`}>
                            <td style={tdStyle}>{subIndex === 0 ? item.component : ""}</td>
                            <td style={tdStyle}>{point.condition}</td>
                            <td style={tdStyle}>{point.score}</td>
                        </tr>
                    ))
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

export default ClinicalPulmonaryInfectionScore;
