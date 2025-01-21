import React from "react";

function H2PEFScore() {
    const scoreComponents = [
        { clinicalVariable: "Heavy (BMI >30 kg/m²)", points: 2 },
        { clinicalVariable: "Hypertensive (>2 antihypertensive medications)", points: 1 },
        { clinicalVariable: "Fibrillation, atrial (any history)", points: 3 },
        { clinicalVariable: "Pulmonary hypertension (rest RVSP >35 mmHg)", points: 1 },
        { clinicalVariable: "Elderly (age >60 years)", points: 1 },
        { clinicalVariable: "Filling pressure (E/e'>9)", points: 1 },
    ];

    const recommendations = [
        { score: "0–1", interpretation: "HFpEF ruled out" },
        { score: "2–5", interpretation: "Consider rest/stress RHC or stress echo" },
        { score: "6–9", interpretation: "HFpEF ruled in" },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>H2PEF Score in Unexplained Dyspnoea</h2>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Scoring System</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Clinical Variable</th>
                        <th style={thStyle}>Points</th>
                    </tr>
                    </thead>
                    <tbody>
                    {scoreComponents.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.clinicalVariable}</td>
                            <td style={tdStyle}>{item.points}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Recommendations Based on Score</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Score</th>
                        <th style={thStyle}>Interpretation</th>
                    </tr>
                    </thead>
                    <tbody>
                    {recommendations.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.score}</td>
                            <td style={tdStyle}>{item.interpretation}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <p style={noteStyle}>
                <strong>Note:</strong> BMI = Body Mass Index; E/e' = ratio of early diastolic mitral inflow blood velocity to mitral annular tissue velocity; RHC = Right Heart Catheterisation; RVSP = Right Ventricular Systolic Pressure.
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

const noteStyle = {
    marginTop: "20px",
    fontSize: "14px",
    color: "#666",
    fontStyle: "italic",
};

export default H2PEFScore;
