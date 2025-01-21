import React from "react";

function RiskForSGAFailure() {
    const riskFactors = [
        "Male gender",
        "High BMI",
        "Poor dentition",
        "Surgical table rotation",
        "Age > 45 years old",
        "Short thyromental distance",
        "Neck immobility",
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Risk for SGA Failure</h2>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Risk Factors</h3>
                <ul style={listStyle}>
                    {riskFactors.map((factor, index) => (
                        <li key={index} style={listItemStyle}>{factor}</li>
                    ))}
                </ul>
            </section>

            <p style={noteStyle}>
                <strong>References:</strong> Ramachandran SK, Mathis MR, Tremper KK, et al. Predictors and clinical outcomes from failed Laryngeal Mask Airway Unique: a study of 15,795 patients. <em>Anesthesiology.</em> 2012;116:1217–1226, and Saito T, Liu W, Chew STH, et al. Incidence of and risk factors for difficult ventilation via a supraglottic airway device in a population of 14,480 patients from South-East Asia. <em>Anaesthesia.</em> 2015;70:1079–1083.
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

const listStyle = {
    paddingLeft: "20px",
};

const listItemStyle = {
    marginBottom: "5px",
    fontSize: "16px",
    color: "#333",
};

const noteStyle = {
    marginTop: "20px",
    fontSize: "14px",
    color: "#666",
    fontStyle: "italic",
};

export default RiskForSGAFailure;
