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
    routineCardGroupContainer: {
        width: "100%",
        alignSelf: "center",
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 0, 
        marginVertical: SIZES.xSmall,

    },
    heading: {
        fontFamily: FONT.medium,
        fontSize: SIZES.large,
    },


    

    
  });
  
  export default styles;
