import { Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from 'expo-router';
import styles from './card.style'
import routines from '../../data/routines';

const HeroCard = ({routineId}) => {
    const navigation = useNavigation();
    const routine = routines[routineId];
    
    return (
        <TouchableOpacity 
            style={styles.heroCardContainer}
            onPress={() => {
                navigation.navigate('preroutine', {routineId})
            }}
        >
            <Text style={styles.heroCardHeading}>{routine.title}</Text>
            <Image
                source={routine.coverImage}
                style={styles.heroCardCoverImage}
                // style={styles.cardContainer}
                resizeMode='contain'
            />
            <TouchableOpacity 
                style={styles.heroCardStartButton} 
                onPress={() => {
                    navigation.navigate('preroutine', {routineId})
                }}
                >
                <Text style={styles.heroCardStartButtonText}>Start</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default HeroCard;