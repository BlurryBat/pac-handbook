import React from "react";

function ChildTurcottePughScoringSystem() {
    const parameters = [
        { parameter: "Albumin (g/dL)", a: ">3.5", b: "1.8-3.5", c: "<2.8" },
        { parameter: "Prothrombin time (Seconds prolonged)", a: "<4", b: "4-6", c: ">6" },
        { parameter: "International normalized ratio", a: "<1.7", b: "1.7-2.3", c: ">2.3" },
        { parameter: "Bilirubin (mg/dL)", a: "<2", b: "2-3", c: ">3" },
        { parameter: "Ascites", a: "Absent", b: "Slight-moderate", c: "Tense" },
        { parameter: "Encephalopathy", a: "None", b: "Grade I-II", c: "Grade III-IV" },
    ];

    const ctpScores = [
        { score: "5-6", class: "A", mortality: "2-10%" },
        { score: "7-9", class: "B", mortality: "12-31%" },
        { score: "10-15", class: "C", mortality: "12-82%" },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Hepatic Risk Assessment: Modified Child-Turcotte-Pugh Scoring System</h2>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Parameters</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Parameter</th>
                        <th style={thStyle}>A</th>
                        <th style={thStyle}>B</th>
                        <th style={thStyle}>C</th>
                    </tr>
                    </thead>
                    <tbody>
                    {parameters.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.parameter}</td>
                            <td style={tdStyle}>{item.a}</td>
                            <td style={tdStyle}>{item.b}</td>
                            <td style={tdStyle}>{item.c}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Child-Turcotte-Pugh (CTP) Score</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>CTP Score</th>
                        <th style={thStyle}>Class</th>
                        <th style={thStyle}>Operative Mortality</th>
                    </tr>
                    </thead>
                    <tbody>
                    {ctpScores.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.score}</td>
                            <td style={tdStyle}>{item.class}</td>
                            <td style={tdStyle}>{item.mortality}</td>
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

export default ChildTurcottePughScoringSystem;
