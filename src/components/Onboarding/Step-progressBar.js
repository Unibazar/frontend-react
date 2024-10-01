const StepProgressBar = ({ currentStep, setCurrentStep }) => {
  const steps = ['Basic Details', 'Business Details', 'Link Your E-commerce Platforms', 'Complete'];

  const isStepCompleted = stepIndex => stepIndex < currentStep;
  const isStepActive = stepIndex => stepIndex === currentStep - 1;

  return (
    <div className="max-w-full w-[1000px] mt-7 max-[499px]:hidden">
      <div className="flex items-center justify-center w-full">
        <button onClick={() => setCurrentStep(prev => Math.max(prev - 1, 1))} className={`p-2 cursor-pointer`} disabled={currentStep === 1}>
          &lt;
        </button>
        <div className="flex items-center justify-between mx-2">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <span
                className={`font-medium transition-colors duration-300 max-lg:text-[12px] max-sm:text-[10px] 
                ${isStepCompleted(index) ? 'text-teal-700' : isStepActive(index) ? 'text-teal-500' : 'text-[rgba(13,_33,_49,_1)]'}`}
              >
                {step}
              </span>

              {index < steps.length - 1 && (
                <div
                  className={`w-[60px] h-[2px] mx-2 transition-colors duration-300 
                  ${isStepCompleted(index + 1) ? 'bg-teal-500' : 'bg-gray-300'}`}
                ></div>
              )}
            </div>
          ))}
        </div>

        <button onClick={() => setCurrentStep(prev => Math.min(prev + 1, steps.length))} className={`p-2  cursor-pointer`} disabled={currentStep === steps.length}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default StepProgressBar;
