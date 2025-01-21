import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Page from "./components/Page";
import RiskFactorProforma from "./components/RiskFactorPerforma";
import RiskClassification from "./components/RiskClassification";
import StopBangQuestionnaire from "./components/StopBangQuestionnaire";
import ASAPhysicalStatusRisk from "./components/ASAPhysicalStatusRisk";
import ModifiedCapriniRiskAssessment from "./components/ModifiedCapriniRiskAssesment";
import StopBangScreening from "./components/StopBangScreening";
import WilsonsRiskScore from "./components/WilsonsRiskScore";
import MaskVentilationRiskFactors from "./components/MaskVentilationRiskFactors";
import FacemaskSGARisk from "./components/FacemaskSGARisk";
import RiskForSGAFailure from "./components/RiskForSGAFailure";
import ModifiedEarlyWarningSOFAScores from "./components/ModifiedEarlyWarningSOFAScores";
import MetabolicEquivalents from "./components/MetabolicEquivalents";
import DukesActivitySpecificIndex from "./components/DukesActivitySpecificIndex";
import RevisedCardiacRiskIndex from "./components/RevisedCardiacRiskIndex";
import CHA2DS2VAScScore from "./components/CHA2DS2VAScScore";
import CHA2DS2VAScAssessmentAF from "./components/CHAD2DS2VAScAssessmentAF";
import H2PEFScore from "./components/H2PEFScore";
import MajorBleedingRisk from "./components/MajorBleedingRisk";
import ECGRecommendations from "./components/ECGRecommendations";
import ECHORecommendations from "./components/ECHORecommendations";
import CARPREGSystem from "./components/CARPREGSystem";
import ZAHARASystem from "./components/ZAHARASystem";
import ArozullahIndex from "./components/ArozullahIndex";
import DyspneaScale from "./components/DyspneaScale";
import BedsidePFTs from "./components/BedsidePFTs";
import ThreeLeggedStool from "./components/ThreeLeggedStool";
import ThoracicSurgeryFlowchart from "./components/ThoracicSurgeryFlowchart";
import PreoperativeReintubationRisk from "./components/PreoperativeReintubationRisk";
import PulmonaryComplicationsClassification from "./components/PlumonaryComplicationsClassification";
import PreoperativeRespiratoryPredictors from "./components/PreoperativeRespiratoryPredictors";

const pages = [
    { name: "Risk Factor Proforma", tags: ["general"] },
    { name: "John Hopkins Risk Classification", tags: ["risk"] },
    { name: "STOP Bang Questionnaire", tags: ["risk", "obesity"] },
    { name: "ASA Physical Status Risk", tags: ["asa", "risk"] },
    { name: "Modified CAPRINI Risk Assessment", tags: ["dvt", "risk"] },
    { name: "STOP Bang Screening for Sleep Apnea", tags: ["sleep-apnea", "risk"] },
    { name: "Wilsons Risk Score", tags: ["airway", "risk"] },
    { name: "Mask Ventilation Risk Factors", tags: ["ventilation", "risk"] },
    { name: "Facemask and SGA Failure Risks", tags: ["facemask", "sga", "risk"] },
    { name: "Risk for SGA Failure", tags: ["sga", "failure", "risk"] },
    { name: "Modified Early Warning SOFA Scores", tags: ["mews", "sofa", "risk"] },
    { name: "Metabolic Equivalents of Functional Capacity", tags: ["mets", "cardio", "risk"] },
    { name: "Dukes Activity Specific Index Questionnaire", tags: ["dasi", "index", "cardio"] },
    { name: "Revised Cardiac Risk Index", tags: ["rcri", "cardio", "risk"] },
    { name: "CHA2DS2 VASc Score", tags: ["chads2", "cardio", "risk"] },
    { name: "CHA2DS2-VASc Assessment and Treatment Plan for AF", tags: ["chads2", "treatment", "af"] },
    { name: "H2PEF Score in Unexplained Dyspnoea", tags: ["h2pef", "dyspnoea", "cardio"] },
    { name: "Major Bleeding Risk with Anticoagulants", tags: ["bleeding", "anticoagulants", "af"] },
    { name: "Do I Need to Ask for ECG", tags: ["ecg", "recommendation", "cardio"] },
    { name: "Do I Need to Ask for ECHO", tags: ["echo", "recommendation", "cardio"] },
    { name: "CARPREG System", tags: ["carpreg", "pregnancy", "cardio"] },
    { name: "ZAHARA System", tags: ["zahara", "pregnancy", "cardio"] },
    { name: "Arozullah Respiratory Failure Index", tags: ["respiratory", "risk", "failure"] },
    { name: "Dyspnea Scale", tags: ["dyspnea", "breathlessness", "scale"] },
    { name: "Bedside PFTs", tags: ["pfts", "pulmonary", "tests"] },
    { name: "Three legged stool", tags: ["thoracic", "surgery", "assessment"] },
    { name: "Flowchart for Thoracic Surgery Assessment", tags: ["thoracic", "surgery", "flowchart"] },
    { name: "Preoperative Reintubation Risk", tags: ["risk factors", "reintubation", "preoperative"] },
    { name: "Pulmonary Complications classification", tags: ["thoracic", "abdominal", "pulmonary", "risk"] },
    { name: "Preoperative Respiratory Predictors", tags: ["respiratory", "failures", "preoperative"] },

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
                    <Route path="/asa-physical-status-risk" element={<ASAPhysicalStatusRisk />} />
                    <Route path="/modified-caprini-risk-assessment" element={<ModifiedCapriniRiskAssessment />} />
                    <Route path="/stop-bang-screening-for-sleep-apnea" element={<StopBangScreening />} />
                    <Route path="/wilsons-risk-score" element={<WilsonsRiskScore />} />
                    <Route path="/mask-ventilation-risk-factors" element={<MaskVentilationRiskFactors />} />
                    <Route path="/facemask-and-sga-failure-risks" element={<FacemaskSGARisk />} />
                    <Route path="/risk-for-sga-failure" element={<RiskForSGAFailure />} />
                    <Route path="/modified-early-warning-sofa-scores" element={<ModifiedEarlyWarningSOFAScores />} />
                    <Route path="/metabolic-equivalents-of-functional-capacity" element={<MetabolicEquivalents />} />
                    <Route path="/dukes-activity-specific-index-questionnaire" element={<DukesActivitySpecificIndex />} />
                    <Route path="/revised-cardiac-risk-index" element={<RevisedCardiacRiskIndex />} />
                    <Route path="/cha2ds2-vasc-score" element={<CHA2DS2VAScScore />} />
                    <Route path="/cha2ds2-vasc-assessment-and-treatment-plan-for-af" element={<CHA2DS2VAScAssessmentAF />} />
                    <Route path="/h2pef-score-in-unexplained-dyspnoea" element={<H2PEFScore />} />
                    <Route path="/major-bleeding-risk-with-anticoagulants" element={<MajorBleedingRisk />} />
                    <Route path="/do-i-need-to-ask-for-ecg" element={<ECGRecommendations />} />
                    <Route path="/do-i-need-to-ask-for-echo" element={<ECHORecommendations />} />
                    <Route path="/carpreg-system" element={<CARPREGSystem />} />
                    <Route path="/zahara-system" element={<ZAHARASystem />} />
                    <Route path="/arozullah-respiratory-failure-index" element={<ArozullahIndex />} />
                    <Route path="/dyspnea-scale" element={<DyspneaScale />} />
                    <Route path="/bedside-pfts" element={<BedsidePFTs />} />
                    <Route path="/three-legged-stool" element={<ThreeLeggedStool />} />
                    <Route path="/flowchart-for-thoracic-surgery-assessment" element={<ThoracicSurgeryFlowchart />} />
                    <Route path="/preoperative-reintubation-risk" element={<PreoperativeReintubationRisk />} />
                    <Route path="/pulmonary-complications-classification" element={<PulmonaryComplicationsClassification />} />
                    <Route path="/preoperative-respiratory-predictors" element={<PreoperativeRespiratoryPredictors />} />

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