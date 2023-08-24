import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Stack, useRouter, useNavigation } from 'expo-router';
import { COLORS, SIZES, images, } from '../constants'
import styles from '../styles/keyposes.style'
import { useRoute } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { routines, poses } from '../data/routines'
import mixpanel from '../constants/analytics';



const PoseListItem = ({ poseId }) => {

    const { title, image } = poses[poseId]

    return (
        <View style={styles.poseListItemContainer}>
            <Image 
                source={image}
                style={styles.poseListItemImage}
            />

            <Text style={styles.poseListItemText}>{title}</Text>

        </View>
    )
    
}



const KeyPoses = () => {

    const navigation = useNavigation();
    const router = useRouter();
    const route = useRoute()
    const { routineId } = route.params
    console.log("ROUTINE ID", routineId)
    mixpanel.track(`PreRoutine Screen Visit - ${routineId}`);

    const { title, description } = routines[routineId]
 
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
                <View style={styles.headerContainer}>
                    <View style={styles.goBackContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <MaterialCommunityIcons name="chevron-left" color={COLORS.black} size={SIZES.xxLarge} />
                        </TouchableOpacity>
                    </View>
                    
                    <Text style={styles.heading}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>

                    <View
                        style={{
                            borderBottomColor: COLORS.black,
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            width: "100%",
                            marginVertical: SIZES.xxSmall,
                        }}  
                    />
                </View>
                
                <ScrollView 
                    style={styles.poseListContainer}
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                >
                    {routines[routineId].keyPoses.map((poseId, index) => (
                        <PoseListItem key={index} poseId={poseId} />
                    ))}
                </ScrollView>

                
                <TouchableOpacity 
                    style={styles.startButton}
                    onPress={() => {
                        router.push(`/routines/${routineId}`)
                    }}
                >
                    <Text style={styles.startButtonText}>Begin</Text>
                </TouchableOpacity>


            </View>

        

        </SafeAreaView>
    )
}

export default KeyPoses; 