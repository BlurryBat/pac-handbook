import React, { useState } from "react";

function StopBangScreening() {
    const [answers, setAnswers] = useState(Array(8).fill(null));

    const handleAnswer = (index, value) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = value;
        setAnswers(updatedAnswers);
    };

    const calculateRisk = () => {
        const yesCount = answers.filter((answer) => answer === true).length;
        return yesCount > 3 ? "High risk of OSA" : "Low to moderate risk of OSA";
    };

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>STOP-Bang Screening for Sleep Apnea</h2>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>General Questions</h3>
                <div style={questionContainerStyle}>
                    <p style={questionStyle}>
                        Have you been diagnosed with sleep apnea by a sleep study?
                    </p>
                    <label style={radioLabelStyle}>
                        <input
                            type="radio"
                            name="q1"
                            onChange={() => handleAnswer(0, true)}
                        />{" "}
                        Yes
                    </label>
                    <label style={radioLabelStyle}>
                        <input
                            type="radio"
                            name="q1"
                            onChange={() => handleAnswer(0, false)}
                        />{" "}
                        No
                    </label>
                </div>

                <div style={questionContainerStyle}>
                    <p style={questionStyle}>
                        Have you received treatment for sleep apnea, such as CPAP or Bi-PAP?
                    </p>
                    <label style={radioLabelStyle}>
                        <input
                            type="radio"
                            name="q2"
                            onChange={() => handleAnswer(1, true)}
                        />{" "}
                        Yes
                    </label>
                    <label style={radioLabelStyle}>
                        <input
                            type="radio"
                            name="q2"
                            onChange={() => handleAnswer(1, false)}
                        />{" "}
                        No
                    </label>
                </div>
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>STOP-Bang Questions</h3>
                {[
                    "Do you snore loudly (louder than talking or loud enough to be heard through closed doors)?",
                    "Do you often feel tired, fatigued, or sleepy during daytime?",
                    "Has anyone observed you stop breathing during your sleep?",
                    "Do you have or are you being treated for high blood pressure?",
                    "Is your BMI ≥35 kg/m²?",
                    "Is the patient ≥50 years of age?",
                    "Is the neck circumference greater than 15.7 inches (40 cm)?",
                    "Is the patient male?",
                ].map((question, index) => (
                    <div key={index} style={questionContainerStyle}>
                        <p style={questionStyle}>{question}</p>
                        <label style={radioLabelStyle}>
                            <input
                                type="radio"
                                name={`q${index + 3}`}
                                onChange={() => handleAnswer(index + 2, true)}
                            />{" "}
                            Yes
                        </label>
                        <label style={radioLabelStyle}>
                            <input
                                type="radio"
                                name={`q${index + 3}`}
                                onChange={() => handleAnswer(index + 2, false)}
                            />{" "}
                            No
                        </label>
                    </div>
                ))}
            </section>

            <div style={resultContainerStyle}>
                <h3>Total Number of Yes Answers: {answers.filter((a) => a === true).length}</h3>
                <h3>Risk Assessment: {calculateRisk()}</h3>
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

const subHeaderStyle = {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#555",
};

const questionContainerStyle = {
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "10px",
};

const questionStyle = {
    margin: 0,
    fontSize: "16px",
    fontWeight: "bold",
};

const radioLabelStyle = {
    marginRight: "15px",
};

const resultContainerStyle = {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

export default StopBangScreening;
