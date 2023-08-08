import { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { Audio } from 'expo-av';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS, SIZES, images, } from '../../constants'
import styles from '../../styles/preroutine.style'
import routines from '../../data/routines'


const Routine = () => {

    const params = useSearchParams()
    const { id } = params
    const { title, audioFile } = routines[id]

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

    useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);

 
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
                <Text>{title}</Text>
                
                {/* Play button */}
                {isPlaying ? (
                    <TouchableOpacity onPress={pauseSound}>
                        <MaterialCommunityIcons name="pause-circle-outline" size={120} color="black" />
                    </TouchableOpacity>
                ) : sound ? (
                    <TouchableOpacity onPress={resumeSound}>
                        <MaterialCommunityIcons name="play-circle-outline" size={120} color="black" />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={playSound}>
                        <MaterialCommunityIcons name="play-circle-outline" size={120} color="black" />
                    </TouchableOpacity>
                )}

            </View>


        </SafeAreaView>
    )
}

export default Routine; 