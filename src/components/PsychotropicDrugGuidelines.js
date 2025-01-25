import React from "react";

function PsychotropicDrugGuidelines() {
    const guidelines = [
        {
            drugGroup: "TCAs",
            examples: "Amitriptyline, imipramine, dosulepin",
            concerns: "Muscarinic, histaminergic, and α-adrenergic blocking effect",
            withdrawalSymptoms: "Yes",
            recommendations: "Discontinue",
        },
        {
            drugGroup: "SSRIs",
            examples: "Venlafaxine, fluoxetine",
            concerns: "Anti-cholinergic effect",
            withdrawalSymptoms: "Yes",
            recommendations: "Can continue",
        },
        {
            drugGroup: "MAOIs",
            examples: "Phenelzine, moclobemide",
            concerns: "Avoid serotonin crisis precipitants, avoid indirect-acting sympathomimetics",
            withdrawalSymptoms: "Yes",
            recommendations: "Irreversible MAOI—discontinue 2 weeks before surgery, reversible MAOI—discontinue on the day of surgery",
        },
        {
            drugGroup: "Mood stabilizers",
            examples: "Lithium",
            concerns: "Prolongation of NMB drugs, reduction in anesthetic agent requirements, avoid NSAIDs",
            withdrawalSymptoms: "No",
            recommendations: "Discontinue 24 h before surgery",
        },
        {
            drugGroup: "Typical antipsychotics",
            examples: "Prochlorperazine, chlorpromazine",
            concerns: "Cholinergic, α₁-adrenergic, and histaminergic blocking effect",
            withdrawalSymptoms: "Yes",
            recommendations: "Can continue",
        },
        {
            drugGroup: "Atypical antipsychotics",
            examples: "Quetiapine, risperidone",
            concerns: "α₁-adrenergic blocking effect",
            withdrawalSymptoms: "Yes",
            recommendations: "Can continue",
        },
        {
            drugGroup: "BDZs",
            examples: "Lorazepam, temazepam",
            concerns: "Sedative",
            withdrawalSymptoms: "Yes",
            recommendations: "Can continue",
        },
    ];

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Guidelines for Patients with Antipsychotics</h2>
            <h3 style={subHeaderStyle}>Summary of perioperative advice for patients taking psychotropic drugs</h3>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Drug Group</th>
                    <th style={thStyle}>Examples</th>
                    <th style={thStyle}>Perioperative Concerns</th>
                    <th style={thStyle}>Withdrawal Symptoms</th>
                    <th style={thStyle}>Preoperative Discontinuation Recommendations</th>
                </tr>
                </thead>
                <tbody>
                {guidelines.map((row, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>{row.drugGroup}</td>
                        <td style={tdStyle}>{row.examples}</td>
                        <td style={tdStyle}>{row.concerns}</td>
                        <td style={tdStyle}>{row.withdrawalSymptoms}</td>
                        <td style={tdStyle}>{row.recommendations}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

const containerStyle = {
    padding: "20px",
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
};

const headerStyle = {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
};

const subHeaderStyle = {
    fontSize: "20px",
    marginBottom: "20px",
    color: "#555",
    textAlign: "center",
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
};

const thStyle = {
    padding: "10px",
    border: "1px solid #ddd",
    backgroundColor: "#f0f0f0",
    textAlign: "center",
};

const tdStyle = {
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "center",
};

export default PsychotropicDrugGuidelines;
