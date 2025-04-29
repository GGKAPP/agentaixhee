import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ChallengeSection from './components/ChallengeSection';
import ProblemStatements from './components/ProblemStatements';
import RequirementsSection from './components/RequirementsSection';
import EvaluationParameters from './components/EvaluationParameters';
import TimelineSection from './components/TimelineSection';
import PrizesSection from './components/PrizesSection';
import SubmissionGuidelines from './components/SubmissionGuidelines';
import WinnersSection from './components/WinnersSection';
import JudgesSection from './components/JudgesSection';
import AdditionalInfoSection from './components/AdditionalInfoSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { SignupProvider } from './context/SignupContext';

function App() {
  return (
    <SignupProvider>
      <div className="min-h-screen bg-light">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ChallengeSection />
          <ProblemStatements />
          <RequirementsSection />
          <EvaluationParameters />
          <TimelineSection />
          <PrizesSection />
          <SubmissionGuidelines />
          <WinnersSection />
          <JudgesSection />
          <AdditionalInfoSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </SignupProvider>
  );
}

export default App;