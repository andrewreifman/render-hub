import React from "react";
import clsx from "clsx";
import { MouseEvent } from "react";
import Image from "next/future/image";

type Link = {
  linkImage?: { url: string; dimensions: { width: number; height: number } };
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
        "group fixed right-0 bottom-0 px-5 sm:px-8 py-8 z-30 flex flex-col items-end gap-4 sm:gap-5 pointer-events-none"
      )}
    >
      {links.map((link, i) => {
        if (link.linkImage == null) return;

        return (
          <a
            {...link.linkUrl}
            key={i}
            className="relative w-6 h-6 transition-transform hover:scale-125 pointer-events-auto"
          >
            {link.linkImage ? (
              <Image
                src={link.linkImage.url}
                alt={link.linkAlt}
                fill
                priority={true}
                className="object-contain object-center"
              />
            ) : (
              <div></div>
            )}
          </a>
        );
      })}
    </div>
  );
}
