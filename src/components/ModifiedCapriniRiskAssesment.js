import React from "react";

function ModifiedCapriniRiskAssessment() {
    const riskFactors = [
        {
            points: "1 Point Each",
            items: [
                "Age 41–60 years",
                "Minor surgery",
                "BMI > 25 kg/m²",
                "Swollen legs",
                "Varicose veins",
                "Pregnancy or postpartum",
                "History of unexplained or recurrent spontaneous abortion",
                "Oral contraceptives or hormone replacement",
                "Sepsis (<1 month)",
                "Serious lung disease, including pneumonia (<1 month)",
                "Abnormal pulmonary function",
                "Acute myocardial infarction",
                "Heart failure (<1 month)",
                "History of inflammatory bowel disease",
                "Medical patient at bed rest",
            ],
        },
        {
            points: "2 Points Each",
            items: [
                "Age 61–74 years",
                "Arthroscopic surgery",
                "Major open surgery (>45 min)",
                "Laparoscopic surgery (>45 min)",
                "Malignancy",
                "Confined to bed (>72 h)",
                "Immobilizing plaster cast",
                "Central venous access",
            ],
        },
        {
            points: "3 Points Each",
            items: [
                "Age ≥ 75 years",
                "History of VTE",
                "Family history of VTE",
                "Factor V Leiden mutation",
                "Prothrombin 20210 mutation",
                "Lupus anticoagulant",
                "Anticardiolipin antibodies",
                "Elevated serum homocysteine",
                "Heparin-induced thrombocytopenia",
                "Other congenital or acquired thrombophilia",
            ],
        },
        {
            points: "5 Points Each",
            items: [
                "Stroke (<1 month)",
                "Elective arthroplasty",
                "Hip, pelvis, or leg fracture",
                "Acute spinal cord injury (<1 month)",
            ],
        },
    ];

    const recommendations = [
        {
            risk: "Very low risk",
            score: "Caprini score of 0 (incidence of VTE 0.5%)",
            details: "Recommendations for prophylaxis include early ambulation (no chemical/mechanical prophylaxis).",
        },
        {
            risk: "Low risk",
            score: "Caprini score of 1 to 2 (incidence of VTE approximately 1.5%)",
            details: "Mechanical prophylaxis recommended (preferably IPCs).",
        },
        {
            risk: "Moderate risk",
            score: "Caprini score of 3 to 4 (incidence of VTE approximately 3%)",
            details: "LMWH/low-dose unfractionated heparin recommended (or IPCs in patients at high risk of bleeding).",
        },
        {
            risk: "High risk",
            score: "Caprini score of 5 or greater (incidence of VTE approximately 6%)",
            details: "LMWH/low-dose unfractionated heparin recommended, with addition of graduated compression stockings or IPCs. If LMWH or low-dose unfractionated heparin is contraindicated, then fondaparinux or aspirin can be used.",
        },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>DVT Risk Assessment - Modified CAPRINI Risk Assessment Model for VTE</h2>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Risk Factors</h3>
                {riskFactors.map((group, index) => (
                    <div key={index} style={riskGroupStyle}>
                        <h4 style={groupHeaderStyle}>{group.points}</h4>
                        <ul style={listStyle}>
                            {group.items.map((item, i) => (
                                <li key={i} style={listItemStyle}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Recommendations for VTE Prophylaxis</h3>
                {recommendations.map((rec, index) => (
                    <div key={index} style={recommendationStyle}>
                        <h4 style={recHeaderStyle}>{rec.risk}</h4>
                        <p style={recDetailsStyle}>
                            <strong>{rec.score}</strong>: {rec.details}
                        </p>
                    </div>
                ))}
            </section>
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

const riskGroupStyle = {
    marginBottom: "20px",
};

const groupHeaderStyle = {
    fontSize: "18px",
    marginBottom: "5px",
    color: "#666",
};

const listStyle = {
    paddingLeft: "20px",
};

const listItemStyle = {
    marginBottom: "5px",
    fontSize: "14px",
    color: "#333",
};

const recommendationStyle = {
    marginBottom: "15px",
};

const recHeaderStyle = {
    fontSize: "18px",
    color: "#666",
    marginBottom: "5px",
};

const recDetailsStyle = {
    fontSize: "14px",
    color: "#333",
};

export default ModifiedCapriniRiskAssessment;
