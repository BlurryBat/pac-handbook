import React from "react";

function PreoperativeManagementMedications() {
    const medications = [
        { name: "Antihypertensive medications", instructions: "Continue on the day of surgery, except for ACEIs and ARBs." },
        { name: "Cardiac medications (e.g., β-blockers, digoxin)", instructions: "Continue on the day of surgery." },
        { name: "Antidepressants, anxiolytics, and other psychiatric medications", instructions: "Continue on the day of surgery." },
        { name: "Thyroid medications", instructions: "Continue on the day of surgery." },
        { name: "Oral contraceptive pills", instructions: "Continue on the day of surgery." },
        { name: "Eye drops", instructions: "Continue on the day of surgery." },
        { name: "Heartburn or reflux medications", instructions: "Continue on the day of surgery." },
        { name: "Opioid medications", instructions: "Continue on the day of surgery." },
        { name: "Anticonvulsant medications", instructions: "Continue on the day of surgery." },
        { name: "Asthma medications", instructions: "Continue on the day of surgery." },
        { name: "Corticosteroids (oral and inhaled)", instructions: "Continue on the day of surgery." },
        { name: "Statins", instructions: "Continue on the day of surgery." },
        { name: "Aspirin", instructions: "Continue in patients with prior PCI, high-grade IHD, or significant CVD. Discontinue 3 days before surgery otherwise." },
        { name: "P2Y12 inhibitors (e.g., clopidogrel, ticagrelor, prasugrel, ticlopidine)", instructions: "Stop 5–10 days before surgery unless advised otherwise." },
        { name: "Insulin", instructions: "Discontinue short-acting insulin on the day of surgery unless basal insulin is used." },
        { name: "Topical medications (e.g., creams and ointments)", instructions: "Discontinue on the day of surgery." },
        { name: "Non-insulin antidiabetic medications", instructions: "Discontinue on the day of surgery." },
        { name: "Diuretics", instructions: "Discontinue on the day of surgery, except for thiazides for hypertension." },
        { name: "Sildenafil (Viagra) or similar drugs", instructions: "Discontinue 24 hours before surgery." },
        { name: "COX-2 inhibitors", instructions: "Continue on the day of surgery unless concerned about bone healing." },
        { name: "NSAIDs", instructions: "Discontinue 48 hours before the day of surgery." },
        { name: "Warfarin (Coumadin)", instructions: "Discontinue 5 days before surgery, except for specific procedures." },
        { name: "Monoamine oxidase inhibitors", instructions: "Continue and adjust the anesthesia plan accordingly." },
    ];

    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Preoperative Management of Medications</h2>
            <ul style={listStyle}>
                {medications.map((medication, index) => (
                    <li key={index} style={itemStyle}>
                        <strong>{medication.name}:</strong> {medication.instructions}
                    </li>
                ))}
            </ul>
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

const listStyle = {
    paddingLeft: "20px",
    lineHeight: "1.8",
};

const itemStyle = {
    marginBottom: "10px",
};

export default PreoperativeManagementMedications;
