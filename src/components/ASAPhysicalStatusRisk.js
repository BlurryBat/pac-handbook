import React from "react";

function ASAPhysicalStatusRisk() {
    const classificationData = [
        { category: "ASA-PS 1", definition: "A normal, healthy patient" },
        { category: "ASA-PS 2", definition: "A patient with mild systemic disease" },
        { category: "ASA-PS 3", definition: "A patient with severe systemic disease" },
        { category: "ASA-PS 4", definition: "A patient with severe systemic disease that is a constant threat to life" },
        { category: "ASA-PS 5", definition: "A moribund patient who is not expected to survive without the operation" },
        { category: "ASA-PS 6", definition: "A declared brain-dead patient whose organs are being removed for donor purposes" },
    ];

    const oddsRatioData = [
        { class: "1", definition: "A normally healthy patient", oddsRatio: "Referent" },
        { class: "2", definition: "A patient with mild systemic disease", oddsRatio: "1.4 (0.9–2.1)" },
        { class: "3", definition: "A patient with systemic disease that is not incapacitating", oddsRatio: "3.3 (2.2–4.9)" },
        { class: "4", definition: "A patient with an incapacitating systemic disease that is a constant threat to life", oddsRatio: "6.6 (4.3–10.0)" },
        { class: "5", definition: "A moribund patient who is not expected to survive for 24 h with or without an operation", oddsRatio: "NA" },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>ASA Physical Status Risk</h2>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Physical Status Classification</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr style={tableHeaderStyle}>
                        <th style={thStyle}>Category</th>
                        <th style={thStyle}>Definition</th>
                    </tr>
                    </thead>
                    <tbody>
                    {classificationData.map((item, index) => (
                        <tr key={index} style={tableRowStyle}>
                            <td style={tdStyle}>{item.category}</td>
                            <td style={tdStyle}>{item.definition}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>ASA Physical Status Classification with Odds Ratios</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr style={tableHeaderStyle}>
                        <th style={thStyle}>ASA Class</th>
                        <th style={thStyle}>Class Definition</th>
                        <th style={thStyle}>PPCs Adjusted Odds Ratio (95% CI)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {oddsRatioData.map((item, index) => (
                        <tr key={index} style={tableRowStyle}>
                            <td style={tdStyle}>{item.class}</td>
                            <td style={tdStyle}>{item.definition}</td>
                            <td style={tdStyle}>{item.oddsRatio}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <p style={noteStyle}>
                <strong>Note:</strong> The addition of "E" to the classification category indicates emergency surgery.
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
    backgroundColor: "#fff",
    marginBottom: "20px",
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

const noteStyle = {
    fontSize: "14px",
    color: "#666",
    fontStyle: "italic",
};

export default ASAPhysicalStatusRisk;
