import React from "react";

function MajorBleedingRisk() {
    const riskFactors = [
        { characteristic: "Hypertension*", points: 1 },
        { characteristic: "Abnormal renal and liver function† (1 point each)", points: "1 or 2" },
        { characteristic: "Stroke‡", points: 1 },
        { characteristic: "Bleeding§", points: 1 },
        { characteristic: "Labile INRs¶", points: 1 },
        { characteristic: "Elderly (e.g., age >65 years)", points: 1 },
        { characteristic: "Drugs or alcohol (1 point each)**", points: "1 or 2" },
    ];

    const notes = [
        "* Systolic blood pressure >160 mm Hg.",
        "† The presence of chronic dialysis or renal transplantation or serum creatinine ≥200 mmol/L.",
        "‡ Chronic hepatic disease (e.g., cirrhosis) or biochemical evidence of significant hepatic derangement.",
        "§ Previous bleeding history or predisposition to bleeding.",
        "¶ Unstable or high international normalized ratio (INR) or poor time in the therapeutic range.",
        "** Concomitant use of drugs, such as antiplatelet agents or nonsteroidal anti-inflammatory drugs.",
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Risk of Major Bleeding in Patients with AF Who Are on Anticoagulants</h2>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Clinical Characteristics</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Clinical Characteristic</th>
                        <th style={thStyle}>Point</th>
                    </tr>
                    </thead>
                    <tbody>
                    {riskFactors.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.characteristic}</td>
                            <td style={tdStyle}>{item.points}</td>
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

export default MajorBleedingRisk;
