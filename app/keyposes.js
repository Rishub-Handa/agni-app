import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Stack, useRouter, useNavigation } from 'expo-router';
import { COLORS, SIZES, images, } from '../constants'
import styles from '../styles/keyposes.style'
import { useRoute } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import routines from '../data/routines'
import mixpanel from '../constants/analytics';



const PoseListItem = () => {

    
}



const KeyPoses = () => {

    const navigation = useNavigation();
    const router = useRouter();
    const route = useRoute()
    const { routineId } = route.params
    console.log("ROUTINE ID", routineId)
    mixpanel.track(`PreRoutine Screen Visit - ${routineId}`);

    const { title, description } = routines[routineId]
 
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerTitle: ""
                }}

            />

            
            
            <View style={styles.container}>
                <View style={styles.goBackContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="chevron-left" color={COLORS.black} size={SIZES.xxLarge} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.heading}>{title}</Text>
                <Text style={styles.description}>{description}</Text>

                <View
                    style={{
                        borderBottomColor: COLORS.black,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        width: "100%",
                        marginVertical: SIZES.xxSmall,
                    }}  
                />

                
                <TouchableOpacity 
                    style={styles.startButton}
                    onPress={() => {
                        router.push(`/routines/${routineId}`)
                    }}
                >
                    <Text style={styles.startButtonText}>Begin</Text>
                </TouchableOpacity>


            </View>

        

        </SafeAreaView>
    )
}

export default KeyPoses; 