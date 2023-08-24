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
        flexDirection: "column",

        // borderColor: 'black',
        // borderWidth: 1
    },

    headerContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        alignSelf: "flex-start",
        marginVertical: SIZES.small,
        flexDirection: "column",
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
        marginVertical: SIZES.small,
    },


    startButton: {
        width: "100%",
        alignSelf: "flex-end",
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
    },

    poseListContainer: {
        width: "100%",

    },

    poseListItemContainer: {
        width: "100%",
        height: 100,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.xxSmall,
        alignSelf: "flex-start",
        

        // borderColor: 'black',
        // borderWidth: 1
    },

    poseListItemImage: {
        height: 100,
        width: 100,
        borderRadius: SIZES.small,
        marginLeft: SIZES.small,
    },

    poseListItemText: {
        fontFamily: FONT.regular,
        fontSize: SIZES.large,
        color: COLORS.black,
        justifyContent: "flex-end",
        marginRight: SIZES.small,
        


    }
    


    

    
  });
  
  export default styles;
