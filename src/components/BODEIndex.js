import React from "react";

function BODEIndex() {
    const data = [
        {
            variable: "FEV₁ (% of predicted)",
            points: [
                { range: "≥65", score: 0 },
                { range: "50–64", score: 1 },
                { range: "36–49", score: 2 },
                { range: "≤35", score: 3 },
            ],
        },
        {
            variable: "Distance walked in 6 min (m)",
            points: [
                { range: "≥350", score: 0 },
                { range: "250–349", score: 1 },
                { range: "150–249", score: 2 },
                { range: "≤149", score: 3 },
            ],
        },
        {
            variable: "MMRC dyspnea scale",
            points: [
                { range: "0–1", score: 0 },
                { range: "2", score: 1 },
                { range: "3", score: 2 },
                { range: "4", score: 3 },
            ],
        },
        {
            variable: "Body-mass index",
            points: [
                { range: "≤21", score: 0 },
                { range: ">21", score: 1 },
            ],
        },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>The BODE Index (Risk predictor of Mortality)</h2>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Variable</th>
                    <th style={thStyle}>Range</th>
                    <th style={thStyle}>Points</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) =>
                    item.points.map((point, subIndex) => (
                        <tr key={`${index}-${subIndex}`}>
                            <td style={tdStyle}>
                                {subIndex === 0 ? item.variable : ""}
                            </td>
                            <td style={tdStyle}>{point.range}</td>
                            <td style={tdStyle}>{point.score}</td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
            <div style={footerNoteStyle}>
                <p>
                    The cutoff values for the assignment of points are shown for each
                    variable. The total possible values range from 0 to 10. FEV₁ denotes
                    forced expiratory volume in one second.
                </p>
                <p>
                    Scores on the modified Medical Research Council (MMRC) dyspnea scale
                    can range from 0 to 4, with a score of 4 indicating that the patient
                    is too breathless to leave the house or becomes breathless when
                    dressing or undressing.
                </p>
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

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
};

const thStyle = {
    padding: "10px",
    textAlign: "left",
    borderBottom: "2px solid #ddd",
    backgroundColor: "#f0f0f0",
};

const tdStyle = {
    padding: "10px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
};

const footerNoteStyle = {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#555",
};

export default BODEIndex;
