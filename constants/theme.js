const COLORS = {
  primary: "#FFC784",
  secondary: "#444262",
  tertiary: "#FF7754",

  gray: "#83829A",
  gray2: "#C1C0C8",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
  fullWhite: "#FFFFFF",

  black: "#1E1F28",
  lightBlack: "#2E2F37",
  fullBlack: "#000000",

  // Try switching white and black
  // white: "#000000",
  // lightWhite: "#2E2F37",
  // fullWhite: "#1E1F28",

  // black: "#F3F4F8",
  // lightBlack: "#FAFAFC",
  // fullBlack: "#FFFFFF",

};

const FONT = {
  regular: "Avenir",
  medium: "Avenir-Medium",
  bold: "Avenir-Heavy",
};

const SIZES = {
  xxxSmall: 2, 
  xxSmall: 6,
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
