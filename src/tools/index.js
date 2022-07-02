import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// 375, 812, 3 - iPhoneX dimensions, need to be based on mock
const widthBaseScale = SCREEN_WIDTH / 375;
const heightBaseScale = SCREEN_HEIGHT / 812;
const pixelRatioBaseScale = 3 / PixelRatio.get();

export function normalize(size) {
  console.log("normalize");
  const newSize = size * widthBaseScale * pixelRatioBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
