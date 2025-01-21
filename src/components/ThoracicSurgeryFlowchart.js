import React from "react";

function ThoracicSurgeryFlowchart() {
    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Flowchart for Thoracic Surgery Assessment</h2>
            <p style={descriptionStyle}>
                This flowchart outlines the decision-making process for preoperative respiratory assessment in thoracic surgery. It includes evaluation of functional capacity, spirometry, and cardiopulmonary exercise testing.
            </p>
            <div style={imageContainerStyle}>
                <img
                    src="/path-to-your-image/thoracic-surgery-flowchart.png"
                    alt="Flowchart for Thoracic Surgery Assessment"
                    style={imageStyle}
                />
            </div>
            <p style={referenceStyle}>
                <strong>Reference:</strong> Adapted from Diapari et al. 2014. Preoperative evaluation of lung cancer patients.
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

const imageContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
};

const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const referenceStyle = {
    textAlign: "center",
    fontSize: "14px",
    color: "#777",
};

export default ThoracicSurgeryFlowchart;
