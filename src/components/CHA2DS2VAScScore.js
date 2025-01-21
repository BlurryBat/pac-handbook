import React from "react";

function CHA2DS2VAScScore() {
    const riskFactors = [
        { factor: "Heart Failure (Associated signs and symptoms, or left ventricular systolic dysfunction)", points: 1 },
        { factor: "Hypertension", points: 1 },
        { factor: "Age ≥ 75 years", points: 2 },
        { factor: "Diabetes mellitus", points: 1 },
        { factor: "Previous stroke, transient ischemic attack, or thromboembolism", points: 2 },
        { factor: "Vascular Disease (Myocardial infarction, peripheral artery disease, or aortic plaque)", points: 1 },
        { factor: "Age 65–74 years", points: 1 },
        { factor: "Female sex", points: 1 },
    ];

    const riskLevels = [
        { risk: "Low Risk", description: "CHA2DS2 score of 0 to 2" },
        { risk: "Moderate Risk", description: "CHA2DS2 score of 3 to 4" },
        { risk: "High Risk", description: "CHA2DS2 score of 5 to 6 or 3 to 4 with a history of transient ischemic attack, stroke, or intracardiac thrombus" },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>CHA2DS2-VASc Score</h2>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Scoring Scheme</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Risk Factor</th>
                        <th style={thStyle}>Points</th>
                    </tr>
                    </thead>
                    <tbody>
                    {riskFactors.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.factor}</td>
                            <td style={tdStyle}>{item.points}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Risk Levels</h3>
                <ul style={listStyle}>
                    {riskLevels.map((item, index) => (
                        <li key={index} style={listItemStyle}>
                            <strong>{item.risk}:</strong> {item.description}
                        </li>
                    ))}
                </ul>
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

const listStyle = {
    paddingLeft: "20px",
};

const listItemStyle = {
    marginBottom: "5px",
    fontSize: "16px",
    color: "#333",
};


export default CHA2DS2VAScScore;
