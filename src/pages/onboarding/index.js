import Onboarding from '../../src/components/onBoarding';
import StepProgressBar from '../../components/onBoarding/StepProgressBar/StepProgressBar';
import PersonalInformation from '../../components/onBoarding/PersonalInformation/PersonalInformation';
import BusinessDetail from '../../components/onBoarding/BusinessDetail/BusinessDetail';
import LinkAccount from '../../components/onBoarding/LinkAccount/LinkAccount';
import Head from 'next/head';
import { useState } from 'react';
// import Onboarding from '@/components/onBoarding';
const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div>
      <Head>
        <title>OnBoarding | Unibazar</title>
        <meta name="description" content="Unibazar is online platform which is used to sell your products from various E-commerce platforms." key="desc" />
      </Head>

      <div className="container mx-auto p-4 flex flex-col items-center overflow-x-hidden">
        {currentStep >= 1 && (
          <StepProgressBar currentStep={currentStep} setCurrentStep={setCurrentStep} nxt={nextStep} />
        )}


        {/* Conditionally Render the Onboarding Steps */}

        {currentStep === 0 && <Onboarding nxt={nextStep} />}
        {currentStep === 1 && <PersonalInformation onNext={nextStep} nxt={nextStep} />}
        {currentStep === 2 && <BusinessDetail onNext={nextStep} onPrev={prevStep} nxt={nextStep} />}
        {currentStep === 3 && <LinkAccount onNext={nextStep} onPrev={prevStep} />}
      </div>
    </div>

  );
};

export default OnboardingPage;