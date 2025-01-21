import React from "react";

function BedsidePFTs() {
    const tests = [
        {
            title: "Breath Holding Test (Sabarez Test)",
            description: "Patient is asked to take a full breath but not too deep and hold it for as long as possible.",
            results: [
                "> 25 seconds: Normal result",
                "< 15 seconds: Poor cardio-pulmonary reserve (CPR) and possibly contraindicated for elective surgery",
                "15–25 seconds: Limited CPR",
            ],
        },
        {
            title: "DeBono’s Whistle Blowing Test",
            description:
                "Patient blows down a wide-bore tube with a whistle at the end. The intensity of the airflow is adjusted until the whistle disappears, and the last position is recorded as the PEFR (Peak Expiratory Flow Rate).",
            image: "path/to/image", // Replace with the actual image path if required.
            results: ["Measures PEFR, which can be as high as 300L/min."],
        },
        {
            title: "Snider’s Match-blowing Test",
            description:
                "Patient inhales maximally and exhales rapidly, attempting to extinguish a burning match held 6 inches (15 cm) from their mouth without using their lips.",
            results: [
                "Able to blow the match: MBC > 60 L/min and FEV1 > 1.60 L.",
                "Modified Snider’s Test: MBC thresholds - 3 inches (>40 L/min), 6 inches (>60 L/min), 9 inches (>150 L/min).",
            ],
        },
        {
            title: "6-Minute Walk Test",
            description:
                "Distance the patient can walk during a 6-minute test correlates with Vo2max (e.g., 450 m walk = 15 ml/kg/min).",
            results: ["Vo2max = Distance in meters divided by 30."],
        },
        {
            title: "Tracheal Auscultation Test and Forced Expiration Time (FET)",
            description:
                "Patient takes a deep breath and expires forcefully while a stethoscope is placed over the trachea to measure expiration time.",
            results: [
                "Normal: 3–5 seconds",
                "> 6 seconds: Obstructive airway disease",
                "< 3 seconds: Restrictive lung disease",
            ],
        },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Bedside Pulmonary Function Tests</h2>

            {tests.map((test, index) => (
                <section key={index} style={sectionStyle}>
                    <h3 style={subHeaderStyle}>{test.title}</h3>
                    <p style={descriptionStyle}>{test.description}</p>
                    {test.image && <img src={test.image} alt={test.title} style={imageStyle} />}
                    <ul style={listStyle}>
                        {test.results.map((result, resultIndex) => (
                            <li key={resultIndex} style={listItemStyle}>
                                {result}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
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
    fontSize: "20px",
    marginBottom: "10px",
    color: "#555",
};

const descriptionStyle = {
    fontSize: "16px",
    marginBottom: "10px",
    color: "#555",
};

const sectionStyle = {
    marginBottom: "30px",
};

const listStyle = {
    paddingLeft: "20px",
};

const listItemStyle = {
    marginBottom: "5px",
    fontSize: "14px",
    color: "#333",
};

const imageStyle = {
    display: "block",
    margin: "10px 0",
    maxWidth: "100%",
    borderRadius: "4px",
};

export default BedsidePFTs;
