import React from "react";

function ECOGPerformanceStatusScale() {
    const performanceStatus = [
        { grade: 0, description: "Fully active, able to carry on all pre-disease performance without restriction" },
        { grade: 1, description: "Restricted in physically strenuous activity but ambulatory and able to carry out work of a light or sedentary nature, e.g., light housework, office work" },
        { grade: 2, description: "Ambulatory and capable of all self-care but unable to carry out any work activities; up and about > 50% of waking hours" },
        { grade: 3, description: "Capable of only limited self-care; confined to bed or chair > 50% of waking hours" },
        { grade: 4, description: "Completely disabled; cannot carry on any self-care; totally confined to bed or chair" },
        { grade: 5, description: "Dead" },
    ];

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>ECOG Performance Status Scale</h2>
            <p style={subHeaderStyle}>Eastern Cooperative Oncology Group</p>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Grade</th>
                    <th style={thStyle}>Performance Status</th>
                </tr>
                </thead>
                <tbody>
                {performanceStatus.map((item, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>{item.grade}</td>
                        <td style={tdStyle}>{item.description}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

const containerStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const headerStyle = {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
};

const subHeaderStyle = {
    textAlign: "center",
    fontSize: "16px",
    marginBottom: "20px",
    color: "#666",
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
    fontWeight: "bold",
};

const tdStyle = {
    padding: "10px",
    textAlign: "left",
    border: "1px solid #ddd",
};

export default ECOGPerformanceStatusScale;
