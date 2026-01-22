import { ComponentPropsWithoutRef } from "react";

import {
  EyeIcon,
  LockIcon,
  MailIcon,
  UserIcon,
  PlusIcon,
  ArrowIcon,
  PencilIcon,
} from "@/components/ui/icons";

const FORM_INPUT_LEFT_ICONS = {
  eye: EyeIcon,
  lock: LockIcon,
  mail: MailIcon,
  user: UserIcon,
  empty: () => <></>,
} as const;

const FORM_INPUT_RIGHT_ICONS = {
  eye: EyeIcon,
  lock: LockIcon,
  mail: MailIcon,
  plus: PlusIcon,
  arrow: ArrowIcon,
  pencil: PencilIcon,
  empty: () => <></>,
} as const;

type IconLeft = keyof typeof FORM_INPUT_LEFT_ICONS;
type IconRight = keyof typeof FORM_INPUT_RIGHT_ICONS;

type FormInputProps = ComponentPropsWithoutRef<"input"> & {
  iconLeft: IconLeft;
  type: "text" | "email" | "password";
  placeholder: string;
  iconRight: IconRight;
};

function FormInput({ iconLeft, type, placeholder, iconRight }: FormInputProps) {
  const IconLeft = FORM_INPUT_LEFT_ICONS[iconLeft];
  const IconRight = FORM_INPUT_RIGHT_ICONS[iconRight];

  return (
    <div className="centerBetween font-secondary font-normal text-[16px] bg-bg-input text-primary-input p-4 border border-border-input rounded-2xl placeholder:text-primary-input focus-within:ring-2 focus-within:ring-border-focus">
      <div className="flex items-center gap-4">
        <IconLeft />
        <input
          className="outline-none"
          type={type}
          placeholder={placeholder}
        ></input>
      </div>
      <IconRight />
    </div>
  );
}

export default FormInput;
