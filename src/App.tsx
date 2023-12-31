import {
  FieldErrors,
  SubmitHandler,
  UseFormGetValues,
  UseFormRegister,
  UseFormTrigger,
  UseFormWatch,
  useForm,
} from "react-hook-form";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";
import StepOne from "./components/Right Side/Steps/StepOne/StepOne";
import StepTwo from "./components/Right Side/Steps/StepTwo/StepTwo";
import StepThree from "./components/Right Side/Steps/StepThree/StepThree";
import StepFour from "./components/Right Side/Steps/StepFour/StepFour";
import Confirmation from "./components/Right Side/Confirmation/Confirmation";

enum PlanEnum {
  arcade = "arcade",
  advanced = "advanced",
  pro = "pro",
}

export type Inputs = {
  name: string;
  email: string;
  phoneNumber: number;
  plan: PlanEnum;
  billingOption: boolean; // Yearly if true, monthly if false
  addOns?: "Online service" | "Larger storage" | "Customizable profile";
};

export type StepProps = {
  getValues: UseFormGetValues<Inputs>;
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  trigger: UseFormTrigger<Inputs>;
  watch?: UseFormWatch<Inputs>;
};

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const {
    register,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors },
    watch,
  } = useForm<Inputs>({ mode: "onChange" });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <main className="bg-bgColor">
      <section>
        <div className="min-h-screen container grid place-items-center">
          <div className="bg-white p-4 max-w-4xl grid grid-cols-3 gap-8 rounded-2xl shadow-md">
            <Sidebar currentStep={currentStep} />
            <div className="form py-8 px-16 col-span-2">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-8"
                noValidate
              >
                {currentStep === 1 && (
                  <StepOne
                    register={register}
                    errors={errors}
                    getValues={getValues}
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    trigger={trigger}
                  />
                )}

                {currentStep === 2 && (
                  <StepTwo
                    register={register}
                    errors={errors}
                    getValues={getValues}
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    trigger={trigger}
                    watch={watch}
                  />
                )}

                {currentStep === 3 && (
                  <StepThree
                    register={register}
                    errors={errors}
                    getValues={getValues}
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    trigger={trigger}
                  />
                )}

                {currentStep === 4 && (
                  <StepFour
                    register={register}
                    errors={errors}
                    getValues={getValues}
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    trigger={trigger}
                  />
                )}

                {currentStep === 5 && <Confirmation />}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
