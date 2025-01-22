import React from "react";

function PulmonaryComplicationsClassification() {
    const categories = [
        {
            title: "I. Expiratory Spirogram",
            items: [
                { condition: "Normal (% FVC + [% FEV1/FVC] > 150)", points: 0 },
                { condition: "% FVC + (% FEV1/FVC) = 100–150", points: 1 },
                { condition: "% FVC + (% FEV1/FVC) < 100", points: 2 },
                { condition: "Preoperative FVC < 20 mL/kg", points: 3 },
                { condition: "Post bronchodilator FEV1/FVC <50%", points: 3 },
            ],
        },
        {
            title: "II. Cardiovascular System",
            items: [
                { condition: "Normal", points: 0 },
                { condition: "Controlled hypertension, myocardial infarction without sequelae for >2 years", points: 0 },
                { condition: "Dyspnea on exertion, orthopnea, paroxysmal nocturnal dyspnea, dependent edema, congestive heart failure, angina", points: 1 },
            ],
        },
        {
            title: "III. Nervous System",
            items: [
                { condition: "Normal", points: 0 },
                { condition: "Confusion, obtundation, agitation, spasticity, discoordination, bulbar malfunction", points: 1 },
                { condition: "Significant muscular weakness", points: 1 },
            ],
        },
        {
            title: "IV. Arterial Blood Gases",
            items: [
                { condition: "Acceptable", points: 0 },
                { condition: "PaCO2 >50 mm Hg or PaO2 <60 mm Hg on room air", points: 1 },
                { condition: "Metabolic pH abnormality >7.50 or <7.30", points: 1 },
            ],
        },
        {
            title: "V. Postoperative Ambulation",
            items: [
                { condition: "Expected ambulation (minimum, sitting at bedside) within 36 h", points: 0 },
                { condition: "Expected complete bed confinement for ≥36 h", points: 1 },
            ],
        },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Classification of Risk of Pulmonary Complications</h2>
            <p style={descriptionStyle}>
                This table outlines the risk factors and corresponding point values for pulmonary complications in thoracic and abdominal procedures.
            </p>
            {categories.map((category, index) => (
                <div key={index} style={categoryContainerStyle}>
                    <h3 style={categoryTitleStyle}>{category.title}</h3>
                    <table style={tableStyle}>
                        <thead>
                        <tr>
                            <th style={thStyle}>Condition</th>
                            <th style={thStyle}>Points</th>
                        </tr>
                        </thead>
                        <tbody>
                        {category.items.map((item, idx) => (
                            <tr key={idx}>
                                <td style={tdStyle}>{item.condition}</td>
                                <td style={tdStyle}>{item.points}</td>
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

const descriptionStyle = {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "16px",
    color: "#555",
};

const categoryContainerStyle = {
    marginBottom: "20px",
};

const categoryTitleStyle = {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#444",
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

export default PulmonaryComplicationsClassification;
