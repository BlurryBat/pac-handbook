import React from "react";

function MaskVentilationRisk() {
    const difficultFactors = [
        "Obesity",
        "Beard",
        "Edentulousness",
        "History of snoring",
        "History of obstructive sleep apnea",
        "Age older than 55 years",
        "Large tongue",
        "Poor translation",
        "Poor atlanto-occipital extension",
        "Pharyngeal pathology",
        "Lingual tonsil hypertrophy",
        "Lingual tonsil abscess",
    ];

    const impossibleFactors = [
        "Neck radiation changes",
        "Beard",
        "Male gender",
        "Sleep apnea",
        "Mallampati class III or IV",
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Risk Factors for Difficult or Impossible Mask Ventilation</h2>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Predictors of Difficult Mask Ventilation</h3>
                <ul style={listStyle}>
                    {difficultFactors.map((factor, index) => (
                        <li key={index} style={listItemStyle}>{factor}</li>
                    ))}
                </ul>
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Predictors of Impossible Mask Ventilation</h3>
                <ul style={listStyle}>
                    {impossibleFactors.map((factor, index) => (
                        <li key={index} style={listItemStyle}>{factor}</li>
                    ))}
                </ul>
            </section>

            <p style={noteStyle}>
                <strong>References:</strong> Kheterpal S, Han R, Tremper KK, et al. Incidence and predictors of difficult and impossible mask ventilation. <em>Anesthesiology.</em> 2006;105:885–891. Langeron O, Masso E, Huraux C, et al. Prediction of difficult mask ventilation. <em>Anesthesiology.</em> 2000;92:1229–1236.
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

export default MaskVentilationRisk;
