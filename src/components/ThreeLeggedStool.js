import React from "react";

function ThreeLeggedStool() {
    const sections = [
        {
            title: "Respiratory Mechanics",
            content: [
                "FEV1* (ppo > 40%)",
                "MVV, RV/TLC, FVC",
            ],
        },
        {
            title: "Cardiopulmonary Reserve",
            content: [
                "Vo2max* (> 15 mL/kg/min)",
                "Stair climb > two flights",
                "6 min walk",
                "Exercise SpO2 < 4%",
            ],
        },
        {
            title: "Lung Parenchymal Function",
            content: [
                "DLco* (ppo > 40%)",
                "PaO2 > 60",
                "Paco2 < 45",
            ],
        },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>3-Legged Stool for Pre-Thoracic Surgery Assessment</h2>
            <p style={descriptionStyle}>
                The "three-legged stool" of prethoracotomy respiratory assessment provides a framework for evaluating respiratory mechanics, cardiopulmonary reserve, and lung parenchymal function.
            </p>

            <div style={stoolContainerStyle}>
                {sections.map((section, index) => (
                    <div key={index} style={stoolLegStyle}>
                        <h3 style={subHeaderStyle}>{section.title}</h3>
                        <ul style={listStyle}>
                            {section.content.map((item, idx) => (
                                <li key={idx} style={listItemStyle}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
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
    marginBottom: "30px",
    fontSize: "16px",
    color: "#555",
};

const stoolContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    gap: "20px",
    flexWrap: "wrap",
};

const stoolLegStyle = {
    flex: "1 1 30%",
    backgroundColor: "#eef6fd",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const subHeaderStyle = {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#444",
};

const listStyle = {
    paddingLeft: "20px",
};

const listItemStyle = {
    marginBottom: "5px",
    fontSize: "14px",
    color: "#333",
};

export default ThreeLeggedStool;
