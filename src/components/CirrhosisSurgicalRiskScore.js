import React from "react";

function CirrhosisSurgicalRiskScore() {
    const formulae = [
        "MELD = 3.78 × (serum bilirubin) + 11.2 × (INR) + 9.57 × (serum creatinine) + 6.43",
        "MELD = 6.43 + [3.78 × loge (bilirubin)] + [11.2 × loge (INR)] + [9.57 × loge (creatinine)]",
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Cirrhosis Surgical Risk Score</h2>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>VOCAL-Penn Cirrhosis Surgical Risk Calculator</h3>
                <div style={imageContainerStyle}>
                    <img
                        src="path/to/your/image"
                        alt="VOCAL-Penn Cirrhosis Surgical Risk Calculator"
                        style={imageStyle}
                    />
                </div>
                <p style={infoTextStyle}>
                    This calculator was designed using data from patients with cirrhosis undergoing surgery.
                    It predicts post-operative mortality at 30, 90, and 180 days.
                </p>
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>MELD Formulae</h3>
                <ul>
                    {formulae.map((formula, index) => (
                        <li key={index} style={listItemStyle}>{formula}</li>
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

const sectionStyle = {
    marginBottom: "30px",
};

const subHeaderStyle = {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#555",
};

const imageContainerStyle = {
    textAlign: "center",
    marginBottom: "15px",
};

const imageStyle = {
    maxWidth: "100%",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const infoTextStyle = {
    fontSize: "16px",
    color: "#666",
    textAlign: "justify",
};

const listItemStyle = {
    fontSize: "16px",
    color: "#444",
    marginBottom: "5px",
};

export default CirrhosisSurgicalRiskScore;
