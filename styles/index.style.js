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
        color: COLORS.black,
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
        backgroundColor: COLORS.fullWhite,
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
    

    
  });
  
  export default styles;
