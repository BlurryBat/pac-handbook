import React from "react";

function CARPREGSystem() {
    const criteria = [
        { description: "Prior cardiac event (1 point)", subpoints: ["Heart failure", "Transient ischemic attack", "Cerebrovascular accident", "Arrhythmia"] },
        { description: "NYHA > class II or cyanosis (1 point)" },
        { description: "Mitral valve area < 2 cm² (1 point)" },
        { description: "Aortic valve area < 1.5 cm² (1 point)" },
        { description: "Left ventricular outflow tract gradient > 30 mm Hg (1 point)" },
        { description: "Ejection fraction < 40% (1 point)" },
    ];

    const complicationRates = [
        { points: 0, rate: "5%" },
        { points: 1, rate: "27%" },
        { points: 2, rate: "75%" },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>CARPREG System</h2>
            <p style={descriptionStyle}>
                CARPREG (CARdiac Disease in PREgnancy) System for Predicting Maternal Cardiovascular Events
            </p>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Criteria</h3>
                <ul style={listStyle}>
                    {criteria.map((item, index) => (
                        <li key={index} style={listItemStyle}>
                            {item.description}
                            {item.subpoints && (
                                <ul style={subListStyle}>
                                    {item.subpoints.map((subpoint, subIndex) => (
                                        <li key={subIndex} style={listItemStyle}>
                                            {subpoint}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Cardiac Complication Rates</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>CARPREG Points</th>
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

const listStyle = {
    paddingLeft: "20px",
};

const listItemStyle = {
    marginBottom: "5px",
    fontSize: "14px",
    color: "#333",
};

const subListStyle = {
    paddingLeft: "20px",
};

export default CARPREGSystem;
