import { OptionProps } from "../components/Right Side/Steps/StepThree/StepThree";
import { PlanList } from "../components/Right Side/Steps/StepTwo/StepTwo";

export const planList: PlanList[] = [
  { img: "./icon-arcade.svg", planName: "arcade", price: 9 },
  { img: "./icon-advanced.svg", planName: "advanced", price: 12 },
  { img: "./icon-pro.svg", planName: "pro", price: 15 },
];

export const addOnList: Omit<OptionProps, "register">[] = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    price: 1,
  },
  { title: "Larger storage", description: "Extra 1TB of cloud save", price: 2 },
  {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: 2,
  },
];
