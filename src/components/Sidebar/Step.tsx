import { cn } from "../../utils/utils";

type StepProps = {
  stepNumber: number;
  text: string;
  currentStep: number;
};

const Step = ({ stepNumber, text, currentStep }: StepProps) => {
  return (
    <div className="flex gap-4 items-center">
      <p
        className={cn(
          "grid place-items-center rounded-full border text-white border-white size-10",
          {
            "bg-white text-primary":
              currentStep === stepNumber ||
              (currentStep === 5 && stepNumber === 4),
          }
        )}
      >
        <span className="font-semibold text-xl">{stepNumber}</span>
      </p>
      <div>
        <p className="text-gray-300 uppercase">Step {stepNumber}</p>
        <p className="uppercase text-white font-bold tracking-wider text-base">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Step;
