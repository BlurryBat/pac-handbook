import React from "react";

function ZAHARASystem() {
    const criteria = [
        { description: "History of arrhythmia", points: 1.5 },
        { description: "Use of cardiac medications before pregnancy", points: 1.5 },
        { description: "NYHA > class II", points: 0.75 },
        { description: "Left-sided heart obstruction (peak gradient > 50 mm Hg or aortic valve area < 1.0 cm²)", points: 2.5 },
        { description: "Systemic atrioventricular valve regurgitation (moderate/severe)", points: 0.75 },
        { description: "Pulmonary atrioventricular valve regurgitation (moderate/severe)", points: 0.75 },
        { description: "Mechanical valve prosthesis", points: 4.25 },
        { description: "Repaired or unrepaired cyanotic heart disease", points: 1.0 },
    ];

    const complicationRates = [
        { points: "0–0.5", rate: "2.9%" },
        { points: "0.51–1.50", rate: "7.5%" },
        { points: "1.51–2.50", rate: "17.5%" },
        { points: "2.51–3.50", rate: "43.1%" },
        { points: ">3.51", rate: "70.0%" },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>ZAHARA System</h2>
            <p style={descriptionStyle}>
                ZAHARA (Zwangerschap bij vrouwen met een Aangeboren HARtAfwijking) System for Predicting Maternal Cardiovascular Events
            </p>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Criteria</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Clinical Feature</th>
                        <th style={thStyle}>Points</th>
                    </tr>
                    </thead>
                    <tbody>
                    {criteria.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.description}</td>
                            <td style={tdStyle}>{item.points}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Cardiac Complication Rates</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>ZAHARA Points</th>
                        <th style={thStyle}>Cardiac Complication Rate</th>
                    </tr>
                    </thead>
                    <tbody>
                    {complicationRates.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.points}</td>
                            <td style={tdStyle}>{item.rate}</td>
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

const descriptionStyle = {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "16px",
    color: "#555",
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

export default ZAHARASystem;
