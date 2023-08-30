import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Stack, useRouter, useNavigation } from 'expo-router';
import { COLORS, SIZES, images, } from '../../constants'
import RoutineCard from '../../components/cards/RoutineCard'
import styles from '../../styles/lifestyle.style'
import mixpanel from '../../constants/analytics';


const lifestyleCards = [
    {name: 'Wake Up', image: images.wakeUpCardImage, routineId: 'WakeUp'},
    {name: 'Midday Break', image: images.middayBreakCardImage, routineId: 'MiddayBreak'},
    {name: 'Posture', image: images.postureCardImage, routineId: 'Posture'},
    {name: 'Before Activity', image: images.beforeActivityCardImage, routineId: 'BeforeActivity'},
]

const progressionCards = [
    {name: 'Tree Pose \n Coming soon...', image: images.treePoseImage, routineId: 'TreePose'},
    {name: 'Forward Fold \n Coming soon...', image: images.forwardFoldPoseImage, routineId: 'ForwardFold'},
]

const foundationsCards = [
    {name: 'Day 1', image: images.forwardFoldPoseImage, routineId: 'Foundations-Day1'},
]


const Lifestyle = () => {

    const router = useRouter();
    mixpanel.track("Lifestyle Screen Visit");

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerTitle: ""
                }}

            /> 

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={styles.container}
                >   
                    <Text style={styles.heading}>Lifestyle</Text>
                    <View style={styles.routineCardGroupContainer}>
                        {lifestyleCards.map((card) => RoutineCard(card))}
                    </View>

                    <Text style={styles.heading}>Progression</Text>
                    <View style={styles.routineCardGroupContainer}>
                        {progressionCards.map((card) => RoutineCard(card))}
                    </View>

                    {/* <Text style={styles.heading}>Foundations</Text>
                    <View style={styles.routineCardGroupContainer}>
                        {foundationsCards.map((card) => RoutineCard(card))}
                    </View> */}

                    {/* <Text style={styles.heading}>Relaxation</Text>
                    <Text>Coming soon...</Text> */}
                    


                </View>
            </ScrollView>





        </SafeAreaView>
    )
}

export default Lifestyle; 