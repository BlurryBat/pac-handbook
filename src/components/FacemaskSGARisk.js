import React from "react";

function FacemaskSGARisk() {
    const facemaskRisks = [
        "Age > 56 years",
        "Body mass index > 26",
        "Edentulous",
        "Facial hair",
        "Snoring/obstructive sleep apnea",
        "Mallampati grade 3",
        "Head and neck irradiation",
    ];

    const sgaRisks = [
        "Trismus",
        "Mass lesion",
        "Male gender",
        "Age > 45 years",
        "Short thyromental distance",
        "Reduced cervical range of motion",
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Risk for Facemask and SGA Failure</h2>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Facemask Ventilation Failure Risk Factors</h3>
                <ul style={listStyle}>
                    {facemaskRisks.map((risk, index) => (
                        <li key={index} style={listItemStyle}>{risk}</li>
                    ))}
                </ul>
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>SGA Failure Risk Factors</h3>
                <ul style={listStyle}>
                    {sgaRisks.map((risk, index) => (
                        <li key={index} style={listItemStyle}>{risk}</li>
                    ))}
                </ul>
            </section>

            <p style={noteStyle}>
                <strong>Note:</strong> These factors are associated with increased risk of facemask ventilation or SGA failure. Consider these factors during preoperative assessment.
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

export default FacemaskSGARisk;
