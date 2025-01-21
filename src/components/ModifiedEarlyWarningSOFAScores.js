import React from "react";

function ModifiedEarlyWarningSOFAScores() {
    const mewsData = [
        { parameter: "Respiratory rate", scores: ["<9", "9–14", "15–20", "21–29", ">29"] },
        { parameter: "Heart rate", scores: ["<40", "41–50", "51–100", "101–110", ">110"] },
        { parameter: "Systolic blood pressure (mm Hg)", scores: ["<70", "71–80", "81–100", "101–199", ">200"] },
        { parameter: "Urine output (mL/kg/h)", scores: ["Nil", "<0.5"] },
        { parameter: "Temperature (°C)", scores: ["<35", "35–38.5", ">38.5"] },
        { parameter: "Neurologic", scores: ["Alert", "Reacting to voice", "Reacting to pain", "Unresponsive"] },
    ];

    const sofaData = [
        { parameter: "Respiration (PaO₂/FiO₂)", scores: [">400", "≤400", "≤300", "≤200 with respiratory support", "≤100 with respiratory support"] },
        { parameter: "Coagulation (platelets G/L)", scores: [">150", "≤150", "≤100", "≤50", "≤20"] },
        { parameter: "Liver (bilirubin umol/L)", scores: ["<20", "20–32", "33–101", "102–204", ">204"] },
        { parameter: "Cardiovascular (MAP or vasoactive agent)", scores: ["MAP≥70", "MAP<70", "Dopamine ≤5", "Dopamine >5 or epinephrine ≤0.1", "Epinephrine >0.1"] },
        { parameter: "CNS (GCS)", scores: ["15", "13–14", "12–9", "6–9", "<6"] },
        { parameter: "Renal (creatinine or urine output)", scores: ["<110", "110–170", "171–299", "300–440 or <500mL/day", ">440 or <200mL/day"] },
    ];

    const mortalityRisk = [
        { scoreRange: "0 to 6", risk: "<2%" },
        { scoreRange: "7 to 9", risk: "0–10%" },
        { scoreRange: "10 to 12", risk: "10–30%" },
        { scoreRange: "13 to 14", risk: "40–60%" },
        { scoreRange: "15", risk: "75–90%" },
        { scoreRange: "16 to 24", risk: ">90%" },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Unstable Vitals: Modified Early Warning Scores (MEWS) and SOFA Scores</h2>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Modified Early Warning Scores (MEWS)</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Parameter</th>
                        <th style={thStyle}>3</th>
                        <th style={thStyle}>2</th>
                        <th style={thStyle}>1</th>
                        <th style={thStyle}>0</th>
                    </tr>
                    </thead>
                    <tbody>
                    {mewsData.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.parameter}</td>
                            {item.scores.map((score, i) => (
                                <td key={i} style={tdStyle}>{score}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>SOFA Score and Mortality Risk</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Parameter</th>
                        <th style={thStyle}>0</th>
                        <th style={thStyle}>1</th>
                        <th style={thStyle}>2</th>
                        <th style={thStyle}>3</th>
                        <th style={thStyle}>4</th>
                    </tr>
                    </thead>
                    <tbody>
                    {sofaData.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.parameter}</td>
                            {item.scores.map((score, i) => (
                                <td key={i} style={tdStyle}>{score}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>SOFA Mortality Risk</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>SOFA Score</th>
                        <th style={thStyle}>Mortality Risk</th>
                    </tr>
                    </thead>
                    <tbody>
                    {mortalityRisk.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.scoreRange}</td>
                            <td style={tdStyle}>{item.risk}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
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

export default ModifiedEarlyWarningSOFAScores;
