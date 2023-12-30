import Header from "../../Header";
import Input from "../../Inputs/Input";
import { StepProps } from "../../../../App";
import { cn } from "../../../../utils/utils";

const StepOne = ({
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
        headline="Personal info"
        subHeadline="Please provide your name, email address, and phone number."
      />

      {/* Input fields */}
      <div className="flex flex-col gap-4">
        {/* Get name */}
        <Input
          label="Name"
          type="text"
          defaultValue={getValues().name}
          fieldName="name"
          register={register("name", {
            required: "This field is required",
            maxLength: 40,
            minLength: 3,
          })}
          errors={errors}
        />

        {/* Get email */}
        <Input
          label="Email Address"
          type="email"
          defaultValue={getValues().email}
          fieldName="email"
          register={register("email", {
            required: "This field is required",
            maxLength: 40,
            minLength: 3,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email!",
            },
          })}
          errors={errors}
        />

        {/* Get phone number */}
        <Input
          label="Phone Number"
          type="number"
          defaultValue={getValues().phoneNumber}
          fieldName="phoneNumber"
          register={register("phoneNumber", {
            required: "This field is required",
            validate: {
              allowedLength: (value) => {
                return (
                  (value.toString().length >= 5 &&
                    value.toString().length <= 40) ||
                  "Number must be between 5 & 40"
                );
              },
            },
          })}
          errors={errors}
        />
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
                const result = await trigger(["name", "email", "phoneNumber"]);
                console.log(result);

                if (result) setCurrentStep((prev) => prev + 1);
              }}
            >
              Next Step
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default StepOne;
