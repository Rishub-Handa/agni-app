import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Stack, useRouter, useNavigation } from 'expo-router';
import { COLORS, SIZES, images, } from '../constants'
import styles from '../styles/preroutine.style'
import { useRoute } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { routines } from '../data/routines'
import mixpanel from '../constants/analytics';


const PreRoutine = () => {

    const navigation = useNavigation();
    const router = useRouter();
    const route = useRoute()
    const { routineId } = route.params
    console.log("ROUTINE ID", routineId)
    mixpanel.track(`PreRoutine Screen Visit - ${routineId}`);

    const { title, coverImage, skills, level, duration } = routines[routineId]
 
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

                <Text></Text>

                <Image 
                    source={coverImage}
                    style={styles.preRoutineImage}
                    resizeMode='contain'
                />

                <View style={styles.preRoutineInfoContainer}>
                    <View style={styles.preRoutineInfoLine}>
                        <Text style={styles.preRoutineInfoText}>Skills</Text>
                        <Text style={styles.preRoutineInfoText}>{skills}</Text>
                    </View>
                    
                    <View
                        style={{
                            borderBottomColor: COLORS.black,
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: "100%",
                            marginVertical: SIZES.xxSmall,
                        }}  
                    />

                    <View style={styles.preRoutineInfoLine}>
                        <Text style={styles.preRoutineInfoText}>Level</Text>
                        <TouchableOpacity>
                            <Text style={styles.preRoutineInfoText}>
                                {level}
                                {/* TODO: Add customization */}
                                {/* <MaterialCommunityIcons name="chevron-right" color={'gray'} size={SIZES.medium} /> */}
                            </Text>
                        </TouchableOpacity>
                        
                    </View>

                    <View
                        style={{
                            borderBottomColor: COLORS.black,
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: "100%",
                            marginVertical: SIZES.xxSmall,
                        }}  
                    />

                    <View style={styles.preRoutineInfoLine}>
                        <Text style={styles.preRoutineInfoText}>Time</Text>
                        <TouchableOpacity>
                            <Text style={styles.preRoutineInfoText}>
                                {duration}
                                {/* TODO: Add customization */}
                                {/* <MaterialCommunityIcons name="chevron-right" color={'gray'} size={SIZES.medium} /> */}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity 
                    style={styles.startButton}
                    onPress={() => {
                        // router.push(`/routines/${routineId}`)
                        navigation.navigate('keyposes', {routineId})
                    }}
                >
                    <Text style={styles.startButtonText}>Start</Text>
                </TouchableOpacity>


            </View>

        




        </SafeAreaView>
    )
}

export default PreRoutine; 