import React from "react";
import { Link } from "react-router-dom";

function HomePage({ pages, searchResults }) {
    const results = searchResults.length > 0 ? searchResults : pages;

    return (
        <main style={mainStyle}>
            <h1 style={proofReadingStyle}>PROOF READING REQUIRED</h1> {/* Add this line */}
            <h2>Index</h2>
            <ul>
                {results.map((page, index) => (
                    <li key={index}>
                        <Link to={`/${page.name.toLowerCase().replace(/\s+/g, "-")}`}>
                            {page.name}
                        </Link>{" "}
                        - Tags: {page.tags.join(", ")}
                    </li>
                ))}
            </ul>
        </main>
    );
}

const mainStyle = { padding: "20px" };

const proofReadingStyle = {
    textAlign: "center",
    color: "red",
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: "20px",
};

export default HomePage;
