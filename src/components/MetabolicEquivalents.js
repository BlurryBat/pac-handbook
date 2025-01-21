import React from "react";

function MetabolicEquivalents() {
    const metLevels = [
        { met: 1, activity: "Eating, working at computer, or dressing" },
        { met: 2, activity: "Walking down stairs or in your house, or cooking" },
        { met: 3, activity: "Walking 1 or 2 blocks on level ground" },
        { met: 4, activity: "Raking leaves, gardening" },
        { met: 5, activity: "Climbing 1 flight of stairs, dancing, or bicycling" },
        { met: 6, activity: "Playing golf, or carrying clubs" },
        { met: 7, activity: "Playing singles tennis" },
        { met: 8, activity: "Rapidly climbing stairs, or jogging slowly" },
        { met: 9, activity: "Jumping rope slowly, or moderate cycling" },
        { met: 10, activity: "Swimming quickly, running or jogging briskly" },
        { met: 11, activity: "Skiing cross country, or playing full-court basketball" },
        { met: 12, activity: "Running rapidly for moderate to long distances" },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Cardiovascular System Risk Assessment: Metabolic Equivalents of Functional Capacity</h2>

            <section style={sectionStyle}>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>METs</th>
                        <th style={thStyle}>Equivalent Level of Exercise</th>
                    </tr>
                    </thead>
                    <tbody>
                    {metLevels.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.met}</td>
                            <td style={tdStyle}>{item.activity}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <p style={noteStyle}>
                <strong>Note:</strong> One metabolic equivalent of task (MET) is the amount of oxygen consumed while sitting at rest and is equivalent to an oxygen consumption of 3.5 mL/min/kg body weight.
            </p>
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

const noteStyle = {
    marginTop: "20px",
    fontSize: "14px",
    color: "#666",
    fontStyle: "italic",
};

export default MetabolicEquivalents;
