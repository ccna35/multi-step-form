import Step from "./Step";

const steps = [
  { stepNumber: 1, text: "Your info" },
  { stepNumber: 2, text: "Select Plan" },
  { stepNumber: 3, text: "Add-ons" },
  { stepNumber: 4, text: "Summary" },
];

type SidebarProps = {
  currentStep: number;
};

const Sidebar = ({ currentStep }: SidebarProps) => {
  return (
    <div className="sidebar p-8 rounded-md col-span-1 bg-sidebarBgImg bg-cover flex flex-col gap-8">
      {steps.map(({ stepNumber, text }) => {
        return (
          <Step
            key={stepNumber}
            stepNumber={stepNumber}
            text={text}
            currentStep={currentStep}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
