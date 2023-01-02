import React from "react";
import { MouseEvent } from "react";
import clsx from "clsx";

type Props = {
  className?: string;
  underlineColor?: string;
  textColor?: string;
  link?: {
    href: string;
    onClick(event: MouseEvent): void;
    target?: "_self" | "_blank";
  };
  buttonText?: string;
};

export function UnderlineLink({
  className,
  underlineColor,
  textColor,
  link,
  buttonText,
}: Props) {
  return (
    <div className={className}>
      <a
        {...link}
        className={
          "relative font-['Mortend'] font-extrabold text-md sm:text-2xl lg:text-3xl uppercase py-2 z-0 after:absolute after:inset-x-0 after:-bottom-1 sm:after:-bottom-2 after:top-full after:bg-[var(--underline-color)] after:-z-10 after:pointer-events-none after:transition-all hover:after:top-[40%] hover:after:bottom-1"
        }
        style={{ "--underline-color": underlineColor } as React.CSSProperties}
      >
        <span style={{ color: textColor }}>{buttonText}</span>
      </a>
    </div>
  );
}
