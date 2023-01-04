import React from "react";
import clsx from "clsx";
import { MouseEvent } from "react";

type Size = "small" | "large";

type Props = {
  className?: string;
  backgroundImage?: string;
  link?: {
    href: string;
    onClick(event: MouseEvent): void;
    target?: "_self" | "_blank";
  };
  text?: string;
  size: Size;
};

export function CaseStudyCard({
  className,
  backgroundImage,
  link,
  text,
  size,
}: Props) {
  return (
    <a
      {...link}
      className={clsx(
        className,
        {
          large:
            "h-64 sm:h-96 lg:h-[550px] text-3xl sm:text-6xl md:text-[80px]",
          small: "h-64 lg:h-96 text-3xl lg:text-5xl",
        }[size],
        "group relative w-full"
      )}
    >
      <div
        className="absolute block inset-0 bg-cover bg-center transition-all ease-out duration-300 group-hover:inset-5"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.1), rgba(0,0,0,.85)), url(${backgroundImage})`,
        }}
      ></div>
      <span
        className={clsx(
          {
            large:
              "-bottom-5 sm:-bottom-9 md:-bottom-12 left-5 sm:left-8 md:left-12",
            small: "-bottom-6 md:-bottom-8 left-5",
          }[size],
          "absolute inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-white bg-[size:100%_0%] bg-no-repeat bg-bottom transition-all duration-150 group-hover:bg-[size:100%_100%]"
        )}
      >
        <h3 className="w-9/12 inline-block uppercase leading-none text-stroke sm:text-stroke-2 text-stroke-white transition-all group-hover:text-stroke-transparent">
          {text}
        </h3>
      </span>
    </a>
  );
}
