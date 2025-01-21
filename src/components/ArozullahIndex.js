import React from "react";

function ArozullahIndex() {
    const predictors = [
        { predictor: "Abdominal aortic aneurysm", points: 27 },
        { predictor: "Thoracic", points: 21 },
        { predictor: "Neurosurgery, upper abdominal, or peripheral vascular", points: 14 },
        { predictor: "Neck", points: 11 },
        { predictor: "Emergency surgery", points: 11 },
        { predictor: "Albumin (<30 g/L)", points: 9 },
        { predictor: "Blood urea nitrogen (>30 mg/dL)", points: 8 },
        { predictor: "Partially or fully dependent functional status", points: 7 },
        { predictor: "History of chronic obstructive pulmonary disease", points: 6 },
        { predictor: "Age ≥70 years", points: 6 },
        { predictor: "Age 60–69 years", points: 4 },
    ];

    const performance = [
        { class: 1, pointTotal: "<10", incidence: "0.5%" },
        { class: 2, pointTotal: "11–19", incidence: "1.8%" },
        { class: 3, pointTotal: "20–27", incidence: "4.2%" },
        { class: 4, pointTotal: "28–40", incidence: "10.1%" },
        { class: 5, pointTotal: ">40", incidence: "26.6%" },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Arozullah Respiratory Failure Index</h2>
            <p style={descriptionStyle}>
                Respiratory system risk assessment for predicting postoperative respiratory failure.
            </p>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Preoperative Predictors</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Predictor</th>
                        <th style={thStyle}>Point Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    {predictors.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.predictor}</td>
                            <td style={tdStyle}>{item.points}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Performance of the Index</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Class</th>
                        <th style={thStyle}>Point Total</th>
                        <th style={thStyle}>Incidence of Respiratory Failure (%)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {performance.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.class}</td>
                            <td style={tdStyle}>{item.pointTotal}</td>
                            <td style={tdStyle}>{item.incidence}</td>
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

export default ArozullahIndex;
