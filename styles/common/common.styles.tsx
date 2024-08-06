import { StyleSheet } from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: "#2467ec",
    width: responsiveWidth(88),
    height: responsiveWidth(5.5),
    borderRadius: 5,
    marginHorizontal: 5,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  dot: {
    backgroundColor: "#2467ec",
    width: responsiveWidth(2.5),
    height: responsiveWidth(2.5),
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#2467ec",
    width: responsiveWidth(2.5),
    height: responsiveWidth(2.5),
    borderRadius: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: hp("3.5%"),
    textAlign: "center",
  },
  description: {
    fontSize: hp("2.5%"),
    textAlign: "center",
    color: "#575757",
  },
});
