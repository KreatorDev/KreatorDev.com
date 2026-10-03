import { Instrument_Sans, Instrument_Serif } from "next/font/google";

const fontSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const fontVariables = fontSans.variable + " " + fontDisplay.variable;
