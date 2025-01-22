import React from "react";

function PreoperativeRespiratoryFailureRisk2007() {
    const data = [
        { parameter: "Totally dependent functional status", adjustedOR: 4.07, confidenceInterval: "3.68-4.51" },
        { parameter: "Partially dependent functional status", adjustedOR: 2.16, confidenceInterval: "1.98-2.34" },
        { parameter: "ASA class I", adjustedOR: 0.03, confidenceInterval: "0.02-0.05" },
        { parameter: "ASA class II", adjustedOR: 0.14, confidenceInterval: "0.11-0.17" },
        { parameter: "ASA class III", adjustedOR: 0.51, confidenceInterval: "0.44-0.57" },
        { parameter: "ASA class IV", adjustedOR: 1.28, confidenceInterval: "1.04-1.57" },
        { parameter: "Preoperative sepsis (none)", adjustedOR: 0.46, confidenceInterval: "0.42-0.50" },
        { parameter: "Preoperative sepsis", adjustedOR: 1.32, confidenceInterval: "1.16-1.49" },
        { parameter: "Preoperative septic shock", adjustedOR: 2.47, confidenceInterval: "2.16-2.82" },
        { parameter: "Emergency case (absence vs presence)", adjustedOR: 0.56, confidenceInterval: "0.52-0.61" },
        { parameter: "Anorectal", adjustedOR: 0.26, confidenceInterval: "0.15-0.44" },
        { parameter: "Aortic", adjustedOR: 2.94, confidenceInterval: "2.35-3.68" },
        { parameter: "Bariatric", adjustedOR: 0.36, confidenceInterval: "0.27-0.49" },
        { parameter: "Brain", adjustedOR: 2.08, confidenceInterval: "1.15-3.78" },
        { parameter: "Breast", adjustedOR: 0.07, confidenceInterval: "0.04-0.12" },
        { parameter: "Cardiac", adjustedOR: 1.32, confidenceInterval: "0.92-1.88" },
        { parameter: "Ear, nose, and throat", adjustedOR: 1.11, confidenceInterval: "0.26-4.71" },
        { parameter: "Foregut/hepatopancreatobiliary", adjustedOR: 2.64, confidenceInterval: "2.13-3.27" },
        { parameter: "Gallbladder, appendix, adrenals, and spleen", adjustedOR: 0.57, confidenceInterval: "0.45-0.71" },
        { parameter: "Intestinal", adjustedOR: 1.78, confidenceInterval: "1.44-2.18" },
        { parameter: "Neck", adjustedOR: 0.59, confidenceInterval: "0.33-1.07" },
        { parameter: "Obstetrics and gynecology", adjustedOR: 0.29, confidenceInterval: "0.09-0.94" },
        { parameter: "Orthopedic", adjustedOR: 0.42, confidenceInterval: "0.33-0.55" },
        { parameter: "Other abdominal", adjustedOR: 1.27, confidenceInterval: "1.00-1.62" },
        { parameter: "Peripheral vascular", adjustedOR: 0.79, confidenceInterval: "0.63-0.98" },
        { parameter: "Skin", adjustedOR: 0.73, confidenceInterval: "0.55-0.95" },
        { parameter: "Spine", adjustedOR: 0.593, confidenceInterval: "0.25-1.39" },
        { parameter: "Thoracic", adjustedOR: 1.96, confidenceInterval: "1.43-2.68" },
        { parameter: "Venous", adjustedOR: 0.134, confidenceInterval: "0.05-0.37" },
        { parameter: "Urologic", adjustedOR: 1.36, confidenceInterval: "0.82-2.28" },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Preoperative Variables with Increased Risk of Postoperative Respiratory Failure [2007]</h2>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Parameter</th>
                    <th style={thStyle}>Adjusted OR</th>
                    <th style={thStyle}>95% Wald CI</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>{item.parameter}</td>
                        <td style={tdStyle}>{item.adjustedOR}</td>
                        <td style={tdStyle}>{item.confidenceInterval}</td>
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
    marginBottom: "10px",
};

const thStyle = {
    padding: "10px",
    textAlign: "left",
    borderBottom: "2px solid #ddd",
    backgroundColor: "#f0f0f0",
};

const tdStyle = {
    padding: "10px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
};

export default PreoperativeRespiratoryFailureRisk2007;
