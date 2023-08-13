import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    container: {
        width: "95%",
        height: "90%",
        paddingHorizontal: SIZES.large,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        marginVertical: SIZES.xxLarge,
        backgroundColor: COLORS.black,

        // borderColor: 'black',
        // borderWidth: 1
    },
    
    heading: {
        fontFamily: FONT.medium,
        fontSize: SIZES.large,
        color: COLORS.black,
    },

    routineImage: {
        width: "80%",
        height: 300,
        marginVertical: SIZES.large,
    },

    
  });
  
  export default styles;
