import React, { useState } from "react";

function OncosurgicalRiskAssessment() {
    const checklistItems = [
        "Cognitive impairment and dementia",
        "Decision making capacity",
        "Depression",
        "Postoperative delirium",
        "Alcohol and substance abuse",
        "Cardiac evaluation",
        "Pulmonary evaluation",
        "Functional status, mobility, and fall risk",
        "Frailty",
        "Nutritional status",
        "Medication management",
        "Patient counseling",
        "Preoperative testing",
    ];

    const [checkedItems, setCheckedItems] = useState(
        new Array(checklistItems.length).fill(false)
    );

    const handleCheckboxChange = (index) => {
        const updatedCheckedItems = [...checkedItems];
        updatedCheckedItems[index] = !updatedCheckedItems[index];
        setCheckedItems(updatedCheckedItems);
    };

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>
                Oncosurgical Risk Assessment Checklist
            </h2>
            <p style={subHeaderStyle}>
                The ACS NSQIP and AGS: Preoperative 13-item checklist for
                oncology patients.
            </p>
            <ul style={listStyle}>
                {checklistItems.map((item, index) => (
                    <li key={index} style={listItemStyle}>
                        <input
                            type="checkbox"
                            checked={checkedItems[index]}
                            onChange={() => handleCheckboxChange(index)}
                            style={checkboxStyle}
                        />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

const containerStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const headerStyle = {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
};

const subHeaderStyle = {
    textAlign: "center",
    fontSize: "16px",
    marginBottom: "20px",
    color: "#666",
};

const listStyle = {
    listStyleType: "none",
    padding: 0,
};

const listItemStyle = {
    marginBottom: "10px",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
};

const checkboxStyle = {
    marginRight: "10px",
};

export default OncosurgicalRiskAssessment;
