import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { Stack, useRouter, useNavigation } from 'expo-router';
import AsyncStorage from "@react-native-async-storage/async-storage";

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

    const router = useRouter();
    const navigation = useNavigation();
    console.log("IS DEV: ", __DEV__)

    // If user:data doesnt exist, generate a new ID and store it
    const generateNewId = () => {
        const newId = Math.random().toString(36).substring(7);
        console.log("NEW ID: ", newId)

        return {
            id: newId,
            routines: []
        }
    }

    // If user:data exists, retrieve it
    const retrieveData = async () => {
        try {
            const storageKey = 'user:data'
            const jsonValue = await AsyncStorage.getItem(storageKey)

            // If no data exists, generate a new ID and store it
            if (jsonValue == null) {
                const data = generateNewId()
                AsyncStorage.setItem(storageKey, JSON.stringify(data))
                return data
            }
            return JSON.parse(jsonValue)
        } catch(e) {
            console.log("Error retrieving data: ", e)
        }
    }


    useEffect(() => {
        (async () => {
            const userData = await retrieveData()
            console.log("USER DATA: ", userData)
            
            mixpanel.identify(userData.id);
            mixpanel.track(`Home Screen Visit`);
        })()
    }, [])




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