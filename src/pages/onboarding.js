import Onboarding from '@/components/Onboarding/Onboarding';
import StepProgressBar from '@/components/Onboarding/Step-progressBar';
import PersonalInformation from '@/components/Onboarding/Personal-information';
import BusinessDetail from '@/components/Onboarding/Business-detail';
import LinkAccount from '@/components/Onboarding/Link-account';
import { useState } from 'react';
const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="container mx-auto p-4 flex flex-col items-center overflow-x-hidden">
      <StepProgressBar currentStep={currentStep} setCurrentStep={setCurrentStep} nxt={nextStep} />

      {/* Conditionally Render the Onboarding Steps */}

      {currentStep === 1 && <Onboarding nxt={nextStep} />}
      {currentStep === 2 && <PersonalInformation onNext={nextStep} nxt={nextStep} />}
      {currentStep === 3 && <BusinessDetail onNext={nextStep} onPrev={prevStep} nxt={nextStep} />}
      {currentStep === 4 && <LinkAccount onNext={nextStep} onPrev={prevStep} nxt={nextStep} />}
    </div>
  );
};

export default OnboardingPage;
