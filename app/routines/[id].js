import { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Stack, useRouter, useSearchParams, useNavigation } from 'expo-router';
import { Audio } from 'expo-av';
import { useKeepAwake } from 'expo-keep-awake';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS, SIZES, images, } from '../../constants'
import styles from '../../styles/routine.style'
import { routines } from '../../data/routines'
import mixpanel from '../../constants/analytics';


const Routine = () => {

    useKeepAwake();

    const navigation = useNavigation();
    const params = useSearchParams()
    const { id } = params
    const { title, audioFile, coverImage } = routines[id]

    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);

    const playSound = async () => {
        console.log('Loading Sound');
        await Audio.setAudioModeAsync({
            playsInSilentModeIOS: true,
        })

        if(!audioFile) {
            console.log("No audio file found.")
            return
        }

        const { sound } = await Audio.Sound.createAsync( 
            audioFile
        );
        setIsPlaying(true);
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    const pauseSound = async () => {
        console.log('Pausing Sound');
        await sound.pauseAsync();
        setIsPlaying(false);
    }

    const resumeSound = async () => {
        console.log('Resuming Sound');
        await sound.playAsync();
        setIsPlaying(true);
    }

    // Play sound on page load
    useEffect(() => {
        playSound();
        mixpanel.track(`Routine Screen Visit - ${id}`);
    }, []);


    useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync();
            }
          : undefined;
    }, [sound]);


    

 
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.black },
                    headerShadowVisible: false,
                    headerTitle: ""
                }}

            />
            
            
            <View style={styles.container}>
                <View style={styles.goBackContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="chevron-left" color={COLORS.white} size={SIZES.xxLarge} />
                    </TouchableOpacity>
                </View>
                

                <Image 
                    source={coverImage}
                    style={styles.routineImage}
                    resizeMode='contain'
                />
                
                {/* Play button */}
                {isPlaying ? (
                    <TouchableOpacity onPress={pauseSound}>
                        <MaterialCommunityIcons name="pause-circle-outline" size={120} color={COLORS.lightWhite} />
                    </TouchableOpacity>
                ) : sound ? (
                    <TouchableOpacity onPress={resumeSound}>
                        <MaterialCommunityIcons name="play-circle-outline" size={120} color={COLORS.lightWhite} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={playSound}>
                        <MaterialCommunityIcons name="play-circle-outline" size={120} color={COLORS.lightWhite} />
                    </TouchableOpacity>
                )}

            </View>


        </SafeAreaView>
    )
}

export default Routine; 