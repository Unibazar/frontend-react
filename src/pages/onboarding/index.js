// import Onboarding from '../../../src/components/onBoarding';
// import Onboarding from '../../components/onBoarding/OnBoarding/OnBoarding';

// import StepProgressBar from '../../components/onBoarding/StepProgressBar/StepProgressBar';
// import PersonalInformation from '../../components/onBoarding/PersonalInformation/PersonalInformation';
// import BusinessDetail from '../../components/onBoarding/BusinessDetail/BusinessDetail';
// import LinkAccount from '../../components/onBoarding/LinkAccount/LinkAccount';
import Head from 'next/head';
import { useState } from 'react';
// import OnboardingScreen from '../../components/onBoarding/OnboardingScreen/OnboardingScreen'
import StepProgressBar from '../../components/OnBoardScreen/StepProgressBar/StepProgressBar';
import OnboardingScreen from '../../components/OnBoardScreen/OnboardingScreen/OnboardingScreen';
import PersonalInformation from '../../components/OnBoardScreen/PersonalInformation/PersonalInformation';
import BusinessDetail from '../../components/OnBoardScreen/BusinessDetail/BusinessDetail';
import LinkAccount from '../../components/OnBoardScreen/LinkAccount/LinkAccount';
// import Onboarding from '@/components/onBoarding';
//onboarding screen
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
        {currentStep >= 1 && <StepProgressBar currentStep={currentStep} setCurrentStep={setCurrentStep} nxt={nextStep} />}

        {/* Conditionally Render the Onboarding Steps */}

        {currentStep === 0 && <OnboardingScreen nxt={nextStep} />}
        {currentStep === 1 && <PersonalInformation onNext={nextStep} nxt={nextStep} />}
        {currentStep === 2 && <BusinessDetail onNext={nextStep} onPrev={prevStep} nxt={nextStep} />}
        {currentStep === 3 && <LinkAccount onNext={nextStep} onPrev={prevStep} />}
      </div>
    </div>
  );
};

export default OnboardingPage;
