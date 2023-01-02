import React from "react";
import clsx from "clsx";
import { MouseEvent } from "react";
import Image from "next/future/image";

type ImageWithDimensions = {
  url: string;
  dimensions: {
    width: number;
    height: number;
  };
};

type Link = {
  linkImage: ImageWithDimensions[];
  linkAlt: string;
  linkUrl?: {
    href: string;
    onClick(event: MouseEvent): void;
    target?: "_self" | "_blank";
  };
};

type Props = {
  className?: string;
  links: Link[];
};

export function StickySocialLinks({ className, links }: Props) {
  if (links.length === 0) return <p>There are no links</p>;

  return (
    <div
      className={clsx(
        className,
        "group fixed right-0 bottom-0 px-5 sm:px-8 py-8 z-30 box-content flex flex-col justify-center gap-4 sm:gap-5"
      )}
    >
      {links.map((link, index, linkUrl) => {
        if (link.linkImage == null) return <div></div>;

        return (
          <a
            {...linkUrl}
            key={index}
            className="relative w-6 h-6 transition-transform hover:scale-125"
          >
            <Image
              src={link.linkImage.url}
              alt={link.linkAlt}
              fill
              className="object-contain object-center"
            />
          </a>
        );
      })}
    </div>
  );
}
