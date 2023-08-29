import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter, useNavigation } from 'expo-router';
import { COLORS, SIZES, images, } from '../constants'
import styles from '../styles/keyposes.style'
import { useRoute } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import { routines, poses } from '../data/routines'
import mixpanel from '../constants/analytics';


const PoseInfoModal = ({ poseId, isVisible, setPoseModalIsVisible }) => {

    if(!poseId) return <></>

    const { title, image, description } = poses[poseId]

    return (
        <Modal
            isVisible={isVisible}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropOpacity={0.5}
            onBackdropPress={() => {
                setPoseModalIsVisible(false)
            }}
            style={styles.modal}
        >
            
            <View style={styles.modalContainer}>
                <ScrollView>
                    <Text style={styles.modalHeaderText}>{title}</Text>
                    <Image
                        source={image}
                        style={styles.modalImage}
                    />
                    <Text style={styles.modalDescription}>{description}</Text>
                </ScrollView>
            </View>
        </Modal>
    )

}



const PoseListItem = ({ poseId, setSelectedPose, setPoseModalIsVisible }) => {

    const { title, image } = poses[poseId]

    return (
        <TouchableOpacity
            onPress={() => {
                setSelectedPose(poseId)
                setPoseModalIsVisible(true)
            }}
        >
            <View style={styles.poseListItemContainer}>
                <Image 
                    source={image}
                    style={styles.poseListItemImage}
                />
                <Text style={styles.poseListItemText}>{title}</Text>

            </View>
        </TouchableOpacity>
        
    )
    
}



const KeyPoses = () => {

    const navigation = useNavigation();
    const router = useRouter();
    const route = useRoute()
    const { routineId } = route.params
    console.log("ROUTINE ID", routineId)
    mixpanel.track(`Keyposes Screen Visit - ${routineId}`);
    const [selectedPose, setSelectedPose] = useState('')
    const [poseModalIsVisible, setPoseModalIsVisible] = useState(false)

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

                <PoseInfoModal poseId={selectedPose} isVisible={poseModalIsVisible} setPoseModalIsVisible={setPoseModalIsVisible} />

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
                        <PoseListItem 
                            key={index} poseId={poseId} 
                            setPoseModalIsVisible={setPoseModalIsVisible} setSelectedPose={setSelectedPose} 
                        />
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