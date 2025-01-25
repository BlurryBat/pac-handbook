import React from "react";

function DOACConsensus() {
    const data = [
        {
            procedureType: "Low Bleeding Risk Procedures (ACC Recommendations)",
            inhibitor: "Direct Thrombin Inhibitor (e.g., Dabigatran)",
            factorXa: "Direct Factor Xa Inhibitor (e.g., Rivaroxaban, Edoxaban, Apixaban)",
            rows: [
                { egfr: "≥ 80 mL/min", thrombin: "≥ 24 h", factorXa: "≥ 24 h" },
                { egfr: "50–79 mL/min", thrombin: "≥ 36 h", factorXa: "≥ 36 h" },
                { egfr: "30–49 mL/min", thrombin: "≥ 48 h", factorXa: "≥ 48 h" },
                { egfr: "15–29 mL/min", thrombin: "≥ 72 h", factorXa: "No data (consider ≥ 48 h)" },
                { egfr: "< 15 mL/min", thrombin: "No data", factorXa: "No data" },
            ],
        },
        {
            procedureType: "Uncertain, Intermediate, or High Bleeding Risk Procedures (ACC Recommendations)",
            inhibitor: "Direct Thrombin Inhibitor (e.g., Dabigatran)",
            factorXa: "Direct Factor Xa Inhibitor (e.g., Rivaroxaban, Edoxaban, Apixaban)",
            rows: [
                { egfr: "≥ 80 mL/min", thrombin: "≥ 48 h", factorXa: "≥ 48 h" },
                { egfr: "50–79 mL/min", thrombin: "≥ 72 h", factorXa: "≥ 72 h" },
                { egfr: "30–49 mL/min", thrombin: "≥ 96 h", factorXa: "No data" },
                { egfr: "15–29 mL/min", thrombin: "≥ 120 h", factorXa: "No data" },
                { egfr: "< 15 mL/min", thrombin: "No data", factorXa: "No data" },
            ],
        },
        {
            procedureType: "Planned Neuraxial Anesthesia (ASRA Recommendations)",
            inhibitor: "Uniform approach",
            factorXa: "Approach based on eGFR",
            rows: [
                { egfr: "Uniform approach", thrombin: "120 h", factorXa: "72 h" },
                { egfr: "≥ 80 mL/min", thrombin: "≥ 72 h", factorXa: "≥ 72 h" },
                { egfr: "50–79 mL/min", thrombin: "≥ 96 h", factorXa: "≥ 96 h" },
                { egfr: "30–49 mL/min", thrombin: "≥ 120 h", factorXa: "≥ 120 h" },
                { egfr: "< 15 mL/min", thrombin: "Not recommended", factorXa: "Not recommended" },
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
                            <th style={thStyle}>{section.inhibitor}</th>
                            <th style={thStyle}>{section.factorXa}</th>
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

export default DOACConsensus;
