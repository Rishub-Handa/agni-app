import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, SIZES, images, } from '../constants'
import styles from '../styles/preroutine.style'
import { useRoute } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import routines from '../data/routines'
import mixpanel from '../constants/analytics';


const PreRoutine = () => {

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
                <Text style={styles.heading}>{title}</Text>

                <Image 
                    source={coverImage}
                    style={styles.preRoutineImage}
                    resizeMode='contain'
                />

                <View style={styles.preRoutineInfoContainer}>
                    <View style={styles.preRoutineInfoLine}>
                        <Text>Skills</Text>
                        <Text>{skills}</Text>
                    </View>
                    
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: "100%",
                            marginVertical: SIZES.xxSmall,
                        }}  
                    />

                    <View style={styles.preRoutineInfoLine}>
                        <Text>Level</Text>
                        <TouchableOpacity>
                            <Text>
                                {level}
                                {/* TODO: Add customization */}
                                {/* <MaterialCommunityIcons name="chevron-right" color={'gray'} size={SIZES.medium} /> */}
                            </Text>
                        </TouchableOpacity>
                        
                    </View>

                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: "100%",
                            marginVertical: SIZES.xxSmall,
                        }}  
                    />

                    <View style={styles.preRoutineInfoLine}>
                        <Text>Time</Text>
                        <TouchableOpacity>
                            <Text>
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
                        router.push(`/routines/${routineId}`)
                    }}
                >
                    <Text>Start</Text>
                </TouchableOpacity>


            </View>

        




        </SafeAreaView>
    )
}

export default PreRoutine; 