import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Page from "./components/Page";
import RiskFactorProforma from "./components/RiskFactorPerforma";
import RiskClassification from "./components/RiskClassification";
import StopBangQuestionnaire from "./components/StopBangQuestionnaire";

const pages = [
    { name: "Risk Factor Proforma", tags: ["general"] },
    { name: "John Hopkins Risk Classification", tags: ["risk"] },
    { name: "STOP Bang Questionnaire", tags: ["risk", "obesity"] },
];

function App() {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (query) => {
        const results = pages.filter(
            (page) =>
                page.name.toLowerCase().includes(query.toLowerCase()) ||
                page.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
        );
        setSearchResults(results);
    };

    return (
        <Router basename="/pac-handbook">
            <div>
                <Header onSearch={handleSearch} />
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage pages={pages} searchResults={searchResults} />}
                    />
                    <Route path="/risk-factor-proforma" element={<RiskFactorProforma />} />
                    <Route path="/john-hopkins-risk-classification" element={<RiskClassification />} />
                    <Route path="/stop-bang-questionnaire" element={<StopBangQuestionnaire />} />
                    {pages.map((page, index) => (
                        <Route
                            key={index}
                            path={`/${page.name.toLowerCase().replace(/\s+/g, "-")}`}
                            element={<Page name={page.name} tags={page.tags} />}
                        />
                    ))}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;