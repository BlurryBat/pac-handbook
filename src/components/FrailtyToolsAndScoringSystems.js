import React from "react";

function FrailtyToolsAndScoringSystems() {
    const tools = [
        {
            measure: "Frailty phenotype",
            description: "Weight loss, grip strength, exhaustion, low physical activity, and 15 feet walking speed",
            outcome: "30-day postoperative complications, institutionalization, and length of stay",
            source: "Makary et al. 2010; Revenig et al. 2015",
        },
        {
            measure: "Frailty index/deficit accumulation",
            description: "30-70 measures of comorbidity, ADL, physical and social functionality",
            outcome: "30-day mortality and institutionalization",
            source: "Mitnitski et al. 2001",
        },
        {
            measure: "Modified frailty index",
            description:
                "History of diabetes, COPD or pneumonia; congestive heart failure; myocardial infarction; angina; PCI; hypertension requiring medication; peripheral vascular disease; dementia; TIA or CVA; CVA with neurological deficit; ADL",
            outcome:
                "30-day, 1-year, and 2-year mortality, 30-day major postoperative complications",
            source:
                "Adams et al. 2017; Shinall et al. 2013; Hall et al. 2017; Kobelt et al. 2018; Velanovich et al. 2013",
        },
        {
            measure: "Gait speed",
            description: "5-m gait ≤6 s",
            outcome:
                "Mortality, major postoperative complications, institutionalization, and length of stay",
            source: "Afilalo et al. 2010",
        },
        {
            measure: "Timed Up and Go",
            description: "TUG ≤10 s: 11-14 s ≥15 s",
            outcome: "1-year mortality",
            source: "Robinson et al. 2011",
        },
        {
            measure: "Falls",
            description: "6-month hx of falls",
            outcome:
                "30-day major postoperative complications, institutionalization, and 30-day readmission",
            source: "Jones et al. 2009",
        },
        {
            measure: "Robinson",
            description:
                "Katz Score, Mini cognition, Charlson Index, anemia <35%, albumin <3.4, hx of falls",
            outcome:
                "30-day major postoperative complications, length of stay, 30-day readmission, 6-month mortality",
            source: "Robinson et al. 2011",
        },
    ];

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>
                Current Frailty Tools and Scoring Systems
            </h2>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Frailty Measure</th>
                    <th style={thStyle}>Description</th>
                    <th style={thStyle}>Clinical Outcome</th>
                    <th style={thStyle}>Source</th>
                </tr>
                </thead>
                <tbody>
                {tools.map((tool, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>{tool.measure}</td>
                        <td style={tdStyle}>{tool.description}</td>
                        <td style={tdStyle}>{tool.outcome}</td>
                        <td style={tdStyle}>{tool.source}</td>
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

export default FrailtyToolsAndScoringSystems;
