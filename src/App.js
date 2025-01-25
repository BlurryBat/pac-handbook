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
import PreoperativeRespiratoryPredictors from "./components/PreoperativeRespiratoryPredictors";
import PulmonaryComplicationsClassification from "./components/PulmonaryComplicationsClassification";
import PostoperativePneumoniaRisk from "./components/PostoperativePneumoniaRisk";
import PreoperativeRespiratoryFailureRisk2007 from "./components/PreoperativeRespiratoryFailureRisk2007";
import AriscatPulmonaryRiskScoring from "./components/AriscatPulmonaryRiskScoring";
import ClinicalPulmonaryInfectionScore from "./components/ClinicalPulmonaryInfectionScore";
import BODEIndex from "./components/BODEIndex";
import GCS from "./components/GCS";
import RenalRiskEvaluation from "./components/RenalRiskEvaluation";
import HuntAndHessAndWFNSGrades from "./components/HuntAndHessAndWFNSGrades";
import RiskFactorsForAKIAndCKDClassification from "./components/RiskFactorsForAKIAndCKDClassification";
import ChildTurcottePughScoringSystem from "./components/ChildTurcottePughScoringSystem";
import CirrhosisSurgicalRiskScore from "./components/CirrhosisSurgicalRiskScore";
import FrailtyScale from "./components/FrailtyScale";
import MMSEInteractive from "./components/MMSE";
import CSHAFrailtyScale from "./components/CSHAFrailtyScale";
import FrailtyScreeningTools from "./components/FrailtyScreeningTools";
import CognitiveScreeningTools from "./components/CognitiveScreeningTools";
import FrailtyToolsAndScoringSystems from "./components/FrailtyToolsAndScoringSystems";
import OncosurgicalRiskAssessment from "./components/OncoSurgicalRiskAssessment";
import ECOGPerformanceStatusScale from "./components/ECOGPerformanceStatusScale";
import PreoperativeNutritionRiskScreening from "./components/PreoperativeNutritionRiskScreening";
import PONSNutritionCarePathway from "./components/PreoperativeNutritionCarePathway";
import PreoperativeManagementMedications from "./components/PreoperativeManagementMedications";
import AnticoagulationRisk from "./components/AntiCoagulationRisk";
import AnticoagulantsNeuraxialAnesthesia from "./components/AnticoagulantsNeuraxialAnesthesia";
import AnticoagulantManagement from "./components/AnticoagulantManagement";
import AnticoagulantRecommendations from "./components/AnticoagulantRecommendations";
import HeparinRecommendations from "./components/HeparinRecommendations";
import DOACConsensus from "./components/DOACConsensus";
import DOACConsensusUpdated from "./components/DOACConsensusUpdated";
import OrthopedicsRiskAssessment from "./components/OrthopedicsRiskAssessment";
import PsychotropicDrugGuidelines from "./components/PsychotropicDrugGuidelines";
import ISAInvestigationGuidelines from "./components/ISAInvestigationGuidelines";

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
    { name: "Postoperative Pneumonia Risk Index", tags: ["postoperative", "pneumonia", "risk"] },
    { name: "Preoperative Respiratory Failure Risk 2007", tags: ["preoperative", "respiratory failure", "risk", "2007"] },
    { name: "ARISCAT Pulmonary Risk Scoring", tags: ["ariscat", "pulmonary", "risk", "scoring"] },
    { name: "Clinical Pulmonary Infection Score", tags: ["cpis", "infection", "pulmonary", "score"] },
    { name: "The BODE Index", tags: ["bode", "mortality", "risk", "index"] },
    { name: "GCS", tags: ["gcs", "glasgow", "coma", "scale", "risk"] },
    { name: "Hunt Hess And WFNS Grades for SAH", tags: ["hunt and hess", "wfns", "sah", "neurology"] },
    { name: "Renal Risk Evaluation", tags: ["renal", "risk evaluation", "rifle", "akin", "kdigo", "aki"] },
    { name: "Risk Factors for AKI and CKD Classification", tags: ["aki", "ckd", "renal", "classification", "risk factors"] },
    { name: "Child-Turcotte Pugh Scoring System", tags: ["hepatic", "risk", "ctp", "child turcotte pugh"] },
    { name: "Cirrhosis Surgical Risk Score", tags: ["cirrhosis", "hepatic", "risk", "surgery", "MELD"] },
    { name: "Frailty Scale", tags: ["frailty", "dementia", "geriatric", "risk", "assessment"] },
    { name: "MMSE", tags: ["mmse", "cognitive", "assessment"] },
    { name: "CSHA Frailty Scale", tags: ["frailty", "geriatrics", "csha", "assessment"] },
    { name: "Frailty Screening Tools", tags: ["frailty", "screening", "geriatrics", "assessment"] },
    { name: "Cognitive Screening Tools", tags: ["cognitive", "screening", "assessment", "tools"] },
    { name: "Frailty Tools and Scoring Systems", tags: ["frailty", "tools", "scoring", "assessment"] },
    { name: "Oncosurgical Risk Assessment", tags: ["oncology", "risk", "checklist"] },
    { name: "ECOG Performance Status Scale", tags: ["ecog", "oncology", "performance", "status"] },
    { name: "Preoperative Nutrition Risk Screening", tags: ["nutrition", "risk", "screening", "preoperative"] },
    { name: "PONS Nutrition Care Pathway", tags: ["PONS", "nutrition", "preoperative", "care pathway"] },
    { name: "Preoperative Management of Medications", tags: ["preoperative", "medications", "surgery preparation"] },
    { name: "Anticoagulation Risk", tags: ["anticoagulants", "neuraxial anesthesia", "risk"] },
    { name: "Anticoagulants and Neuraxial Anesthesia", tags: ["anticoagulants", "neuraxial anesthesia", "risk", "regional anesthesia"] },
    { name: "Anticoagulant Management", tags: ["anticoagulants", "surgery", "guidelines", "tsoacs"] },
    { name: "Anticoagulant Recommendations", tags: ["anticoagulants", "recommendations", "guidelines"] },
    { name: "Heparin Recommendations", tags: ["heparin", "recommendations", "anticoagulation"] },
    { name: "DOAC Consensus", tags: ["doac", "anticoagulation", "preoperative"] },
    { name: "DOAC Consensus Updated", tags: ["doac", "anticoagulation", "preoperative", "bleeding risk"] },
    { name: "Orthopedics Risk Assessment", tags: ["orthopedics", "fat embolism", "diagnostic criteria", "risk assessment"] },
    { name: "Psychotropic Drug Guidelines", tags: ["antipsychotics", "perioperative", "psychotropic", "drug guidelines"] },
    { name: "ISA Practice Guidelines for Preoperative Investigations", tags: ["ISA", "preoperative", "investigations", "guidelines"] },


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
                    <Route path="/postoperative-pneumonia-risk-index" element={<PostoperativePneumoniaRisk />} />
                    <Route path="/preoperative-respiratory-failure-risk-2007" element={<PreoperativeRespiratoryFailureRisk2007 />} />
                    <Route path="/ariscat-pulmonary-risk-scoring" element={<AriscatPulmonaryRiskScoring />} />
                    <Route path="/clinical-pulmonary-infection-score" element={<ClinicalPulmonaryInfectionScore />} />
                    <Route path="/the-bode-index" element={<BODEIndex />} />
                    <Route path="/gcs" element={<GCS />} />
                    <Route path="/hunt-hess-and-wfns-grades-for-sah" element={<HuntAndHessAndWFNSGrades />} />
                    <Route path="/renal-risk-evaluation" element={<RenalRiskEvaluation />} />
                    <Route path="/risk-factors-for-aki-and-ckd-classification" element={<RiskFactorsForAKIAndCKDClassification />} />
                    <Route path="/child-turcotte-pugh-scoring-system" element={<ChildTurcottePughScoringSystem />} />
                    <Route path="/cirrhosis-surgical-risk-score" element={<CirrhosisSurgicalRiskScore />} />
                    <Route path="/frailty-scale" element={<FrailtyScale />} />
                    <Route path="/mmse" element={<MMSEInteractive />} />
                    <Route path="/csha-frailty-scale" element={<CSHAFrailtyScale />} />
                    <Route path="/frailty-screening-tools" element={<FrailtyScreeningTools />} />
                    <Route path="/cognitive-screening-tools" element={<CognitiveScreeningTools />} />
                    <Route path="/frailty-tools-and-scoring-systems" element={<FrailtyToolsAndScoringSystems />}/>
                    <Route path="/oncosurgical-risk-assessment" element={<OncosurgicalRiskAssessment />}/>
                    <Route path="/ecog-performance-status-scale" element={<ECOGPerformanceStatusScale />}/>
                    <Route path="/preoperative-nutrition-risk-screening" element={<PreoperativeNutritionRiskScreening />}/>
                    <Route path="/pons-nutrition-care-pathway" element={<PONSNutritionCarePathway />} />
                    <Route path="/preoperative-management-of-medications" element={<PreoperativeManagementMedications />} />
                    <Route path="/anticoagulation-risk" element={<AnticoagulationRisk />} />
                    <Route path="/anticoagulants-and-neuraxial-anesthesia" element={<AnticoagulantsNeuraxialAnesthesia />} />
                    <Route path="/anticoagulant-management" element={<AnticoagulantManagement />} />
                    <Route path="/anticoagulant-recommendations" element={<AnticoagulantRecommendations />} />
                    <Route path="/heparin-recommendations" element={<HeparinRecommendations />} />
                    <Route path="/doac-consensus" element={<DOACConsensus />} />
                    <Route path="/doac-consensus-updated" element={<DOACConsensusUpdated />} />
                    <Route path="/orthopedics-risk-assessment" element={<OrthopedicsRiskAssessment />} />
                    <Route path="/psychotropic-drug-guidelines" element={<PsychotropicDrugGuidelines />} />
                    <Route path="/isa-practice-guidelines-for-preoperative-investigations" element={<ISAInvestigationGuidelines />} />

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