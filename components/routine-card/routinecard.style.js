import { StyleSheet } from "react-native";
import { SIZES, FONT } from '../../constants';

const styles = StyleSheet.create({
    cardContainer: {
        width: "49%",
        height: 150,
        backgroundColor: "#FFFFFF",
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
    },

    
  });
  
  export default styles;
