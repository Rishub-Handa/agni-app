import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        width: "95%",
        height: "90%",
        paddingHorizontal: SIZES.large,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        marginVertical: SIZES.medium,

        // borderColor: 'black',
        // borderWidth: 1
    },

    goBackContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    
    heading: {
        fontFamily: FONT.medium,
        fontSize: SIZES.large,
        color: COLORS.black,
    },

    description: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.lightBlack,
        textAlign: "center",
    },

    preRoutineImage: {
        width: "80%",
        height: 300,
        marginVertical: SIZES.large,
    },

    preRoutineInfoContainer: {
        width: "100%",
        marginVertical: SIZES.medium,
        
    },

    preRoutineInfoLine: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginVertical: 0,
        color: COLORS.black,
    },

    preRoutineInfoText: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.black,
    },

    startButton: {
        width: "100%",
        alignSelf: "center",
        height: 60,
        borderRadius: SIZES.small,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
    },

    startButtonText: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        // color: COLORS.fullBlack,
        color: "#000000"
    }
    


    

    
  });
  
  export default styles;
