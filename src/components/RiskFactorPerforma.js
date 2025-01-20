import React, { useState } from "react";

function RiskFactorProforma() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        sex: "",
        dateOfSurgery: "",
        plannedOperation: "",
        surgeon: "",
        primaryDoctor: "",
        otherDoctors: "",
        operations: Array(6).fill(""),
        allergies: Array(4).fill(""),
        medications: Array(10).fill({ drug: "", dose: "" }),
        questions: Array(10).fill(null),
    });

    const handleChange = (e, field, index) => {
        if (Array.isArray(formData[field])) {
            const updatedField = [...formData[field]];
            if (typeof index !== "undefined") {
                updatedField[index] = e.target.value;
            }
            setFormData({ ...formData, [field]: updatedField });
        } else {
            setFormData({ ...formData, [field]: e.target.value });
        }
    };

    const handleCheckbox = (index, value) => {
        const updatedQuestions = [...formData.questions];
        updatedQuestions[index] = value;
        setFormData({ ...formData, questions: updatedQuestions });
    };

    return (
        <div style={formContainerStyle}>
            <h2 style={headerStyle}>General Proforma for Identifying the Risk Factor</h2>
            <form style={formStyle}>
                <div style={formGroupStyle}>
                    <label>Patient's Name:</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange(e, "name")}
                        style={inputStyle}
                    />
                </div>
                <div style={formGroupRowStyle}>
                    <div style={formGroupStyle}>
                        <label>Age:</label>
                        <input
                            type="text"
                            value={formData.age}
                            onChange={(e) => handleChange(e, "age")}
                            style={inputStyle}
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <label>Sex:</label>
                        <input
                            type="text"
                            value={formData.sex}
                            onChange={(e) => handleChange(e, "sex")}
                            style={inputStyle}
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <label>Date of Surgery:</label>
                        <input
                            type="date"
                            value={formData.dateOfSurgery}
                            onChange={(e) => handleChange(e, "dateOfSurgery")}
                            style={inputStyle}
                        />
                    </div>
                </div>
                <div style={formGroupStyle}>
                    <label>Planned Operation:</label>
                    <input
                        type="text"
                        value={formData.plannedOperation}
                        onChange={(e) => handleChange(e, "plannedOperation")}
                        style={inputStyle}
                    />
                </div>
                <div style={formGroupStyle}>
                    <label>Surgeon:</label>
                    <input
                        type="text"
                        value={formData.surgeon}
                        onChange={(e) => handleChange(e, "surgeon")}
                        style={inputStyle}
                    />
                </div>
                <div>
                    <h3 style={sectionHeaderStyle}>Operations</h3>
                    {formData.operations.map((operation, index) => (
                        <div key={index} style={formGroupStyle}>
                            <label>Operation {index + 1}:</label>
                            <input
                                type="text"
                                value={operation}
                                onChange={(e) => handleChange(e, "operations", index)}
                                style={inputStyle}
                            />
                        </div>
                    ))}
                </div>
                <div>
                    <h3 style={sectionHeaderStyle}>Allergies</h3>
                    {formData.allergies.map((allergy, index) => (
                        <div key={index} style={formGroupStyle}>
                            <label>Allergy {index + 1}:</label>
                            <input
                                type="text"
                                value={allergy}
                                onChange={(e) => handleChange(e, "allergies", index)}
                                style={inputStyle}
                            />
                        </div>
                    ))}
                </div>
                <div>
                    <h3 style={sectionHeaderStyle}>Medications</h3>
                    {formData.medications.map((med, index) => (
                        <div key={index} style={formGroupRowStyle}>
                            <div style={formGroupStyle}>
                                <label>Name:</label>
                                <input
                                    type="text"
                                    value={med.drug}
                                    onChange={(e) => handleChange(e, "medications", index)}
                                    style={inputStyle}
                                />
                            </div>
                            <div style={formGroupStyle}>
                                <label>Dose:</label>
                                <input
                                    type="text"
                                    value={med.dose}
                                    onChange={(e) => handleChange(e, "medications", index)}
                                    style={inputStyle}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <h3 style={sectionHeaderStyle}>Questions</h3>
                    {[
                        "Have you taken steroids?",
                        "Have you ever smoked?",
                        "Do you drink alcohol?",
                        "Do you use illegal drugs?",
                        "Can you walk up stairs?",
                        "Have you had heart problems?",
                        "Do you have high blood pressure?",
                        "Do you have lung problems?",
                        "Have you had a cold recently?",
                    ].map((question, index) => (
                        <div key={index} style={formGroupStyle}>
                            <p style={questionStyle}>{question}</p>
                            <label style={radioLabelStyle}>
                                <input
                                    type="radio"
                                    name={`question-${index}`}
                                    onChange={() => handleCheckbox(index, true)}
                                />{" "}
                                Yes
                            </label>
                            <label style={radioLabelStyle}>
                                <input
                                    type="radio"
                                    name={`question-${index}`}
                                    onChange={() => handleCheckbox(index, false)}
                                />{" "}
                                No
                            </label>
                        </div>
                    ))}
                </div>
            </form>
        </div>
    );
}

const formContainerStyle = {
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
};

const formGroupStyle = {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
};

const formGroupRowStyle = {
    display: "flex",
    gap: "20px",
    marginBottom: "15px",
};

const inputStyle = {
    padding: "8px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
};

const sectionHeaderStyle = {
    marginTop: "20px",
    marginBottom: "10px",
    fontSize: "20px",
    color: "#555",
};

const questionStyle = {
    marginBottom: "5px",
    fontWeight: "bold",
};

const radioLabelStyle = {
    marginRight: "15px",
};

export default RiskFactorProforma;
