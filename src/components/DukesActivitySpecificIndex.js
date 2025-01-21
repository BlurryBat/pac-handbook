import React, { useState } from "react";

function DukesActivitySpecificIndex() {
    const activities = [
        { question: "Take care of yourself, that is, eat, dress, bathe, or use the toilet?", points: 2.75 },
        { question: "Walk indoors, such as around your house?", points: 1.75 },
        { question: "Walk 200 yards on level ground?", points: 2.75 },
        { question: "Climb a flight of stairs or walk up a hill?", points: 5.50 },
        { question: "Run a short distance?", points: 8.00 },
        { question: "Do light work around the house like dusting or washing dishes?", points: 2.70 },
        { question: "Do moderate work around the house like vacuuming, sweeping floors, or carrying groceries?", points: 3.50 },
        { question: "Do heavy work around the house like scrubbing floors or lifting or moving heavy furniture?", points: 8.00 },
        { question: "Do yard work like raking leaves, weeding, or pushing a power mower?", points: 4.50 },
        { question: "Have sexual relations?", points: 5.25 },
        { question: "Participate in moderate recreational activities like golf, bowling, dancing, doubles tennis, or throwing a ball?", points: 6.00 },
        { question: "Participate in strenuous sports like swimming, singles tennis, football, basketball, or skiing?", points: 7.50 },
    ];

    const [responses, setResponses] = useState(Array(activities.length).fill(false));

    const handleCheckboxChange = (index) => {
        const updatedResponses = [...responses];
        updatedResponses[index] = !updatedResponses[index];
        setResponses(updatedResponses);
    };

    const calculateTotalScore = () => {
        return responses.reduce(
            (total, selected, index) => (selected ? total + activities[index].points : total),
            0
        );
    };

    const calculateEstimatedMETS = () => {
        const totalScore = calculateTotalScore();
        return ((0.43 * totalScore) + 9.6) / 3.5;
    };

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Duke’s Activity Specific Index Questionnaire</h2>

            <section style={sectionStyle}>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Can You</th>
                        <th style={thStyle}>Points</th>
                        <th style={thStyle}>Select</th>
                    </tr>
                    </thead>
                    <tbody>
                    {activities.map((activity, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{activity.question}</td>
                            <td style={tdStyle}>{activity.points}</td>
                            <td style={tdStyle}>
                                <input
                                    type="checkbox"
                                    checked={responses[index]}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <div style={resultContainerStyle}>
                <h3>Total Score: {calculateTotalScore()}</h3>
                <h3>Estimated METS: {calculateEstimatedMETS().toFixed(2)}</h3>
            </div>
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

const resultContainerStyle = {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

export default DukesActivitySpecificIndex;
