import React from "react";

function AnticoagulantRecommendations() {
    const recommendations = [
        {
            category: "Preoperatively",
            directThrombin: "Dabigatran: 5 d",
            factorXa: "Apixaban and rivaroxaban: 3 d",
            asa: "No apparent contraindication",
            p2y12: "Prasugrel: 7–10 d, Ticagrelor: 5–7 d, Clopidogrel: 5–7 d, Ticlopidine: 10–14 d",
            gpIIbIIIa: "Abciximab: 48 h, Tirofiban and eptifibatide: 8 h",
        },
        {
            category: "Postoperatively",
            directThrombin: "No clear recommendations have been made",
            factorXa: "No clear recommendations have been made",
            asa: "No apparent contraindication",
            p2y12: "No clear recommendations have been made",
            gpIIbIIIa: "No clear recommendations have been made",
        },
        {
            category: "Intraoperatively",
            directThrombin: "N/A",
            factorXa: "N/A",
            asa: "No apparent contraindication",
            p2y12: "No clear recommendations have been made",
            gpIIbIIIa: "No clear recommendations have been made",
        },
        {
            category: "Catheter Removal",
            directThrombin: "No clear recommendations have been made",
            factorXa: "No clear recommendations have been made",
            asa: "No apparent contraindication",
            p2y12: "No clear recommendations have been made",
            gpIIbIIIa: "No clear recommendations have been made",
        },
        {
            category: "Monitoring",
            directThrombin: "Thrombin time",
            factorXa: "Anti-Xa assays, calibrated specifically for apixaban and rivaroxaban",
            asa: "No reliable test; bleeding time shows significant interpatient and intrapatient variability",
            p2y12: "Multiplate analyzer VerifyNow P2Y12, and VASP assays",
            gpIIbIIIa: "Light transmission aggregometry, VerifyNow and PFA-100 assays",
        },
        {
            category: "Restarting After Removal",
            directThrombin: "Dabigatran: 6 h",
            factorXa: "Apixaban and rivaroxaban: 6 h",
            asa: "No apparent contraindication",
            p2y12: "Prasugrel and ticagrelor: 6 h",
            gpIIbIIIa: "No clear recommendations have been made",
        },
    ];

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Recommendations for Use of Anticoagulants</h2>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Category</th>
                    <th style={thStyle}>Direct Thrombin Inhibitors</th>
                    <th style={thStyle}>Factor Xa Inhibitors</th>
                    <th style={thStyle}>ASA/NSAIDs</th>
                    <th style={thStyle}>P2Y12 Inhibitors</th>
                    <th style={thStyle}>GP IIb/IIIa Inhibitors</th>
                </tr>
                </thead>
                <tbody>
                {recommendations.map((item, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>{item.category}</td>
                        <td style={tdStyle}>{item.directThrombin}</td>
                        <td style={tdStyle}>{item.factorXa}</td>
                        <td style={tdStyle}>{item.asa}</td>
                        <td style={tdStyle}>{item.p2y12}</td>
                        <td style={tdStyle}>{item.gpIIbIIIa}</td>
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

export default AnticoagulantRecommendations;
