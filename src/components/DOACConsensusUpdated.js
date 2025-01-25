import React from "react";

function DOACConsensusUpdated() {
    const data = [
        {
            procedureType: "Low Bleeding Risk Procedures (No Planned Neuraxial Anesthesia)",
            columns: [
                { title: "Direct Thrombin Inhibitor (e.g., Dabigatran)" },
                { title: "Direct Factor Xa Inhibitor (e.g., Rivaroxaban, Apixaban)" },
            ],
            rows: [
                {
                    egfr: "eGFR ≥ 50 mL/min",
                    thrombin: "Last dose 2 days before surgery",
                    factorXa: "Last dose 2 days before surgery",
                },
                {
                    egfr: "eGFR 30–49 mL/min",
                    thrombin: "Last dose 4 days before surgery",
                    factorXa: "Last dose 4 days before surgery",
                },
            ],
        },
        {
            procedureType: "High Bleeding Risk Procedures (No Planned Neuraxial Anesthesia)",
            columns: [
                { title: "Direct Thrombin Inhibitor (e.g., Dabigatran)" },
                { title: "Direct Factor Xa Inhibitor (e.g., Rivaroxaban, Apixaban)" },
            ],
            rows: [
                {
                    egfr: "eGFR ≥ 50 mL/min",
                    thrombin: "Last dose 3 days before surgery",
                    factorXa: "Last dose 3 days before surgery",
                },
                {
                    egfr: "eGFR 30–49 mL/min",
                    thrombin: "Last dose 5 days before surgery",
                    factorXa: "Last dose 5 days before surgery",
                },
            ],
        },
    ];

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>DOAC: Consensus on Preoperative Use</h2>
            {data.map((section, index) => (
                <div key={index} style={sectionStyle}>
                    <h3 style={subHeaderStyle}>{section.procedureType}</h3>
                    <table style={tableStyle}>
                        <thead>
                        <tr>
                            <th style={thStyle}>eGFR</th>
                            {section.columns.map((col, colIndex) => (
                                <th key={colIndex} style={thStyle}>
                                    {col.title}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {section.rows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                <td style={tdStyle}>{row.egfr}</td>
                                <td style={tdStyle}>{row.thrombin}</td>
                                <td style={tdStyle}>{row.factorXa}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ))}
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

const sectionStyle = {
    marginBottom: "30px",
};

const subHeaderStyle = {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#555",
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

export default DOACConsensusUpdated;
