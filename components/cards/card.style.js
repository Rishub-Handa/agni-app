import { StyleSheet } from "react-native";
import { SIZES, FONT, COLORS } from '../../constants';

const styles = StyleSheet.create({
    cardContainer: {
        width: "49%",
        height: 150,
        backgroundColor: COLORS.fullWhite,
        borderRadius: SIZES.medium,
        padding: SIZES.small,
        marginHorizontal: 0,
        marginVertical: SIZES.xxxSmall,
        justifyContent: "center",
        alignItems: "center",
    },
    cardImage: {
        width: "75%",
        height: 90
    },
    cardHeading: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.black,
    },
    heroCardHeading: {
        fontFamily: FONT.regular,
        fontSize: SIZES.large,
        color: COLORS.black,
    },
    heroCardContainer: {
        width: "100%",
        alignSelf: "center",
        // height: 400,
        backgroundColor: COLORS.fullWhite,
        borderRadius: SIZES.medium,
        padding: SIZES.medium,
        margin: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    heroCardCoverImage: {
        'width': '80%',
        'height': 200,
        margin: SIZES.medium,
    },
    heroCardStartButton: {
        width: "100%",
        alignSelf: "center",
        height: 60,
        borderRadius: SIZES.small,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    heroCardStartButtonText: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.fullBlack,

    },

    
  });
  
  export default styles;
