import React from "react";

function Page({ name, tags }) {
    return (
        <div style={pageStyle}>
            <h1>{name}</h1>
            <p>Tags: {tags.join(", ")}</p>
        </div>
    );
}

const pageStyle = { padding: "20px" };

export default Page;