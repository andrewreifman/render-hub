import React, { ReactNode } from "react";
import { LinkValue } from "@makeswift/runtime/prop-controllers";
import clsx from "clsx";
import { MouseEvent } from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/future/image";

type Props = {
  className?: string;
  image?: { url: string; dimensions: { width: number; height: number } };
  imageAlt: string;
  children?: ReactNode;
  link?: {
    href: string;
    onClick(event: MouseEvent): void;
    target?: "_self" | "_blank";
  };
};

export function Hero({ className, image, imageAlt, children, link }: Props) {
  const animatedGrid = (
    <div className="w-[150%] h-[240px] sm:h-[400px] lg:h-[500px] [perspective:180px] sm:[perspective:300px] relative left-1/2 [transform:translateX(-50%)]">
      <div className="w-full h-full [transform:rotateX(60deg)] origin-bottom overflow-hidden [-webkit-mask-image:radial-gradient(ellipse_at_bottom,black_40%,transparent_70%) [mask-image:radial-gradient(ellipse_at_bottom,black_40%,transparent_70%)]">
        <div className=" w-full h-[200%] bg-[linear-gradient(to_right,#FF00BA_1px,transparent_0),linear-gradient(to_bottom,#FF00BA_1px,transparent_0)] bg-[size:240px_100px] bg-bottom bg-repeat origin-bottom animate-[animateGrid_10s_linear_infinite]"></div>
      </div>
    </div>
  );

  return (
    <div
      className={clsx(
        className,
        "w-full h-screen [min-height:-webkit-fill-available] relative border-b border-[#FF00BA]"
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
        <div className="w-[95vw] max-w-[1100px] h-[80vh] absolute top-1/2 left-1/2 origin-center [transform:translate3d(-50%,-50%,-100px)] -z-10">
          {image != null && (
            <Image
              src={image.url}
              alt={imageAlt}
              fill
              priority={true}
              className="object-contain object-center"
            />
          )}
        </div>
        {children}
      </Tilt>
      <a
        {...link}
        className="flex justify-center absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 sm:w-16 h-12 sm:h-16 before:w-[3px] sm:before:w-1 before:h-12 sm:before:h-16 before:bg-white before:block before:transition-all before:origin-top after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1 after:w-6 sm:after:w-8 after:h-6 sm:after:h-8 after:border-b-[3px] sm:after:border-b-4 after:border-r-[3px] sm:after:border-r-4 border-white after:rotate-45 after:transition-all hover:before:h-16 sm:hover:before:h-[76px] hover:after:translate-y-2"
      ></a>
    </div>
  );
}
