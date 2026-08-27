import { Anton, Space_Grotesk, JetBrains_Mono } from "next/font/google";

/**
 * Type system
 * - display: Anton — condensed poster type, the flatstock / gig-poster voice
 * - body:    Space Grotesk — technical grotesk, reads well small
 * - mono:    JetBrains Mono — spec labels, job numbers, ink counts
 *
 * Swap any face here and the whole site follows.
 */
export const displayFace = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display-face",
});

export const bodyFace = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body-face",
});

export const monoFace = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono-face",
});

export const fontVariables = `${displayFace.variable} ${bodyFace.variable} ${monoFace.variable}`;
