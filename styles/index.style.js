import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    container: {
      width: "100%",
      paddingHorizontal: SIZES.large,
      justifyContent: "center",
      alignContent: "center",
    },
    heading: {
        fontFamily: FONT.medium,
        fontSize: SIZES.large,
    },
    
    homeScreenRelaxCardContainer: {
        width: "100%",
        alignSelf: "center",
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: SIZES.small,
        margin: SIZES.xSmall,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.small,
        opacity: 0.5,
    },
    recommendedContainer: {
        width: "100%",
        alignSelf: "center",
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // padding: SIZES.small,
        margin: SIZES.xSmall,
        // backgroundColor: COLORS.primary,
        borderRadius: SIZES.small,
    },
    recommendedCard: {
        width: "49%",
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: SIZES.medium,
        padding: SIZES.small,
        // margin: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    recommendedCardImage: {
        'width': '100%',
        'height': 100,
        margin: SIZES.medium,
    }
    

    // userName: {
    //   fontFamily: FONT.regular,
    //   fontSize: SIZES.large,
    //   color: COLORS.secondary,
    // },
    // welcomeMessage: {
    //   fontFamily: FONT.bold,
    //   fontSize: SIZES.xLarge,
    //   color: COLORS.primary,
    //   marginTop: 2,
    // },
    // searchContainer: {
    //   justifyContent: "center",
    //   alignItems: "center",
    //   flexDirection: "row",
    //   marginTop: SIZES.large,
    //   height: 50,
    // },
    // searchWrapper: {
    //   flex: 1,
    //   backgroundColor: COLORS.white,
    //   marginRight: SIZES.small,
    //   justifyContent: "center",
    //   alignItems: "center",
    //   borderRadius: SIZES.medium,
    //   height: "100%",
    // },
    // searchInput: {
    //   fontFamily: FONT.regular,
    //   width: "100%",
    //   height: "100%",
    //   paddingHorizontal: SIZES.medium,
    // },
    // searchBtn: {
    //   width: 50,
    //   height: "100%",
    //   backgroundColor: COLORS.tertiary,
    //   borderRadius: SIZES.medium,
    //   justifyContent: "center",
    //   alignItems: "center",
    // },
    // searchBtnImage: {
    //   width: "50%",
    //   height: "50%",
    //   tintColor: COLORS.white,
    // },
    // tabsContainer: {
    //   width: "100%",
    //   marginTop: SIZES.medium,
    // },
    // tab: (activeJobType, item) => ({
    //   paddingVertical: SIZES.small / 2,
    //   paddingHorizontal: SIZES.small,
    //   borderRadius: SIZES.medium,
    //   borderWidth: 1,
    //   borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    // }),
    // tabText: (activeJobType, item) => ({
    //   fontFamily: FONT.medium,
    //   color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    // }),
  });
  
  export default styles;
