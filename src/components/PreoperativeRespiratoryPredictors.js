import React from "react";

function PreoperativeRespiratoryPredictors() {
    const predictors = [
        { variable: "Abdominal aortic aneurysm", oddsRatio: "14.3 (12.0-16.9)" },
        { variable: "Thoracic", oddsRatio: "8.14 (7.17-9.25)" },
        { variable: "Neurosurgery, upper abdominal, or peripheral vascular", oddsRatio: "4.21 (3.80-4.67)" },
        { variable: "Neck", oddsRatio: "3.10 (2.40-4.01)" },
        { variable: "Other surgery", oddsRatio: "1.00 (reference)" },
        { variable: "Emergency surgery", oddsRatio: "3.12 (2.83-3.43)" },
        { variable: "Albumin < 30 g/L", oddsRatio: "2.53 (2.28-2.80)" },
        { variable: "Blood urea nitrogen > 30 mg/dL", oddsRatio: "2.29 (2.04-2.56)" },
        { variable: "Partially or fully dependent status", oddsRatio: "1.92 (1.74-2.11)" },
        { variable: "History of COPD", oddsRatio: "1.81 (1.66-1.98)" },
        { variable: "AGE ≥70", oddsRatio: "1.91 (1.71-2.13)" },
        { variable: "AGE 0-69", oddsRatio: "1.51 (1.36-1.69)" },
        { variable: "AGE <60", oddsRatio: "1.00 (reference)" },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Preoperative Predictors of Respiratory Failures</h2>
            <p style={descriptionStyle}>
                This table outlines the preoperative predictors and their corresponding odds ratios for respiratory failure.
            </p>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Variable</th>
                    <th style={thStyle}>Odds Ratio (95% Confidence Interval)</th>
                </tr>
                </thead>
                <tbody>
                {predictors.map((item, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>{item.variable}</td>
                        <td style={tdStyle}>{item.oddsRatio}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <p style={referenceStyle}>
                <strong>Reference:</strong> Adapted from the data provided in the source table.
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

const descriptionStyle = {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "16px",
    color: "#555",
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
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

const referenceStyle = {
    textAlign: "center",
    fontSize: "14px",
    color: "#777",
};

export default PreoperativeRespiratoryPredictors;
