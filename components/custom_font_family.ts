import { Mark, mergeAttributes } from "@tiptap/core";
import { inter, roboto, open_sans } from "@/app/fonts";

interface FontFamilyAttributes {
  fontFamily: string;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    fontFamily: {
      setFontFamily: (fontFamily: string) => ReturnType;
      unsetFontFamily: () => ReturnType;
    };
  }
}

export const FontFamilyExtension = Mark.create({
  name: "fontFamily",

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      fontFamily: {
        default: inter.variable,
        parseHTML: (element: HTMLElement) =>
          element.style.fontFamily.replace(/['"]+/g, ""),
        renderHTML: (attributes: FontFamilyAttributes) => {
          return {
            style: `font-family: ${attributes.fontFamily}`,
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        style: "font-family",
        getAttrs: (value) => !!value && { fontFamily: value },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "span",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
      0,
    ];
  },

  addCommands() {
    return {
      setFontFamily:
        (fontFamily: string) =>
        ({ commands }) => {
          return commands.setMark(this.name, { fontFamily });
        },
      unsetFontFamily:
        () =>
        ({ commands }) => {
          return commands.unsetMark(this.name);
        },
    };
  },
});
