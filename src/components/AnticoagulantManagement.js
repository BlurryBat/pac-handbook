import React from "react";

function AnticoagulantManagement() {
    const specificAnticoagulants = [
        {
            drug: "Dabigatran",
            mechanism: "Thrombin inhibitor",
            peak: "1.5–2 h",
            halfLife: "15–17 h",
            dosing: "Twice daily",
            atrialFibrillation: "Yes",
            venousThromboembolism: "Yes (bridging required)",
            hipKneeArthroplasty: "No",
        },
        {
            drug: "Rivaroxaban",
            mechanism: "Factor Xa inhibitor",
            peak: "3–4 h",
            halfLife: "9–10 h",
            dosing: "Once daily",
            atrialFibrillation: "Yes",
            venousThromboembolism: "Yes",
            hipKneeArthroplasty: "Yes",
        },
        {
            drug: "Apixaban",
            mechanism: "Factor Xa inhibitor",
            peak: "3–4 h",
            halfLife: "8–15 h",
            dosing: "Twice daily",
            atrialFibrillation: "Yes",
            venousThromboembolism: "Yes",
            hipKneeArthroplasty: "Yes",
        },
        {
            drug: "Edoxaban",
            mechanism: "Factor Xa inhibitor",
            peak: "1–2 h",
            halfLife: "6–10 h",
            dosing: "Once daily",
            atrialFibrillation: "Yes",
            venousThromboembolism: "Yes (bridging required)",
            hipKneeArthroplasty: "No",
        },
    ];

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Holding the Anticoagulant Before Surgery</h2>
            <p style={textStyle}>
                When to hold anticoagulants prior to major surgery:
            </p>
            <ul style={listStyle}>
                <li><strong>LMWH:</strong> Discontinue 24 hours prior to surgery.</li>
                <li><strong>Unfractionated Heparin:</strong> Discontinue 4 to 6 hours prior to surgery.</li>
                <li><strong>Warfarin:</strong> Stop 5 days prior to surgery.</li>
                <li><strong>Fondaparinux:</strong> Discontinue 72 to 96 hours prior to surgery.</li>
                <li>
                    <strong>TSOACs:</strong> Time for discontinuation depends on factors like bleeding risk, surgery type, and renal function:
                    <ul>
                        <li>
                            <strong>Dabigatran:</strong> Stop 1 day before surgery for low-risk cases; 2–3 days before for high-risk cases.
                            For renal impairment (CrCl 30–50 mL/min), stop 5 days prior.
                        </li>
                        <li>
                            <strong>Rivaroxaban:</strong> Stop 1 day before for low-risk cases; 2 days prior for high-risk cases.
                        </li>
                        <li>
                            <strong>Apixaban:</strong> Stop 1 day before for low-risk cases; 2 days prior for high-risk cases.
                        </li>
                    </ul>
                </li>
            </ul>

            <h2 style={headerStyle}>Specific Anticoagulants</h2>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Drug</th>
                    <th style={thStyle}>Mechanism of Action</th>
                    <th style={thStyle}>Time to Peak Plasma Concentration</th>
                    <th style={thStyle}>Half-Life</th>
                    <th style={thStyle}>Dosing Schedule</th>
                    <th style={thStyle}>Approved for Atrial Fibrillation</th>
                    <th style={thStyle}>Approved for Venous Thromboembolism</th>
                    <th style={thStyle}>Approved for Hip/Knee Arthroplasty</th>
                </tr>
                </thead>
                <tbody>
                {specificAnticoagulants.map((item, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>{item.drug}</td>
                        <td style={tdStyle}>{item.mechanism}</td>
                        <td style={tdStyle}>{item.peak}</td>
                        <td style={tdStyle}>{item.halfLife}</td>
                        <td style={tdStyle}>{item.dosing}</td>
                        <td style={tdStyle}>{item.atrialFibrillation}</td>
                        <td style={tdStyle}>{item.venousThromboembolism}</td>
                        <td style={tdStyle}>{item.hipKneeArthroplasty}</td>
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
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
};

const headerStyle = {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
};

const textStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
};

const listStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
    paddingLeft: "20px",
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
};

const thStyle = {
    padding: "10px",
    textAlign: "center",
    border: "1px solid #ddd",
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
};

const tdStyle = {
    padding: "10px",
    textAlign: "center",
    border: "1px solid #ddd",
};

export default AnticoagulantManagement;
