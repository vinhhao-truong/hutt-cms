export default function (str: string) {
  let hash = 0;

  // Generate hash from string
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Convert hash to 6-digit hex
  let hex = (hash & 0x00ffffff).toString(16).toUpperCase();

  // Pad with zeros if needed
  return "#" + "00000".substring(0, 6 - hex.length) + hex;
}
