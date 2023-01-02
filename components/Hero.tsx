import React, { ReactNode } from "react";
import clsx from "clsx";
import { MouseEvent } from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

type ImageWithDimensions = {
  url: string;
  dimensions: {
    width: number;
    height: number;
  };
};

type Props = {
  className?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
  link?: {
    href: string;
    onClick(event: MouseEvent): void;
    target?: "_self" | "_blank";
  };
};

export function Hero({ className, image, imageAlt, children, link }: Props) {
  const animatedGrid = (
    <div className="w-full h-[200px] sm:h-[400px] overflow-hidden [perspective:150px] sm:[perspective:300px] [-webkit-mask-image:radial-gradient(ellipse_at_bottom,black_40%,transparent_70%) [mask-image:radial-gradient(ellipse_at_bottom,black_40%,transparent_70%)]">
      <div className=" w-full h-[200%] bg-[linear-gradient(to_right,#FF00BA_.5px,transparent_0),linear-gradient(to_bottom,#FF00BA_.5px,transparent_0)] bg-[size:36px_16px] bg-top bg-repeat origin-top animate-[animateGrid_30s_linear_infinite]"></div>
    </div>
  );

  return (
    <div
      className={clsx(
        className,
        "w-full h-[100vh] relative bg-[radial-gradient(circle_closest-side,rgba(255,0,186,0.75),rgba(255,0,186,0.25),rgba(255,0,186,0))] border-b-2 border-[#FF00BA]"
      )}
    >
      <div className="w-full absolute top-0 inset-x-0 [transform:rotateX(180deg)]">
        {animatedGrid}
      </div>
      <div className="w-full absolute bottom-0 inset-x-0">{animatedGrid}</div>

      <Tilt
        trackOnWindow={true}
        tiltReverse={true}
        className="relative w-full h-full flex flex-col justify-center [transform-style:preserve-3d]"
      >
        <img
          src={image}
          alt={imageAlt}
          className="w-[90vw] max-w-[1100px] absolute top-1/2 left-1/2 origin-center [transform:translate3d(-50%,-50%,-100px)] -z-10"
        />
        {children}
      </Tilt>

      <a
        {...link}
        className="flex justify-center absolute bottom-1 sm:bottom-6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 sm:w-20 h-12 sm:h-20 before:w-[3px] sm:before:w-1 before:h-12 sm:before:h-20 before:bg-white before:block before:transition-all before:origin-top after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1 after:w-6 sm:after:w-8 after:h-6 sm:after:h-8 after:border-b-[3px] sm:after:border-b-4 after:border-r-[3px] sm:after:border-r-4 border-white after:rotate-45 after:transition-all hover:before:h-16 sm:hover:before:h-24 hover:after:translate-y-3.5"
      ></a>
    </div>
  );
}
