import React from "react";

function RevisedCardiacRiskIndex() {
    const rcriComponents = [
        { component: "High-risk surgery (intraperitoneal, intrathoracic, or suprainguinal vascular procedure)", points: 1 },
        { component: "Ischemic heart disease (by any diagnostic criteria)", points: 1 },
        { component: "History of congestive heart failure", points: 1 },
        { component: "History of cerebrovascular disease", points: 1 },
        { component: "Diabetes mellitus requiring insulin", points: 1 },
        { component: "Creatinine > 2.0 mg/dL (176 µmol/L)", points: 1 },
    ];

    const rcriRisk = [
        { score: 0, risk: "0.4%" },
        { score: 1, risk: "1.0%" },
        { score: 2, risk: "2.4%" },
        { score: "≥3", risk: "5.4%" },
    ];

    const clinicalRiskFactors = [
        {
            surgicalRisk: "Low Risk (<1%)",
            functionalCapacity: "None",
            clinicalRiskFactors: "None",
            ecg: "No",
            tte: "No",
            stressImaging: "No",
            bnp: "No",
        },
        {
            surgicalRisk: "Intermediate or High Risk (1-5% or >5%)",
            functionalCapacity: "Excellent or good",
            clinicalRiskFactors: "≥1",
            ecg: "Might be considered (Age ≥65)",
            tte: "No",
            stressImaging: "Only at high risk",
            bnp: "Only at high risk",
        },
        {
            surgicalRisk: "Intermediate Risk (<1%)",
            functionalCapacity: "Bad (≤4 MET)",
            clinicalRiskFactors: "None",
            ecg: "Might be considered",
            tte: "No",
            stressImaging: "Might be considered",
            bnp: "No",
        },
        {
            surgicalRisk: "High Risk (>5%)",
            functionalCapacity: "Bad (≤4 MET)",
            clinicalRiskFactors: "1-2",
            ecg: "Yes",
            tte: "Should be considered",
            stressImaging: "Should be considered",
            bnp: "Should be considered",
        },
        {
            surgicalRisk: "High Risk (>5%)",
            functionalCapacity: "Bad (≤4 MET)",
            clinicalRiskFactors: "≥3",
            ecg: "Yes",
            tte: "Should be considered",
            stressImaging: "Yes",
            bnp: "Should be considered",
        },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Revised Cardiac Risk Index (RCRI)</h2>

            <section style={sectionStyle}>
                    <h3 style={subHeaderStyle}>Components of RCRI</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Component</th>
                        <th style={thStyle}>Points Assigned</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rcriComponents.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.component}</td>
                            <td style={tdStyle}>{item.points}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>RCRI Risk of Major Cardiac Events</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>RCRI Score</th>
                        <th style={thStyle}>Risk</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rcriRisk.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.score}</td>
                            <td style={tdStyle}>{item.risk}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Clinical Risk Factors and Assessment</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Surgical Risk</th>
                        <th style={thStyle}>Functional Capacity</th>
                        <th style={thStyle}>Clinical Risk Factors</th>
                        <th style={thStyle}>ECG</th>
                        <th style={thStyle}>TTE</th>
                        <th style={thStyle}>Stress Imaging</th>
                        <th style={thStyle}>BNP</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clinicalRiskFactors.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.surgicalRisk}</td>
                            <td style={tdStyle}>{item.functionalCapacity}</td>
                            <td style={tdStyle}>{item.clinicalRiskFactors}</td>
                            <td style={tdStyle}>{item.ecg}</td>
                            <td style={tdStyle}>{item.tte}</td>
                            <td style={tdStyle}>{item.stressImaging}</td>
                            <td style={tdStyle}>{item.bnp}</td>
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


export default RevisedCardiacRiskIndex;
