import { MakeswiftApiHandler } from "@makeswift/runtime/next";

export default MakeswiftApiHandler(process.env.MAKESWIFT_SITE_API_KEY!, {
  getFonts: () => [
    {
      family: "Mortend",
      variants: [
        {
          weight: "300",
          style: "normal",
          src: "/fonts/Mortend-Light.woff2",
        },
        {
          weight: "800",
          style: "normal",
          src: "/fonts/Mortend-ExtraBold.woff2",
        },
      ],
    },
    {
      family: "Mortend Outline",
      variants: [
        {
          weight: "800",
          style: "normal",
          src: "/fonts/Mortend-ExtraBoldOutline.woff2",
        },
      ],
    },
  ],
});
