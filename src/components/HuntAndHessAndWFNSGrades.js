import React from "react";

function HuntAndHessAndWFNSGrades() {
    const huntAndHessGrades = [
        { grade: "0", criteria: "Unruptured aneurysm" },
        { grade: "I", criteria: "Asymptomatic or minimal headache and slight nuchal rigidity" },
        { grade: "II", criteria: "Moderate to severe headache, nuchal rigidity, but no neurologic deficit other than cranial nerve palsy" },
        { grade: "III", criteria: "Drowsiness, confusion, or mild focal deficit" },
        { grade: "IV", criteria: "Stupor, mild or severe hemiparesis, possible early decerebrate rigidity, vegetative disturbance" },
        { grade: "V", criteria: "Deep coma, decerebrate rigidity, moribund appearance" },
    ];

    const wfnsGrades = [
        { grade: "I", gcs: "15", motorDeficit: "Absent" },
        { grade: "II", gcs: "14-13", motorDeficit: "Absent" },
        { grade: "III", gcs: "14-13", motorDeficit: "Present" },
        { grade: "IV", gcs: "12-7", motorDeficit: "Present or absent" },
        { grade: "V", gcs: "6-3", motorDeficit: "Present or absent" },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Hunt and Hess Grades for SAH</h2>
            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Modified Hunt and Hess Clinical Grades</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Grades</th>
                        <th style={thStyle}>Criteria</th>
                    </tr>
                    </thead>
                    <tbody>
                    {huntAndHessGrades.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.grade}</td>
                            <td style={tdStyle}>{item.criteria}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <h2 style={headerStyle}>WFNS Grades for SAH</h2>
            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>World Federation of Neurological Surgeons Grades</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Grade</th>
                        <th style={thStyle}>Glasgow Coma Scale Score</th>
                        <th style={thStyle}>Motor Deficit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {wfnsGrades.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.grade}</td>
                            <td style={tdStyle}>{item.gcs}</td>
                            <td style={tdStyle}>{item.motorDeficit}</td>
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

export default HuntAndHessAndWFNSGrades;
