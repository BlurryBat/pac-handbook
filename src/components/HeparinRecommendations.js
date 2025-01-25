import React from "react";

function HeparinRecommendations() {
    const recommendations = [
        {
            category: "Preoperatively",
            heparinBID: "No increased risk of hemorrhagic complications",
            heparinTID: "Should be assessed on an individual basis",
            heparinUFH: "Document normal aPTT preoperatively",
            lmwh: "Must wait 10–12 h after a prophylactic dose, and 24 h after a therapeutic dose",
        },
        {
            category: "Postoperatively",
            heparinBID: "No increased risk of hemorrhagic complications",
            heparinTID: "Should be assessed on an individual basis",
            heparinUFH: "Sustained heparinization with an indwelling neuraxial catheter is associated with increased risk; monitor the patient’s neurologic status aggressively",
            lmwh:
                "Horlocker emphasizes that the first administration should be 'only in the presence of adequate hemostasis.' Once daily dosing: 6–8 h between needle/catheter placement and the first dose of LMWH; subsequent dosing should occur no sooner than 24 h later. BID dosing: first dose of LMWH no earlier than 24 h postoperatively",
        },
        {
            category: "Intraoperatively",
            heparinBID: "N/A",
            heparinTID: "N/A",
            heparinUFH: "Delayed for 1 h after needle placement",
            lmwh: "N/A",
        },
        {
            category: "Catheter Removal",
            heparinBID: "No increased risk of hemorrhagic complications",
            heparinTID: "Should be assessed on an individual basis",
            heparinUFH: "2–4 h after the last heparin dose",
            lmwh: "Remove indwelling catheters before initiation of LMWH",
        },
        {
            category: "Monitoring",
            heparinBID: "No effect on aPTT",
            heparinTID: "Potentially an increase in aPTT",
            heparinUFH: "aPTT for infusions and ACT for higher doses",
            lmwh: "Anti-Xa level",
        },
        {
            category: "Restarting After Removal",
            heparinBID: "No increased risk of hemorrhagic complications",
            heparinTID: "Should be assessed on an individual basis",
            heparinUFH: "One hour after catheter removal",
            lmwh: "First dose of LMWH should only be administered 2 h after catheter removal, and 24 h after needle/catheter placement (whichever is later)",
        },
    ];

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Recommendations for the Use of Heparin</h2>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Category</th>
                    <th style={thStyle}>Heparin 5000 IU SC BID</th>
                    <th style={thStyle}>Heparin 5000 IU SC TID</th>
                    <th style={thStyle}>Heparin UFH IV (and Doses >10,000 IU/d)</th>
                    <th style={thStyle}>LMWH</th>
                </tr>
                </thead>
                <tbody>
                {recommendations.map((item, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>{item.category}</td>
                        <td style={tdStyle}>{item.heparinBID}</td>
                        <td style={tdStyle}>{item.heparinTID}</td>
                        <td style={tdStyle}>{item.heparinUFH}</td>
                        <td style={tdStyle}>{item.lmwh}</td>
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

export default HeparinRecommendations;
