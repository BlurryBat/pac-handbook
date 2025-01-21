import React from "react";

function ECGRecommendations() {
    const recommendations = [
        {
            class: "Class IIa Recommendation",
            description: "It is Reasonable to Perform",
            details: "Preoperative resting 12-lead ECG is reasonable for patients with known IHD, significant arrhythmia, PAD, CVD, or other significant structural heart disease (except if undergoing low-risk surgical procedures).",
        },
        {
            class: "Class IIb Recommendation",
            description: "The Procedure May Be Considered",
            details: "Preoperative resting 12-lead ECG may be considered for asymptomatic patients without known coronary heart disease, except for those undergoing low-risk surgical procedures.",
        },
        {
            class: "Class III Recommendation",
            description: "The Procedure Should Not Be Performed Because It Is Not Helpful",
            details: "Routine preoperative resting 12-lead ECG is not useful for asymptomatic patients undergoing low-risk surgical procedures.",
        },
    ];

    const notes = [
        "CVD: Cerebrovascular disease.",
        "ECG: Electrocardiogram.",
        "IHD: Ischemic heart disease.",
        "PAD: Peripheral artery disease.",
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Do I Need to Ask for ECG?</h2>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Recommendations for Preoperative Resting 12-Lead ECG</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Class</th>
                        <th style={thStyle}>Description</th>
                        <th style={thStyle}>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    {recommendations.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.class}</td>
                            <td style={tdStyle}>{item.description}</td>
                            <td style={tdStyle}>{item.details}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Notes</h3>
                <ul style={listStyle}>
                    {notes.map((note, index) => (
                        <li key={index} style={listItemStyle}>
                            {note}
                        </li>
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

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
};

const thStyle = {
    padding: "10px",
    textAlign: "left",
    border: "1px solid #ddd",
    backgroundColor: "#f0f0f0",
};

const tdStyle = {
    padding: "10px",
    textAlign: "left",
    border: "1px solid #ddd",
};

const listStyle = {
    paddingLeft: "20px",
};

const listItemStyle = {
    marginBottom: "5px",
    fontSize: "14px",
    color: "#333",
};

export default ECGRecommendations;
