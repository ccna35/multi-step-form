import { InputHTMLAttributes } from "react";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import { Inputs } from "../../../App";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  errors: FieldErrors<Inputs>;
  fieldName: keyof Inputs;
  label: string;
}

const Input = ({ register, errors, fieldName, label, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <label htmlFor={fieldName} className="font-semibold text-sm">
          {label}
        </label>
        {errors[fieldName] && (
          <span className="text-sm text-red-500 font-bold">
            {errors[fieldName]?.message}
          </span>
        )}
      </div>
      <input
        {...register}
        {...rest}
        className="rounded-md border p-2 border-gray-300 focus:outline-gray-500"
      />
    </div>
  );
};

export default Input;
