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

        // borderColor: 'black',
        // borderWidth: 1
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
    


    

    
  });
  
  export default styles;
