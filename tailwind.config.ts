import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/(frontend)/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "system-blue-1": "#D1D5FA",
        "system-blue-2": "#A3ABF5",
        "system-blue-3": "#7480F1",
        "system-blue-4": "#4656EC",
        "system-blue-5": "#182CE7",
        "system-blue-6": "#1323B9",
        "system-blue-7": "#0E1A8B",
        "system-blue-8": "#0A125C",
        "system-blue-9": "#05092E",
        "system-green-1": "#D1F8E7",
        "system-green-2": "#A3F1D0",
        "system-green-3": "#74E9B8",
        "system-green-4": "#46E2A1",
        "system-green-5": "#18DB89",
        "system-green-6": "#13AF6E",
        "system-green-7": "#0E8352",
        "system-green-8": "#0A5837",
        "system-green-9": "#052C1B",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
