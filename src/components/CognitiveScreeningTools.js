import React from "react";

function CognitiveScreeningTools() {
    const tools = [
        {
            tool: "Minicog",
            advantage: "Brief, minimal language, education, race bias",
            disadvantage: "Use of different word lists may affect scoring",
            sensitivity: "76-100 (54-100)",
            specificity: "54-85 (43-88.4)",
            time: "<2 min",
        },
        {
            tool: "Montreal Cognitive Assessment (MoCA)",
            advantage: "Can identify mild cognitive impairment, available in multiple languages",
            disadvantage: "Education bias, limited published data",
            sensitivity: "n/a",
            specificity: "n/a",
            time: "10-15 min",
        },
        {
            tool: "Mini-Mental State Examination (MMSE)",
            advantage: "Widely used and studied",
            disadvantage: "Subject to age and cultural bias, ceiling effects",
            sensitivity: "88.3 (81.3-92.9)",
            specificity: "86.2 (81.8-89.7)",
            time: ">7-10 min",
        },
        {
            tool: "Clock-drawing Test",
            advantage: "Very brief",
            disadvantage: "No standards for administration and scoring",
            sensitivity: "67-97.9 (39-100)",
            specificity: "92.94 (25.4-97.7)",
            time: "<2 min",
        },
        {
            tool: "Verbal Fluency Test",
            advantage: "Brief",
            disadvantage: "Cut point not obvious",
            sensitivity: "37-89.5 (19-100)",
            specificity: "62-97 (48.9-97)",
            time: "<2 min",
        },
        {
            tool: "Cognitive Disorder Examination (CODEX)",
            advantage: "Brief",
            disadvantage: "Less well-studied",
            sensitivity: "81-93",
            specificity: "81-85",
            time: "<3 min",
        },
    ];

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Cognitive Screening Tools</h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Tool/Test</th>
                        <th style={thStyle}>Advantage</th>
                        <th style={thStyle}>Disadvantage</th>
                        <th style={thStyle}>Sensitivity (%)</th>
                        <th style={thStyle}>Specificity (%)</th>
                        <th style={thStyle}>Time to Administer</th>
                    </tr>
                </thead>
                <tbody>
                    {tools.map((tool, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{tool.tool}</td>
                            <td style={tdStyle}>{tool.advantage}</td>
                            <td style={tdStyle}>{tool.disadvantage}</td>
                            <td style={tdStyle}>{tool.sensitivity}</td>
                            <td style={tdStyle}>{tool.specificity}</td>
                            <td style={tdStyle}>{tool.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
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

export default CognitiveScreeningTools;
