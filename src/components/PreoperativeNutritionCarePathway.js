import React from "react";

function PONSNutritionCarePathway() {
    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Preoperative Nutrition Care Based on PONS Score</h2>
            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Low Nutrition Risk Pathway</h3>
                <ol style={listStyle}>
                    <li>Scheduled for Surgery</li>
                    <li>PONS Assessment and Albumin</li>
                    <li>
                        <b>Risk Determination:</b>
                        <ul>
                            <li>PONS (-) AND/OR Albumin &gt;3</li>
                        </ul>
                    </li>
                    <li>PAT Testing/Intervention (Oral IMN 5 days pre-op, ready for surgery)</li>
                    <li>Surgery with Oral IMN 7 days post-op</li>
                </ol>
            </section>
            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>High Nutrition Risk Pathway</h3>
                <ol style={listStyle}>
                    <li>Scheduled for Surgery</li>
                    <li>PONS Assessment and Albumin</li>
                    <li>
                        <b>Risk Determination:</b>
                        <ul>
                            <li>PONS (+) AND/OR Albumin &lt;3</li>
                        </ul>
                    </li>
                    <li>Nutrition Clinic Visit/Intervention for Nutrition Evaluation (History, PO Intake)</li>
                    <li>Weekly Telehealth/PO Intake Evaluation, Weight Update, Compliance Check</li>
                    <li>1 Month Visit/Reassessment for Weight Check, Albumin Status, Surgery Readiness</li>
                    <li>
                        Weight Gain Stabilized, Albumin Trend Improved, Continue Nutrition Therapy
                        <ul>
                            <li>Weekly Calls to Monitor Progress</li>
                            <li>Consider Surgery Delay if Necessary</li>
                            <li>Address Tumor Burden/Infection if Needed</li>
                        </ul>
                    </li>
                    <li>Surgery with Oral IMN 7 days post-op</li>
                </ol>
            </section>
        </div>
    );
}

const containerStyle = {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
};

const headerStyle = {
    textAlign: "center",
    color: "#333",
    fontSize: "24px",
    marginBottom: "20px",
};

const sectionStyle = {
    marginBottom: "30px",
};

const subHeaderStyle = {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#555",
};

const listStyle = {
    paddingLeft: "20px",
    lineHeight: "1.8",
};

export default PONSNutritionCarePathway;
