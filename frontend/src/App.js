import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import your components
import HomePage from './components/HomePage';
import ForumPage from './components/ForumPage';
import NuclearWar from './components/NuclearWar';
import ClimateChange from './components/ClimateChange';
import GlobalPandemics from './components/GlobalPandemics';
import ArtificialGeneralIntelligence from './components/ArtificialGeneralIntelligence';
import EcologicalCollapse from './components/EcologicalCollapse';
import AsteroidImpact from './components/AsteroidImpact';
import SupervolcanicEruption from './components/SupervolcanicEruption';


const App = () => {
  return (
    <Routes>
      {/* Homepage Route */}
      <Route path="/" element={<HomePage />} />
      
      {/* Forum Page Route */}
      <Route path="/forum" element={<ForumPage />} />
      
      {/* Subpages for each disaster with the /threat/ prefix */}
      <Route path="/threat/nuclear-war" element={<NuclearWar />} />
      <Route path="/threat/climate-change" element={<ClimateChange />} />
      <Route path="/threat/global-pandemics" element={<GlobalPandemics />} />
      <Route path="/threat/agi" element={<ArtificialGeneralIntelligence />} />
      <Route path="/threat/ecological-collapse" element={<EcologicalCollapse />} />
      <Route path="/threat/asteroid-impact" element={<AsteroidImpact />} />
      <Route path="/threat/supervolcanic-eruption" element={<SupervolcanicEruption />} />
      
    </Routes>
  );
};

export default App;
