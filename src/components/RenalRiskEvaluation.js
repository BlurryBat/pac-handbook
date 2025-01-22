import React from "react";

function RenalRiskEvaluation() {
    const rifleCriteria = [
        { stage: "Risk", sCr: "↑ 1.5x", gfr: "↓ >25%", uo: "U.O. <0.5 ml/kg/hr x 6h" },
        { stage: "Injury", sCr: "↑ 2x", gfr: "↓ >50%", uo: "U.O. <0.5 ml/kg/hr x 12h" },
        { stage: "Failure", sCr: "↑ 3x OR complete loss of function (RRT) >4w", gfr: "↓ >75%", uo: "U.O. <0.3 ml/kg/hr x 24h OR anuria >12h" },
        { stage: "Loss", sCr: "Complete loss of function (RRT) >4w", gfr: "-", uo: "-" },
        { stage: "ESRD", sCr: "-", gfr: "-", uo: "RRT >3mo" },
    ];

    const akinCriteria = [
        { stage: "Stage 1", sCr: "↑ >0.3 mg/dl or 1.5–2x", uo: "U.O. <0.5 ml/kg/hr x >6h" },
        { stage: "Stage 2", sCr: "↑ 2–3x", uo: "U.O. <0.5 ml/kg/hr x >12h" },
        { stage: "Stage 3", sCr: "↑ >3x OR S. Cr. ≥4 mg/dl OR at least 0.5 mg/dl", uo: "U.O. <0.3 ml/kg/hr x >24h OR anuria >12h" },
    ];

    const kdigoCriteria = [
        { stage: "Stage 1", sCr: "↑ >0.3 mg/dl or 1.5–1.9x", uo: "U.O. <0.5 ml/kg/hr x >6h" },
        { stage: "Stage 2", sCr: "↑ 2–2.9x", uo: "U.O. <0.5 ml/kg/hr x >12h" },
        { stage: "Stage 3", sCr: "↑ 3x OR S. Cr. ≥4 mg/dl OR at least 0.5 mg/dl", uo: "U.O. <0.3 ml/kg/hr x >24h OR anuria >12h" },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Renal Risk Evaluation</h2>
            <h3 style={subHeaderStyle}>RIFLE Criteria</h3>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Stage</th>
                    <th style={thStyle}>S. Cr.</th>
                    <th style={thStyle}>GFR</th>
                    <th style={thStyle}>U.O.</th>
                </tr>
                </thead>
                <tbody>
                {rifleCriteria.map((item, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>{item.stage}</td>
                        <td style={tdStyle}>{item.sCr}</td>
                        <td style={tdStyle}>{item.gfr}</td>
                        <td style={tdStyle}>{item.uo}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h3 style={subHeaderStyle}>AKIN Criteria</h3>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Stage</th>
                    <th style={thStyle}>S. Cr.</th>
                    <th style={thStyle}>U.O.</th>
                </tr>
                </thead>
                <tbody>
                {akinCriteria.map((item, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>{item.stage}</td>
                        <td style={tdStyle}>{item.sCr}</td>
                        <td style={tdStyle}>{item.uo}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h3 style={subHeaderStyle}>KDIGO Criteria</h3>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Stage</th>
                    <th style={thStyle}>S. Cr.</th>
                    <th style={thStyle}>U.O.</th>
                </tr>
                </thead>
                <tbody>
                {kdigoCriteria.map((item, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>{item.stage}</td>
                        <td style={tdStyle}>{item.sCr}</td>
                        <td style={tdStyle}>{item.uo}</td>
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
};

const tdStyle = {
    padding: "10px",
    textAlign: "center",
    border: "1px solid #ddd",
};

export default RenalRiskEvaluation;
