import React from "react";

function GCS() {
    const adultData = [
        { activity: "Eye Opening", response: ["Never", "To speech", "To pain", "Spontaneously"], scores: [1, 2, 3, 4] },
        { activity: "Best Verbal Response", response: ["None", "Incomprehensible sounds", "Inappropriate words", "Confused but conversant", "Oriented"], scores: [1, 2, 3, 4, 5] },
        { activity: "Best Motor Response", response: ["None", "Abnormal extension (decerebrate)", "Abnormal flexion (decorticate)", "Withdrawal", "Localizes pain", "Obeys commands"], scores: [1, 2, 3, 4, 5, 6] },
    ];

    const pediatricData = [
        { activity: "Eye Opening", response: ["Spontaneous", "To speech", "To pain", "None"], scores: [4, 3, 2, 1] },
        { activity: "Verbal", response: ["Coos, babbles", "Irritable cries", "Cries to pain", "Moans to pain", "None"], scores: [5, 4, 3, 2, 1] },
        { activity: "Motor", response: ["Normal spontaneous movements", "Withdraws to touch", "Withdraws to pain", "Abnormal flexion (decorticate)", "Abnormal extension (decerebrate)", "Flaccid"], scores: [6, 5, 4, 3, 2, 1] },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>GCS (Glasgow Coma Scale)</h2>
            <h3 style={subHeaderStyle}>GCS: Adults</h3>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Activity</th>
                    <th style={thStyle}>Response</th>
                    <th style={thStyle}>Score</th>
                </tr>
                </thead>
                <tbody>
                {adultData.map((item, index) =>
                    item.response.map((res, subIndex) => (
                        <tr key={`${index}-${subIndex}`}>
                            <td style={tdStyle}>{subIndex === 0 ? item.activity : ""}</td>
                            <td style={tdStyle}>{res}</td>
                            <td style={tdStyle}>{item.scores[subIndex]}</td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
            <h3 style={subHeaderStyle}>GCS: Paediatrics</h3>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Activity</th>
                    <th style={thStyle}>Response</th>
                    <th style={thStyle}>Score</th>
                </tr>
                </thead>
                <tbody>
                {pediatricData.map((item, index) =>
                    item.response.map((res, subIndex) => (
                        <tr key={`${index}-${subIndex}`}>
                            <td style={tdStyle}>{subIndex === 0 ? item.activity : ""}</td>
                            <td style={tdStyle}>{res}</td>
                            <td style={tdStyle}>{item.scores[subIndex]}</td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
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
    marginTop: "20px",
    fontSize: "20px",
    color: "#444",
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
};

const thStyle = {
    padding: "10px",
    textAlign: "left",
    borderBottom: "2px solid #ddd",
    backgroundColor: "#f0f0f0",
};

const tdStyle = {
    padding: "10px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
};

export default GCS;
