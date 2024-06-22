import { Editor } from "@tiptap/core";
import TextStyle from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family";

import {
  Inter,
  Comic_Neue,
  Courier_Prime,
  Lato,
  David_Libre,
  Caveat,
} from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const comic = Comic_Neue({ weight: "400", subsets: ["latin"] });
const courier = Courier_Prime({ weight: "400", subsets: ["latin"] });
const lato = Lato({ weight: "400", subsets: ["latin"] });
const david_libre = David_Libre({ weight: "400", subsets: ["latin"] });

export const fontFamilies = [
  { label: "Inter", value: inter.className },
  { label: "Comic Neue", value: comic.className },
  { label: "Courier Prime", value: courier.className },
  { label: "Lato", value: lato.className },
  { label: "Impact", value: david_libre.className },
];

export const CustomFontFamily = FontFamily.extend({
  addOptions() {
    return {
      types: ["textStyle"],
      fontFamilies,
    };
  },
});
