import React from "react";

function OrthopedicsRiskAssessment() {
    const criteria = [
        {
            type: "Major Criteria",
            items: [
                "Axillary or subconjunctival petechiae",
                "Hypoxaemia with bilateral radiographic changes",
                "Cerebral signs unrelated to head injury or any other condition",
            ],
        },
        {
            type: "Minor Criteria",
            items: [
                "Tachycardia",
                "Pyrexia",
                "Emboli present in the retina on fundoscopy",
                "Fat present in urine",
                "A sudden decrease in haematocrit or platelet concentrations",
                "Increasing erythrocyte sedimentation rate",
                "Fat globules present in the sputum",
            ],
        },
    ];

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Orthopedics Risk Assessment</h2>
            <h3 style={subHeaderStyle}>Gurd's Diagnostic Criteria</h3>
            <p style={descriptionStyle}>
                The presence of one major and four minor criteria were proposed as sufficient for a diagnosis of fat embolism syndrome.
            </p>
            {criteria.map((group, index) => (
                <div key={index} style={criteriaGroupStyle}>
                    <h4 style={groupHeaderStyle}>{group.type}</h4>
                    <ul style={listStyle}>
                        {group.items.map((item, itemIndex) => (
                            <li key={itemIndex} style={listItemStyle}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

const containerStyle = {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
};

const headerStyle = {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
};

const subHeaderStyle = {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#555",
    textAlign: "center",
};

const descriptionStyle = {
    fontSize: "16px",
    marginBottom: "20px",
    color: "#666",
    textAlign: "center",
};

const criteriaGroupStyle = {
    marginBottom: "20px",
};

const groupHeaderStyle = {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#444",
};

const listStyle = {
    paddingLeft: "20px",
};

const listItemStyle = {
    fontSize: "16px",
    marginBottom: "5px",
    color: "#333",
};

export default OrthopedicsRiskAssessment;
