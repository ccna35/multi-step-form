import Header from "../../Header";
import { StepProps } from "../../../../App";
import { cn } from "../../../../utils/utils";
import { addOnList, planList } from "../../../../constants/constants";

const StepFour = ({ getValues, currentStep, setCurrentStep }: StepProps) => {
  // Plan's original monthly price
  const planPrice = planList.filter(
    (plan) => plan.planName === getValues().plan
  )[0]?.price;

  // Plan's price if monthly or yearly
  const planPriceAfter = getValues().billingOption ? planPrice * 10 : planPrice;

  const userAddOnList = addOnList.filter((addon) =>
    getValues().addOns?.includes(addon.title)
  );

  const totalPrice = userAddOnList.reduce(
    (prevValue, currentValue) => prevValue + currentValue.price,
    planPriceAfter
  );

  return (
    <>
      <Header
        headline="Finishing up"
        subHeadline="Double-check everything looks OK before confirming."
      />

      {/* Order summary */}
      <div>
        <div className="flex flex-col gap-4 bg-gray-100 p-6 rounded-lg divide-y">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-1 items-start">
              <p className="text-primary font-bold">
                <span className="capitalize">{getValues().plan}</span> (
                {getValues().billingOption ? "Yearly" : "Monthly"})
              </p>
              <button
                type="button"
                className="text-gray-400 underline"
                onClick={() => setCurrentStep((prev) => prev - 2)}
              >
                Change
              </button>
            </div>
            <p className="text-primary font-bold">${planPriceAfter}/mo</p>
          </div>
          <div className="pt-4 flex flex-col gap-4">
            {userAddOnList.map(({ title, price }) => {
              return (
                <div className="flex justify-between" key={title}>
                  <p className="text-gray-400 text-sm capitalize">{title}</p>
                  <p className="text-primary">
                    +${getValues().billingOption ? price * 10 : price}/mo
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between p-6">
          <p className="text-gray-400 text-sm">
            Total (per {getValues().billingOption ? "year" : "month"})
          </p>
          <p className="text-indigo-500 font-bold text-xl">
            ${totalPrice}/{getValues().billingOption ? "yr" : "mo"}
          </p>
        </div>
      </div>

      <div
        className={cn("flex justify-between items-center", {
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

        {currentStep === 4 && (
          <button
            type="button"
            className="rounded-md bg-primary text-white px-4 py-2"
            onClick={() => setCurrentStep((prev) => prev + 1)}
          >
            Confirm
          </button>
        )}
      </div>
    </>
  );
};

export default StepFour;
