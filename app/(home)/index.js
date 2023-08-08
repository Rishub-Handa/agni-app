import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Stack, useRouter, useNavigation } from 'expo-router';
// import { Mixpanel } from 'mixpanel-react-native';

import { COLORS, SIZES, images, } from '../../constants'
import RoutineCard from '../../components/routine-card/RoutineCard'
import styles from '../../styles/index.style'

// const mixpanel = new Mixpanel("0a07e34a571ff0ace5a2fa946f5ad63b");
// mixpanel.init();

recommendedCards = [
    {name: 'Wake Up', image: images.wakeUpCardImage, routineId: 'WakeUp'},
    {name: 'Posture', image: images.postureCardImage, routineId: 'Posture'},
]

const Home = () => {

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
                    <TouchableOpacity style={styles.forYouCardContainer}>
                        <Text>Day 2/7</Text>
                        <Text>Foundations</Text>
                        <Image
                            source={images.forwardFoldPoseImage}
                            style={styles.forYouImage}
                            // style={styles.cardContainer}
                            resizeMode='contain'
                        />
                        <TouchableOpacity 
                            style={styles.startButton} 
                            onPress={() => {
                                // router.push("/preroutine?title=abc")
                                // navigation.push("/preroutine", {title: "Foundations"})
                                // router.push({
                                //     pathname: '/preroutine',
                                //     query: {
                                //       title: 'abc',
                                //     },
                                //   })
                                navigation.navigate('preroutine', {routineId: 'Foundations-Day2'})
                            }}
                            >
                            <Text>Start</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>

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