import { Editor } from "@tiptap/core";
import TextStyle from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family";

// Define the list of fonts you want to include
export const fontFamilies = [
  { label: "Inter", value: "inter, sans-serif" },
  { label: "Arial", value: "Arial, sans-serif" },
  { label: "Arial Black", value: '"Arial Black", sans-serif' },
  { label: "Comic Sans MS", value: '"Comic Sans MS", cursive, sans-serif' },
  { label: "Courier New", value: '"Courier New", Courier, monospace' },
  { label: "Georgia", value: "Georgia, serif" },
  { label: "Impact", value: "Impact, Charcoal, sans-serif" },
  { label: "Tahoma", value: "Tahoma, Geneva, sans-serif" },
  { label: "Times New Roman", value: '"Times New Roman", Times, serif' },
  { label: "Trebuchet MS", value: '"Trebuchet MS", Helvetica, sans-serif' },
  { label: "Verdana", value: "Verdana, Geneva, sans-serif" },
  { label: "Amatic SC", value: '"Amatic SC", cursive' },
  { label: "Dancing Script", value: '"Dancing Script", cursive' },
  { label: "Fira Sans", value: '"Fira Sans", sans-serif' },
  { label: "Inconsolata", value: '"Inconsolata", monospace' },
  { label: "Lobster", value: '"Lobster", cursive' },
  { label: "Merriweather", value: '"Merriweather", serif' },
  { label: "Montserrat", value: '"Montserrat", sans-serif' },
  { label: "Noto Sans", value: '"Noto Sans", sans-serif' },
  { label: "Noto Serif", value: '"Noto Serif", serif' },
  { label: "Open Sans", value: '"Open Sans", sans-serif' },
  { label: "Oswald", value: '"Oswald", sans-serif' },
  { label: "Pacifico", value: '"Pacifico", cursive' },
  { label: "PT Sans", value: '"PT Sans", sans-serif' },
  { label: "PT Serif", value: '"PT Serif", serif' },
  { label: "Roboto", value: '"Roboto", sans-serif' },
  { label: "Roboto Mono", value: '"Roboto Mono", monospace' },
  { label: "Rubik", value: '"Rubik", sans-serif' },
  { label: "Source Sans Pro", value: '"Source Sans Pro", sans-serif' },
  { label: "Ubuntu", value: '"Ubuntu", sans-serif' },
  { label: "Varela Round", value: '"Varela Round", sans-serif' },
  // Add more fonts as needed
];

// Extend the FontFamily extension to use your list of fonts
export const CustomFontFamily = FontFamily.extend({
  addOptions() {
    return {
      types: ["textStyle"],
      fontFamilies,
    };
  },
});
