import { ReactRuntime } from "@makeswift/runtime/react";
import {
  Style,
  Select,
  TextInput,
  Image,
  List,
  Shape,
  Number,
  Checkbox,
  Color,
  TextArea,
  Link,
  Slot,
} from "@makeswift/runtime/controls";
import { UnderlineLink } from "../../components/UnderlineLink";
import { CaseStudyCard } from "../../components/CaseStudyCard";
import { Hero } from "../../components/Hero";
import { TextMarquee } from "../../components/TextMarquee";
import { StickySocialLinks } from "../../components/StickySocialLinks";
import { LogoLink } from "../../components/LogoLink";

ReactRuntime.registerComponent(UnderlineLink, {
  type: "underline-link",
  label: "Underline Link",
  props: {
    buttonText: TextInput({
      label: "Text",
      defaultValue: "Button text",
    }),
    link: Link({ label: "On click" }),
    textColor: Color({ label: "Text color", defaultValue: "#ffffff" }),
    underlineColor: Color({ label: "Color", defaultValue: "#FF00BA" }),
    className: Style(),
  },
});

ReactRuntime.registerComponent(LogoLink, {
  type: "logo-link",
  label: "Logo Link",
  props: {
    link: Link({ label: "On click" }),
    className: Style(),
  },
});

ReactRuntime.registerComponent(CaseStudyCard, {
  type: "case-study-card",
  label: "Case Study Card",
  props: {
    text: TextInput({
      label: "Text",
      defaultValue: "Text",
    }),
    link: Link({ label: "On click" }),
    backgroundImage: Image({ label: "Image" }),
    size: Select({
      label: "Size",
      labelOrientation: "vertical",
      options: [
        { value: "large", label: "Large" },
        { value: "small", label: "Small" },
      ],
      defaultValue: "large",
    }),
    className: Style(),
  },
});

ReactRuntime.registerComponent(Hero, {
  type: "hero",
  label: "Hero",
  props: {
    image: Image({ format: Image.Format.WithDimensions }),
    imageAlt: TextInput({
      label: "Image alt",
      defaultValue: "",
    }),
    children: Slot(),
    link: Link(),
    className: Style(),
  },
});

ReactRuntime.registerComponent(TextMarquee, {
  type: "text-marquee",
  label: "Text Marquee",
  props: {
    text: TextInput({
      label: "Text",
      defaultValue: "This is some text. This is some text.",
    }),
    link: Link(),
    textColor: Color({ label: "Text color", defaultValue: "#ffffff" }),
    hoverBackground: Color({
      label: "Background hover",
      defaultValue: "#FF00BA",
    }),
    className: Style({
      properties: [Style.Width, Style.Margin, Style.Border, Style.TextStyle],
    }),
  },
});

ReactRuntime.registerComponent(StickySocialLinks, {
  type: "sticky-social-links",
  label: "Social Links",
  props: {
    links: List({
      label: "Links",
      type: Shape({
        type: {
          linkImage: Image({
            label: "Icon",
            format: Image.Format.WithDimensions,
          }),
          linkAlt: TextInput({ label: "Icon alt text", defaultValue: "" }),
          linkUrl: Link(),
        },
      }),
      getItemLabel(link) {
        return link?.linkAlt || "Link";
      },
    }),
    className: Style(),
  },
});
