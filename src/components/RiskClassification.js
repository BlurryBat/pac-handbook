import React from "react";

function RiskClassification() {
    const riskData = [
        {
            category: 1,
            description:
                "Minimal risk to the patient independent of anesthesia. Minimally invasive procedure with little or no blood loss. Procedures are often done in an office setting, with the operating room used principally for anesthesia and monitoring.",
        },
        {
            category: 2,
            description:
                "Minimal to moderately invasive procedure, with expected blood loss not exceeding 500 mL. Mild risk to patient independent of anesthesia.",
        },
        {
            category: 3,
            description:
                "Moderately to significantly invasive procedure, with expected blood loss of 500-1500 mL. Moderate risk to patient independent of anesthesia.",
        },
        {
            category: 4,
            description:
                "Highly invasive procedure, with expected blood loss exceeding 1500 mL. Major risk to patient independent of anesthesia.",
        },
        {
            category: 5,
            description:
                "Highly invasive procedure, with expected blood loss exceeding 1500 mL. Critical risk to patient independent of anesthesia. Usually requires postoperative critical care unit stay with invasive monitoring.",
        },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>John Hopkins Surgery Risk Classification</h2>
            <table style={tableStyle}>
                <thead>
                <tr style={tableHeaderStyle}>
                    <th style={thStyle}>Category</th>
                    <th style={thStyle}>Description</th>
                </tr>
                </thead>
                <tbody>
                {riskData.map((risk) => (
                    <tr key={risk.category} style={tableRowStyle}>
                        <td style={tdStyle}>{risk.category}</td>
                        <td style={tdStyle}>{risk.description}</td>
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
    backgroundColor: "#fff",
};

const tableHeaderStyle = {
    backgroundColor: "#333",
    color: "#fff",
};

const thStyle = {
    padding: "10px",
    textAlign: "left",
    border: "1px solid #ddd",
    fontSize: "16px",
};

const tdStyle = {
    padding: "10px",
    textAlign: "left",
    border: "1px solid #ddd",
    fontSize: "14px",
    verticalAlign: "top",
};

const tableRowStyle = {
    backgroundColor: "#f9f9f9",
};

export default RiskClassification;
