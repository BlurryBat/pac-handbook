import React from "react";

function PreoperativeNutritionRiskScreening() {
    const tools = [
        {
            name: "SGA (Subjective Global Assessment)",
            indices: "Patient's medical history (weight change, dietary intake change, gastrointestinal symptoms, and changes in functional capacity) and physical examination (loss of subcutaneous fat, muscle wasting, ankle or sacral edema, and ascites) are evaluated.",
            categories: [
                { label: "SGA A", description: "Well nourished" },
                { label: "SGA B", description: "Moderately malnourished" },
                { label: "SGA C", description: "Severely malnourished" },
            ],
        },
        {
            name: "NRS (Nutritional Risk Screening)",
            indices: "Patients are characterized by scoring the components undernutrition and severity of disease in 4 categories (absent, mild, moderate, and severe). Patients can have a score of 0–3 for each component and a total score of 0–6; any patient with a total score ≥3 is considered to be at nutritional risk.",
            categories: [
                { label: "Score 1", description: "Patients admitted for chronic disease complications but able to consume oral diet or supplements." },
                { label: "Score 2", description: "Patients confined to bed due to severe illness but able to sustain nutritional needs via artificial feeding." },
                { label: "Score 3", description: "Patients in intensive care requiring assisted ventilation, inotropic drugs, etc." },
            ],
        },
        {
            name: "Reilly’s NRS",
            indices: "Evaluates weight loss (amount and duration), body mass index (BMI) for adults, food intake, and stress factors (effect of medical condition on nutritional requirements).",
            categories: [
                { label: "7–15", description: "High risk" },
                { label: "4–6", description: "Moderate risk" },
                { label: "0–3", description: "Low risk" },
            ],
        },
        {
            name: "NRI (Nutritional Risk Indicator)",
            indices: "Recent weight loss and serum albumin concentration are evaluated. Formula: NRI = (1.489 × serum albumin [g/L]) + (41.7 × current weight/usual weight).",
            categories: [
                { label: ">97.5", description: "Well nourished" },
                { label: "83.5%–97.5%", description: "Moderately malnourished" },
                { label: "<83.5%", description: "Severely malnourished" },
            ],
        },
    ];

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Preoperative Nutrition Risk Screening</h2>
            {tools.map((tool, index) => (
                <section style={sectionStyle} key={index}>
                    <h3 style={subHeaderStyle}>{tool.name}</h3>
                    <p style={descriptionStyle}>{tool.indices}</p>
                    <table style={tableStyle}>
                        <thead>
                        <tr>
                            <th style={thStyle}>Category</th>
                            <th style={thStyle}>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tool.categories.map((category, idx) => (
                            <tr key={idx}>
                                <td style={tdStyle}>{category.label}</td>
                                <td style={tdStyle}>{category.description}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
            ))}
        </div>
    );
}

const containerStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const headerStyle = {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
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

const descriptionStyle = {
    marginBottom: "10px",
    fontSize: "16px",
    color: "#555",
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
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
    textAlign: "center",
    border: "1px solid #ddd",
};

export default PreoperativeNutritionRiskScreening;
