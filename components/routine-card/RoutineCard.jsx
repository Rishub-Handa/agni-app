import { Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from 'expo-router';
import styles from './routinecard.style'

const RoutineCard = ({name, image, routineId}) => {
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity 
            key={name} 
            style={styles.cardContainer}
            onPress={() => { navigation.navigate('preroutine', {routineId}) }}>
            <Text style={styles.cardHeading}>{name}</Text>
            <Image
                source={image}
                resizeMode='contain'
                style={styles.cardImage}
            />
        </TouchableOpacity>
    )
}

export default RoutineCard;