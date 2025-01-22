import React from "react";

function PostoperativePneumoniaRisk() {
    const riskFactors = [
        { category: "TYPE OF SURGERY", factors: [
                { name: "Abdominal aortic aneurysm repair", points: 15 },
                { name: "Thoracic", points: 14 },
                { name: "Upper abdominal", points: 10 },
                { name: "Neck", points: 8 },
                { name: "Neurosurgery", points: 8 },
                { name: "Vascular", points: 3 },
            ]},
        { category: "AGE", factors: [
                { name: "80 years", points: 17 },
                { name: "70-79 years", points: 13 },
                { name: "60-69 years", points: 9 },
                { name: "50-59 years", points: 4 },
            ]},
        { category: "FUNCTIONAL STATUS", factors: [
                { name: "Totally dependent", points: 10 },
                { name: "Partially dependent", points: 6 },
                { name: "Weight loss >10% in past 6 months", points: 7 },
                { name: "History of COPD", points: 5 },
                { name: "General anesthesia", points: 4 },
                { name: "Impaired sensorium", points: 4 },
                { name: "History of cerebrovascular accident", points: 4 },
            ]},
        { category: "BLOOD UREA NITROGEN LEVEL", factors: [
                { name: "<2.86 mmol/L (0.8 mg/dL)", points: 4 },
                { name: "7.85-10.7 mmol/L (22-30 mg/dL)", points: 2 },
                { name: "≥10.7 mmol/L (≥30 mg/dL)", points: 3 },
            ]},
        { category: "OTHER", factors: [
                { name: "Transfusion >4 units", points: 3 },
                { name: "Emergency surgery", points: 3 },
                { name: "Steroid use for chronic condition", points: 3 },
                { name: "Current smoker within 1 year", points: 3 },
                { name: "Alcohol intake >2 drinks/day in past 2 weeks", points: 2 },
            ]},
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Postoperative Pneumonia Risk Index</h2>
            {riskFactors.map((category, index) => (
                <div key={index} style={sectionStyle}>
                    <h3 style={subHeaderStyle}>{category.category}</h3>
                    <table style={tableStyle}>
                        <thead>
                        <tr>
                            <th style={thStyle}>Preoperative Risk Factor</th>
                            <th style={thStyle}>Point Value</th>
                        </tr>
                        </thead>
                        <tbody>
                        {category.factors.map((factor, idx) => (
                            <tr key={idx}>
                                <td style={tdStyle}>{factor.name}</td>
                                <td style={tdStyle}>{factor.points}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ))}
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
    marginBottom: "20px",
};

const subHeaderStyle = {
    marginBottom: "10px",
    fontSize: "20px",
    color: "#444",
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

export default PostoperativePneumoniaRisk;
