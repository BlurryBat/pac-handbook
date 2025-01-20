import React, { useState } from "react";

function StopBangQuestionnaire() {
    const questions = [
        "Do you snore loudly (loud enough to be heard through closed doors or your bed-partner elbows you for snoring at night)?",
        "Do you often feel tired, fatigued, or sleepy during the daytime (such as falling asleep during driving or talking to someone)?",
        "Has anyone observed you stop breathing or choking/gasping during your sleep?",
        "Do you have, or are you being treated for, high blood pressure?",
        "Is your BMI more than 35 kg/m²?",
        "Are you older than 50 years?",
        "Is your neck size large? (Measured around Adam’s apple: For men, is your shirt collar 43 cm (17 inches) or larger? For women, is your shirt collar 41 cm (16 inches) or larger?)",
        "Are you male?",
    ];

    const [answers, setAnswers] = useState(Array(questions.length).fill(null));

    const handleAnswer = (index, value) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = value;
        setAnswers(updatedAnswers);
    };

    const calculateRisk = () => {
        const yesCount = answers.filter((answer) => answer === true).length;

        if (yesCount <= 2) return "Low risk of OSA";
        if (yesCount <= 4) return "Intermediate risk of OSA";
        return "High risk of OSA";
    };

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Obesity Risk Assessment - STOP Bang Questionnaire</h2>
            <form style={formStyle}>
                {questions.map((question, index) => (
                    <div key={index} style={questionContainerStyle}>
                        <p style={questionStyle}>{index + 1}. {question}</p>
                        <label style={radioLabelStyle}>
                            <input
                                type="radio"
                                name={`question-${index}`}
                                onChange={() => handleAnswer(index, true)}
                            />{" "}
                            Yes
                        </label>
                        <label style={radioLabelStyle}>
                            <input
                                type="radio"
                                name={`question-${index}`}
                                onChange={() => handleAnswer(index, false)}
                            />{" "}
                            No
                        </label>
                    </div>
                ))}
            </form>
            <div style={resultContainerStyle}>
                <h3>Risk Assessment:</h3>
                <p>{answers.includes(null) ? "Please answer all questions" : calculateRisk()}</p>
            </div>
        </div>
    );
}

const pageContainerStyle = {
    maxWidth: "800px",
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

const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
};

const questionContainerStyle = {
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
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

export default StopBangQuestionnaire;
