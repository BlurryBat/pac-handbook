import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");
    const location = useLocation();

    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    const isHomePage = location.pathname === "/";

    return (
        <header style={headerStyle}>
            <div>
                <Link to="/" style={titleStyle}>
                    PAC Handbook
                </Link>
            </div>
            {isHomePage && (
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleInputChange}
                    style={searchBarStyle}
                />
            )}
        </header>
    );
}

const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#282c34",
    color: "white",
};

const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "none",
    color: "white",
};

const searchBarStyle = {
    padding: "5px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
};

export default Header;