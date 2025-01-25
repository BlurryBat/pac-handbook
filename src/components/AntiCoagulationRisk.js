import React from "react";

function AnticoagulationRisk() {
    const anticoagulants = [
        { drug: "Dabigatran", daysToHold: "5" },
        { drug: "Rivaroxaban", daysToHold: "3" },
        { drug: "Apixaban", daysToHold: "3" },
        { drug: "Edoxaban", daysToHold: "No recommendation" },
        { drug: "Betrixaban", daysToHold: "No recommendation" },
        { drug: "Clopidogrel", daysToHold: "7" },
        { drug: "Prasugrel", daysToHold: "7–10" },
    ];

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Anticoagulation Risk: Anticoagulants and Neuraxial Anesthesia</h2>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Drug</th>
                    <th style={thStyle}>Days to Hold Before Neuraxial Anesthesia</th>
                </tr>
                </thead>
                <tbody>
                {anticoagulants.map((item, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>{item.drug}</td>
                        <td style={tdStyle}>{item.daysToHold}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

const containerStyle = {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
};

const headerStyle = {
    textAlign: "center",
    color: "#333",
    fontSize: "24px",
    marginBottom: "20px",
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
};

const thStyle = {
    padding: "10px",
    textAlign: "center",
    border: "1px solid #ddd",
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
};

const tdStyle = {
    padding: "10px",
    textAlign: "center",
    border: "1px solid #ddd",
};

export default AnticoagulationRisk;
