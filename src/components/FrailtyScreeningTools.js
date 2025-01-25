import React from "react";

function FrailtyScreeningTools() {
    const frailtyTools = [
        {
            tool: "Frailty Phenotype (Fried)",
            elements: [
                "Shrinking: Unintentional weight loss of ≥10 lb or ≥5% of body weight over past year",
                "Weakness: Grip strength in lowest quintile of age/body mass index matched cohort",
                "Endurance: Self-reported exhaustion",
                "Slowness: 15-min walk in lowest quintile of age/height-matched cohort",
                "Physical activity: Self-reported kilocalories expended in the lowest quintile of gender-matched cohort (Men <383 Kcal/wk, Women <270 Kcal/wk)",
            ],
        },
        {
            tool: "Robinson Criteria",
            elements: [
                "Mini-Cog Test: Clock draw and remembering 3 words",
                "Albumin: <3.4 g/dL within past 3 mo",
                "Hematocrit: <35",
                "Kat Score: Inability to perform ≥1 activity of daily living",
            ],
        },
        {
            tool: "Edmonton Frail Score",
            elements: [
                "Cognition: Clock draw",
                "General health status: Hospital admissions within the past year, subjective description of health",
                "Functional independence: Inability to perform instrumental activities of daily living",
                "Social support: Absence of social supports",
                "Medication use: Use of ≥5 medications, forgetting to take medications",
                "Nutrition: Recent weight loss or loss of flesh/clothing loose",
                "Mood: Feelings of sadness or depression",
                "Continence: Urinary incontinence or frequency",
                "Functional performance: Timed Up & Go ≥20 s",
            ],
        },
        {
            tool: "Modified Frailty Index",
            elements: [
                "Diabetes: History of diabetes (insulin-dependent or non-insulin-dependent)",
                "Congestive heart failure (CHF): History of CHF",
                "Hypertension: Hypertension requiring medications",
                "Previous MI: History of MI within past 6 mo",
                "Cardiac problems: Previous percutaneous coronary intervention, cardiac surgery, or angina within 1 mo or requiring medications",
                "Respiratory problems: Severe chronic obstructive pulmonary disease or other chronic pulmonary disease requiring hospitalization or oxygen therapy",
                "Delirium: History of transient delirium",
                "Problems in everyday activity: Dependence in getting dressed, bathing, grooming, cooking, going out alone",
            ],
        },
    ];

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Elements of Different Frailty Screening Tools</h2>
            {frailtyTools.map((tool, index) => (
                <section key={index} style={sectionStyle}>
                    <h3 style={subHeaderStyle}>{tool.tool}</h3>
                    <ul style={listStyle}>
                        {tool.elements.map((element, idx) => (
                            <li key={idx} style={listItemStyle}>
                                {element}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    );
}

const containerStyle = {
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
    marginBottom: "10px",
    fontSize: "16px",
    color: "#333",
};

export default FrailtyScreeningTools;
