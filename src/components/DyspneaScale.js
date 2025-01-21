import React from "react";

function DyspneaScale() {
    const mMRCScale = [
        { grade: 0, description: "I only get breathless with strenuous exercise" },
        { grade: 1, description: "I get short of breath when hurrying on level ground or walking up a slight hill" },
        { grade: 2, description: "On level ground, I walk slower than people of the same age due to breathlessness, or I have to stop for breath when walking at my own pace" },
        { grade: 3, description: "I stop for breath after walking about 100 yards or after a few minutes on level ground" },
        { grade: 4, description: "I am too breathless to leave the house or am breathless when dressing" },
    ];

    const walkingLimitation = [
        { category: "0", description: "No dyspnea while walking on a level surface at a normal pace" },
        { category: "I", description: "I am able to walk as far as I like, provided I take my time" },
        { category: "II", description: "Specific (street) block limitation ('I have to stop for a while after one or two blocks')" },
        { category: "III", description: "Dyspnea on mild exertion ('I have to stop and rest while going from the kitchen to the bathroom')" },
        { category: "IV", description: "Dyspnea at rest" },
    ];

    const nyhaClassification = [
        { class: "I", description: "No limitation; ordinary physical activity does not cause fatigue, shortness of breath, or palpitations." },
        { class: "II", description: "Slight limitation of physical activity; ordinary physical activity results in fatigue, shortness of breath, palpitations, or angina." },
        { class: "III", description: "Marked limitation of physical activity; ordinary activity will lead to symptoms." },
        { class: "IV", description: "Inability to carry on any physical activity without discomfort; symptoms of heart failure are present even at rest; increased discomfort is experienced with any physical activity." },
    ];

    return (
        <div style={pageContainerStyle}>
            <h2 style={headerStyle}>Dyspnea Scale</h2>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Modified Medical Research Council (mMRC) Dyspnea Scale</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Grade</th>
                        <th style={thStyle}>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {mMRCScale.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.grade}</td>
                            <td style={tdStyle}>{item.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>Problems Assessed in Terms of Walking on a Level Surface</h3>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Category</th>
                        <th style={thStyle}>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {walkingLimitation.map((item, index) => (
                        <tr key={index}>
                            <td style={tdStyle}>{item.category}</td>
                            <td style={tdStyle}>{item.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>

            <section style={sectionStyle}>
                <h3 style={subHeaderStyle}>New York Heart Association (NYHA) Classification</h3>
                <ul style={listStyle}>
                    {nyhaClassification.map((item, index) => (
                        <li key={index} style={listItemStyle}>
                            <strong>Class {item.class}:</strong> {item.description}
                        </li>
                    ))}
                </ul>
            </section>
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

const listStyle = {
    paddingLeft: "20px",
};

const listItemStyle = {
    marginBottom: "5px",
    fontSize: "14px",
    color: "#333",
};

export default DyspneaScale;
