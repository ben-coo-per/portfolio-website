const baseColors = {
  green: { light: "#DFF0EE", normal: "#2A9D8F", dark: "#287171" },
  yellow: { light: "#FCF6E9", normal: "#E9C46A", dark: "#CFA234" },
  orange: { light: "#FDF1E7", normal: "#F4A261", dark: "#DB7F36" },
  red: { light: "#FBE9E5", normal: "#E76F51", dark: "#9D3A25" },
  blue: { light: "#E7E9FA", normal: "#606FDC", dark: "#435A97" },
};

export const lightTheme = {
  ...baseColors,
  bg: "#FDFCFF",
  subtleText: "#264653",
  text: "#000000",
};

export const darkTheme = {
  ...baseColors,
  bg: "#264653",
  subtleText: "#BFCAD6",
  text: "#FFFFFF",
};
