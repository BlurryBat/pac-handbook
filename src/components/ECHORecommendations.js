import React from "react";

function ECHORecommendations() {
    const recommendations = [
        {
            class: "Class IIa Recommendation",
            description: "Reasonable to Perform",
            details: [
                "It is reasonable for patients with dyspnea of unknown origin to undergo preoperative evaluation of LV function.",
                "It is reasonable for patients with heart failure with worsening dyspnea or other change in clinical status to undergo preoperative evaluation of LV function.",
            ],
        },
        {
            class: "Class IIb Recommendation",
            description: "May Be Considered",
            details: [
                "Reassessment of LV function in clinically stable patients with previously documented LV dysfunction may be considered if there has been no assessment within a year.",
            ],
        },
        {
            class: "Class III Recommendation",
            description: "Should Not Be Performed Since It Is Not Helpful",
            details: [
                "Routine preoperative evaluation of LV function is not recommended.",
            ],
        },
    ];

    const notes = [
        "LV: Left ventricle.",
        "From Fleisher LA, Fleischmann KE, Auerbach AD, et al. 2014 ACC/AHA guideline on perioperative cardiovascular evaluation and management of patients undergoing noncardiac surgery.",
        "A report of the American College of Cardiology/American Heart Association Task Force on Practice Guidelines. Circulation. 2014;130:e278–e333.",
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Do I Need to Ask for ECHO?</h2>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Recommendations for Preoperative Noninvasive Evaluation of LV Function</h3>
                {recommendations.map((item, index) => (
                    <div key={index} style={recommendationStyle}>
                        <h4 style={recommendationHeaderStyle}>{item.class}</h4>
                        <p style={recommendationDescriptionStyle}>{item.description}</p>
                        <ul style={listStyle}>
                            {item.details.map((detail, idx) => (
                                <li key={idx} style={listItemStyle}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Notes</h3>
                <ul style={listStyle}>
                    {notes.map((note, index) => (
                        <li key={index} style={listItemStyle}>{note}</li>
                    ))}
                </ul>
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

const subHeaderStyle = {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#555",
};

const sectionStyle = {
    marginBottom: "30px",
};

const recommendationStyle = {
    marginBottom: "20px",
};

const recommendationHeaderStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
};

const recommendationDescriptionStyle = {
    fontSize: "16px",
    marginBottom: "10px",
};

const listStyle = {
    paddingLeft: "20px",
};

const listItemStyle = {
    marginBottom: "5px",
    fontSize: "14px",
    color: "#333",
};

export default ECHORecommendations;
