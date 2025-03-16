interface Color {
  "system-blue-1": string;
  "system-blue-2": string;
  "system-blue-3": string;
  "system-blue-4": string;
  "system-blue-5": string;
  "system-blue-6": string;
  "system-blue-7": string;
  "system-blue-8": string;
  "system-blue-9": string;
  "system-green-1": string;
  "system-green-2": string;
  "system-green-3": string;
  "system-green-4": string;
  "system-green-5": string;
  "system-green-6": string;
  "system-green-7": string;
  "system-green-8": string;
  "system-green-9": string;
}

const color: Color = {
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
};

export const colorRgb: Color = {
  "system-blue-1": "rgba(209, 213, 250, 1)",
  "system-blue-2": "rgba(163, 171, 245, 1)",
  "system-blue-3": "rgba(116, 128, 241, 1)",
  "system-blue-4": "rgba(70, 86, 236, 1)",
  "system-blue-5": "rgba(24, 44, 231, 1)",
  "system-blue-6": "rgba(19, 35, 185, 1)",
  "system-blue-7": "rgba(14, 26, 139, 1)",
  "system-blue-8": "rgba(10, 18, 92, 1)",
  "system-blue-9": "rgba(5, 9, 46, 1)",
  "system-green-1": "rgba(209, 248, 231, 1)",
  "system-green-2": "rgba(163, 241, 208, 1)",
  "system-green-3": "rgba(116, 233, 184, 1)",
  "system-green-4": "rgba(70, 226, 161, 1)",
  "system-green-5": "rgba(24, 219, 137, 1)",
  "system-green-6": "rgba(19, 175, 110, 1)",
  "system-green-7": "rgba(14, 131, 82, 1)",
  "system-green-8": "rgba(10, 88, 55, 1)",
  "system-green-9": "rgba(5, 44, 27, 1)",
};

export const colorRgba = (color: keyof Color, opacity: number): string => {
  return colorRgb[color].slice(0, colorRgb[color].length - 2) + `${opacity})`;
};

export default color;
