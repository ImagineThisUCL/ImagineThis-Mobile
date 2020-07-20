import { Dimensions } from "react-native"

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const baseSpacing = 10

export default {
  margin: baseSpacing,
  padding: baseSpacing,
  paddingExtra: baseSpacing * 4,
  screenPadding: baseSpacing,
  borderRadius: baseSpacing,
  colors: {
    bluePrimary: "#245271",
    greenPrimary: "#6dbe29",
    blueSecondary: "#4c718b",
    blueHeadings: "#3f7489",
    greenLight: "#a2d577",
    greenDark: "#579821",
    blueLight: "#8fb9d5",
    darkPrimary: "#333333",
    darkSecondary: "#666666",
    grey: "#999999",
    greyLight: "#cccccc",
    greyLightest: "#eeeeee",
    red: "#f11c30",
    white: "#ffffff",
    modalBackground: "#00000080"

  },
  window: {
    width,
    height
  },
  layout: {
    isSmallDevice: width < 375
  },
  font: {
    smallest: 14,
    small: 17,
    medium: 19,
    large: 21,
    heading: 25,
    iconSmallest: 19,
    iconSmall: 22,
    iconMedium: 24,
    iconLarge: 27
  }
}
