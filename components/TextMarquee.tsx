import React from "react";
import { MouseEvent } from "react";

type Props = {
  className?: string;
  text?: string;
  textColor?: string;
  hoverBackground?: string;
  link?: {
    href: string;
    onClick(event: MouseEvent): void;
    target?: "_self" | "_blank";
  };
};

export function TextMarquee({
  className,
  link,
  text,
  textColor,
  hoverBackground,
}: Props) {
  const marqueeContainer = (
    <div
      className="min-w-full flex flex-[0_0_auto] items-center animate-[marqueeScroll_20s_linear_infinite] transition group-hover:!text-black"
      style={{ color: textColor }}
    >
      <div className="translate-y-[5%]">{text}</div>
    </div>
  );

  return (
    <a {...link} className={className}>
      <div className="group w-full min-h-[40px] relative flex flex-row items-center overflow-hidden py-6 md:py-8">
        <div
          className="absolute inset-0 scale-y-0 origin-bottom transition-transform group-hover:scale-y-100"
          style={{ background: hoverBackground }}
        ></div>
        {marqueeContainer}
        {marqueeContainer}
      </div>
    </a>
  );
}
