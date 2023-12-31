import Header from "../../Header";
import { Inputs, StepProps } from "../../../../App";
import { cn } from "../../../../utils/utils";
import { UseFormGetValues, UseFormRegisterReturn } from "react-hook-form";
import { planList } from "../../../../constants/constants";

export type PlanList = {
  img: string;
  planName: "arcade" | "advanced" | "pro";
  price: 9 | 12 | 15;
};

type OptionProps = {
  register: UseFormRegisterReturn;
  img: string;
  planName: "arcade" | "advanced" | "pro";
  price: 9 | 12 | 15;
  billingOption: boolean | undefined;
  getValues: UseFormGetValues<Inputs>;
};

const Option = ({
  register,
  img,
  planName,
  price,
  billingOption,
  getValues,
}: OptionProps) => {
  return (
    <div className="relative border rounded-lg hover:border-indigo-600 p-4 has-[:checked]:bg-indigo-50 has-[:checked]:border-indigo-600">
      <input
        type="radio"
        id={planName}
        value={planName}
        {...register}
        hidden
        className="checked:group-checkbox:border"
        defaultChecked={getValues().plan === planName}
      />
      <label
        htmlFor={planName}
        className="flex flex-col gap-8 cursor-pointer relative"
      >
        <img src={img} className="size-8" alt={planName} />
        <span className="flex flex-col gap-1">
          <span className="font-bold text-primary text-sm capitalize">
            {planName}
          </span>
          <span className="text-gray-400 text-xs">
            ${billingOption ? price * 10 : price}/mo
          </span>
          {billingOption && (
            <span className="text-primary font-medium text-xs">
              2 months free
            </span>
          )}
        </span>
      </label>
    </div>
  );
};

const StepTwo = ({
  errors,
  register,
  currentStep,
  setCurrentStep,
  trigger,
  watch,
  getValues,
}: StepProps) => {
  const billingOption = watch && watch("billingOption");

  return (
    <>
      <Header
        headline="Select your plan"
        subHeadline="You have the option of monthly or yearly billing."
      />

      {/* Plan options */}
      <div className="grid grid-cols-3 gap-4">
        {planList.map(({ price, img, planName }) => {
          return (
            <Option
              key={price}
              img={img}
              planName={planName}
              price={price}
              register={register("plan", {
                required: "You must choose at least one!",
              })}
              billingOption={billingOption}
              getValues={getValues}
            />
          );
        })}
      </div>

      {/* Select billing option */}
      <div className="flex gap-2 items-center py-2 justify-center bg-gray-100 rounded-lg">
        <p
          className={cn("", {
            "font-bold": !billingOption,
          })}
        >
          Monthly
        </p>
        <label
          className="w-12 h-6 bg-primary rounded-full p-1 flex cursor-pointer"
          htmlFor="billingOption"
        >
          <input
            id="billingOption"
            type="checkbox"
            {...register("billingOption")}
            hidden
            className="peer"
          />
          <span className="block size-4 rounded-full bg-white my-auto transition-all duration-500 peer-checked:translate-x-6" />
        </label>

        <p
          className={cn("", {
            "font-bold": billingOption,
          })}
        >
          Yearly
        </p>
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

export default StepTwo;
