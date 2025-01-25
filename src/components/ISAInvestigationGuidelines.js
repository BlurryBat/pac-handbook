import React from "react";

function ISAInvestigationGuidelines() {
    const guidelines = [
        { nature: "Minor", cbc: "≥ 45 years", rft: "-", lft: "-", ecg: "≥ 45 years", cxr: "-", serum: "-", airway: "-" },
        { nature: "Intermediate", cbc: "≥ 45 years", rft: "≥ 45 years", lft: "-", ecg: "≥ 45 years", cxr: "≥ 50 years", serum: "-", airway: "-" },
        { nature: "Major", cbc: "All", rft: "All", lft: "All", ecg: "All", cxr: "≥ 50 years", serum: "-", airway: "-" },
    ];

    const validity = [
        { investigation: "Blood Investigations", duration: "2 months" },
        { investigation: "12 Lead ECG", duration: "12 months" },
        { investigation: "Chest X-Ray (CXR)", duration: "12 months" },
    ];

    const summary = [
        "For non-diabetic ASA PS 1 and 2 adults scheduled for elective surgery, based on the nature of the surgery:",
        "Minor surgery – CBC, 12 lead ECG (for all patients aged ≥ 45 years)",
        "Intermediate surgery – CBC, Serum Creatinine, 12 lead ECG (for all patients aged ≥ 45 years), CXR (for all patients aged ≥ 50 years)",
        "Major surgery – CBC, Serum Creatinine, LFT, 12 lead ECG (for all patients aged ≥ 45 years), CXR (for all patients aged ≥ 50 years)",
        "Additional investigations are to be considered on an individual basis, as per patient evaluation.",
    ];

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>ISA Practice Guidelines for Preoperative Investigations</h2>

            <section>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Nature of Surgery</th>
                        <th style={thStyle}>Complete Blood Count (CBC)</th>
                        <th style={thStyle}>Renal Function Tests (RFT)</th>
                        <th style={thStyle}>Liver Function Tests (LFT)</th>
                        <th style={thStyle}>12 Lead Electrocardiogram (ECG)</th>
                        <th style={thStyle}>Chest X-Ray (CXR)</th>
                        <th style={thStyle}>Serum Electrolytes</th>
                        <th style={thStyle}>Airway Assessment</th>
                    </tr>
                    </thead>
                    <tbody>
                    {guidelines.map((row, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{row.nature}</td>
                            <td style={tdStyle}>{row.cbc}</td>
                            <td style={tdStyle}>{row.rft}</td>
                            <td style={tdStyle}>{row.lft}</td>
                            <td style={tdStyle}>{row.ecg}</td>
                            <td style={tdStyle}>{row.cxr}</td>
                            <td style={tdStyle}>{row.serum}</td>
                            <td style={tdStyle}>{row.airway}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <section>
                <h3 style={subHeaderStyle}>Validity Time for Previous Investigations (VTPIN)</h3>
                <ul>
                    {validity.map((item, index) => (
                        <li key={index} style={listStyle}>
                            {item.investigation}: {item.duration}
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h3 style={subHeaderStyle}>Summary</h3>
                <ul>
                    {summary.map((point, index) => (
                        <li key={index} style={listStyle}>{point}</li>
                    ))}
                </ul>
            </section>
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
    marginTop: "20px",
    marginBottom: "10px",
    color: "#555",
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

const listStyle = {
    marginBottom: "10px",
    lineHeight: "1.5",
};

export default ISAInvestigationGuidelines;
