import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import {
  Anton,
  Arimo,
  Baskervville,
  Comic_Neue,
  Courier_Prime,
  EB_Garamond,
  Fraunces,
  Inter,
  Josefin_Sans,
  Lato,
  Merriweather,
  Montserrat,
  Open_Sans,
  Outfit,
  Playfair_Display,
  Poppins,
  Radley,
  Roboto,
  Tangerine,
  Tinos,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: "400",
});
export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400",
});
export const open_sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
  weight: "400",
});
export const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "400",
});
export const courier_prime = Courier_Prime({
  subsets: ["latin"],
  variable: "--font-courier_prime",
  weight: "400",
});
export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
});
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: "400",
});
export const playfair_display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair_display",
  weight: "400",
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: "400",
});
export const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
});
export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: "400",
});
export const radley = Radley({
  subsets: ["latin"],
  variable: "--font-radley",
  weight: "400",
});
export const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
  weight: "400",
});
export const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin_sans",
  weight: "400",
});
export const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: "400",
});
export const tangerine = Tangerine({
  subsets: ["latin"],
  variable: "--font-tangerine",
  weight: "400",
});
export const tinos = Tinos({
  subsets: ["latin"],
  variable: "--font-tinos",
  weight: "400",
});
export const comic_neue = Comic_Neue({
  subsets: ["latin"],
  variable: "--font-comic_neue",
  weight: "400",
});
export const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: "400",
});
export const baskervville = Baskervville({
  subsets: ["latin"],
  variable: "--font-baskervville",
  weight: "400",
});

interface Font {
  name: string;
  font: string;
}

export const fontList: Font[] = [
  { name: "Roboto", font: roboto.variable },
  { name: "Open Sans", font: open_sans.variable },
  { name: "Lato", font: lato.variable },
  { name: "Courier Prime", font: courier_prime.variable },
  { name: "Poppins", font: poppins.variable },
  { name: "Fraunces", font: fraunces.variable },
];
