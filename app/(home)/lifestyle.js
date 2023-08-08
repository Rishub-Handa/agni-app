import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Stack, useRouter, useNavigation } from 'expo-router';
import { COLORS, SIZES, images, } from '../../constants'
import RoutineCard from '../../components/routine-card/RoutineCard'
import styles from '../../styles/lifestyle.style'


const lifestyleCards = [
    {name: 'Wake Up', image: images.wakeUpCardImage, routineId: 'WakeUp'},
    {name: 'Midday Break', image: images.middayBreakCardImage, routineId: 'MiddayBreak'},
    {name: 'Posture', image: images.postureCardImage, routineId: 'Posture'},
    {name: 'Before Activity', image: images.beforeActivityCardImage, routineId: 'BeforeActivity'},
]

const progressionCards = [
    {name: 'Tree Pose', image: images.treePoseImage, routineId: 'TreePose'},
    {name: 'Forward Fold', image: images.forwardFoldPoseImage, routineId: 'ForwardFold'},
]


const Lifestyle = () => {

    const router = useRouter();
    

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

                    <Text style={styles.heading}>Relaxation</Text>
                    <Text>Coming soon...</Text>
                    


                </View>
            </ScrollView>





        </SafeAreaView>
    )
}

export default Lifestyle; 