import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Stack, useRouter, useNavigation } from 'expo-router';

import { COLORS, SIZES, images, } from '../../constants'
import RoutineCard from '../../components/cards/RoutineCard'
import HeroCard from '../../components/cards/HeroCard';
import styles from '../../styles/index.style'
import mixpanel from '../../constants/analytics';


const heroCardId = 'WakeUp'

const recommendedCards = [
    {name: 'Midday Break', image: images.middayBreakCardImage, routineId: 'MiddayBreak'},
    {name: 'Posture', image: images.postureCardImage, routineId: 'Posture'},
]

const Home = () => {

    mixpanel.track("Home Screen Visit");
    const router = useRouter();
    const navigation = useNavigation();
    // mixpanel.track("Home Screen Visit");
    console.log("LOGGIN")
    console.log(images.lotusCardImage)

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
                    <Text style={styles.heading}>For You</Text>
                    <HeroCard routineId={heroCardId}/>
                    
                    

                    {/* TODO: Add back in when relaxation sequence developed */}
                    {/* <Text style={styles.heading}>Relaxation</Text>
                    <TouchableOpacity style={styles.homeScreenRelaxCardContainer}>
                        <View style={{ flex: 0.6 }}>
                            <Text>Destress with this 5min sequence</Text>
                        </View>

                        <Image
                            source={images.homeScreenRelax}
                            resizeMode='contain'
                        />
                    </TouchableOpacity> */}

                    <Text style={styles.heading}>Recommended</Text>

                    <View style={styles.recommendedContainer}>
                        {recommendedCards.map((card) => RoutineCard(card))}
                    </View>



                </View>
            </ScrollView>





        </SafeAreaView>
    )
}

export default Home; 