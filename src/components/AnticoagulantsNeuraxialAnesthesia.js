import React from "react";

function AnticoagulantsNeuraxialAnesthesia() {
    const anticoagulantsTable = [
        {
            anticoagulant: "Unfractionated Heparin, Subcutaneous",
            discontinuation: "≤5000 units twice a day for ≤3 d: No contraindication\n>5000 units twice a day or any 3 times a day dosing: Safety not established",
            administration: "1 h (≤5000 units)\nSafety not established (>5000 units)",
        },
        {
            anticoagulant: "Unfractionated Heparin, Intravenous",
            discontinuation: "4 h, consider ACT",
            administration: "1 h",
        },
        {
            anticoagulant: "Low-Molecular-Weight Heparin",
            discontinuation: "Prophylactic dose: 12 h\nTherapeutic dose: 24 h",
            administration: "6–8 h after insertion, 2 h after removal",
        },
        {
            anticoagulant: "Warfarin",
            discontinuation: "4–5 d and normalization of INR for insertion, INR <1.5 for removal",
            administration: "Can be initiated, INR should not exceed 1.5 with indwelling catheter",
        },
        {
            anticoagulant: "Nonsteroidal Anti-inflammatory Drugs/Aspirin",
            discontinuation: "No contraindication",
            administration: "No contraindication",
        },
        {
            anticoagulant: "Ticlopidine",
            discontinuation: "14 d",
            administration: "No recommendation",
        },
        {
            anticoagulant: "Clopidogrel",
            discontinuation: "7 d",
            administration: "No recommendation",
        },
        {
            anticoagulant: "Herbals (Gingko, Garlic, Ginseng)",
            discontinuation: "No contraindication",
            administration: "No contraindication",
        },
    ];

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Anticoagulants and Neuraxial Anesthesia</h2>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Anticoagulant</th>
                    <th style={thStyle}>Discontinuation Before Neuraxial Block/After Removal of Catheter</th>
                    <th style={thStyle}>Administration After Neuraxial Block/Catheter Withdrawal</th>
                </tr>
                </thead>
                <tbody>
                {anticoagulantsTable.map((row, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>{row.anticoagulant}</td>
                        <td style={tdStyle}>{row.discontinuation}</td>
                        <td style={tdStyle}>{row.administration}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <p style={noteStyle}>
                <strong>Note:</strong> Multimodal anticoagulation and regional anesthesia safety not well established.
            </p>
        </div>
    );
}

const containerStyle = {
    padding: "20px",
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
};

const headerStyle = {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
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

const noteStyle = {
    marginTop: "20px",
    fontSize: "14px",
    color: "#555",
};

export default AnticoagulantsNeuraxialAnesthesia;
