import React from "react";

function FrailtyScale() {
    const frailtyLevels = [
        { level: "1", description: "Very Fit - People who are robust, active, energetic, and motivated. They tend to exercise regularly and are among the fittest for their age." },
        { level: "2", description: "Fit - People who have no active disease symptoms but are less fit than category 1. Often, they exercise or are very active occasionally, e.g., seasonally." },
        { level: "3", description: "Managing Well - People whose medical problems are well controlled, even if occasionally symptomatic, but often are not regularly active beyond routine walking." },
        { level: "4", description: "Living with Mild Frailty - This category marks early transition from complete independence. Symptoms often impair activities for daily life, and these individuals may need help with high-demand tasks like housework or managing medications." },
        { level: "5", description: "Living with Moderate Frailty - People who often have more evident slowing and need help with all outside activities and often need minimal assistance with dressing." },
        { level: "6", description: "Living with Severe Frailty - Completely dependent for personal care, from whatever cause (physical or cognitive). Even so, they seem stable and not at high risk of dying within 6 months." },
        { level: "7", description: "Living with Very Severe Frailty - Completely dependent for personal care and approaching the end of life. Typically, they could not recover even from a minor illness." },
        { level: "8", description: "Terminally Ill - Approaching the end of life. This category applies to people with a life expectancy of 6 months or less, who are not otherwise evidently frail." },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Frailty Scale and Scoring Frailty in Dementia</h2>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Clinical Frailty Scale</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Frailty Level</th>
                        <th style={thStyle}>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {frailtyLevels.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.level}</td>
                            <td style={tdStyle}>{item.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Scoring Frailty in People with Dementia</h3>
                <p style={infoTextStyle}>
                    The degree of frailty generally corresponds to the degree of dementia.
                    Common symptoms include difficulty remembering the event, the need to ask the same question repeatedly, and social withdrawal.
                </p>
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

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
};

const thStyle = {
    padding: "10px",
    textAlign: "center",
    border: "1px solid #ddd",
    backgroundColor: "#f0f0f0",
};

const tdStyle = {
    padding: "10px",
    textAlign: "center",
    border: "1px solid #ddd",
};

const infoTextStyle = {
    fontSize: "16px",
    color: "#666",
    textAlign: "justify",
};

export default FrailtyScale;
