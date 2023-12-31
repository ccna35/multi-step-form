import Header from "../../Header";
import { StepProps } from "../../../../App";
import { cn } from "../../../../utils/utils";
import { UseFormRegisterReturn } from "react-hook-form";
import { addOnList } from "../../../../constants/constants";

export type OptionProps = {
  register: UseFormRegisterReturn;
  title: "Online service" | "Larger storage" | "Customizable profile";
  description: string;
  price: 1 | 2;
};

const Option = ({ register, description, price, title }: OptionProps) => {
  return (
    <label
      htmlFor={title}
      className="flex justify-between gap-8 items-center cursor-pointer border rounded-lg hover:border-indigo-600 p-4 has-[:checked]:bg-indigo-50 has-[:checked]:border-indigo-600"
    >
      <input
        type="checkbox"
        id={title}
        value={title}
        {...register}
        className=""
      />
      <div className="flex flex-col gap-8">
        <span className="flex flex-col gap-1">
          <span className="font-bold text-primary text-sm capitalize">
            {title}
          </span>
          <span className="text-gray-400 text-xs">{description}</span>
        </span>
      </div>
      <span className="text-indigo-500 text-xs ml-auto">+${price}/mo</span>
    </label>
  );
};

const StepThree = ({
  getValues,
  errors,
  register,
  currentStep,
  setCurrentStep,
  trigger,
}: StepProps) => {
  return (
    <>
      <Header
        headline="Pick add-ons"
        subHeadline="Add-ons help enhance your gaming experience."
      />

      {/* Addon options */}
      <div className="flex flex-col gap-4">
        {addOnList.map(({ title, description, price }) => {
          return (
            <Option
              key={title}
              description={description}
              register={register("addOns")}
              title={title}
              price={price}
            />
          );
        })}
      </div>

      <div
        className={cn("mt-16 flex justify-between items-center", {
          "justify-end": currentStep === 1,
        })}
      >
        {currentStep !== 1 && (
          <button
            type="button"
            className="text-indigo-700 font-semibold py-2"
            onClick={() => setCurrentStep((prev) => prev - 1)}
          >
            Go back
          </button>
        )}

        {currentStep !== 4 && (
          <button
            type="button"
            className="rounded-md bg-indigo-700 text-white px-4 py-2"
            onClick={async () => {
              const result = await trigger(["plan", "billingOption"]);
              console.log(result);
              console.log(errors);

              if (result) setCurrentStep((prev) => prev + 1);
            }}
          >
            Next Step
          </button>
        )}
      </div>
    </>
  );
};

export default StepThree;
