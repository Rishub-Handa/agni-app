import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, SIZES, images, } from '../../constants'
import styles from '../../styles/index.style'


const Progress = () => {

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
                    <Text style={styles.heading}>Progress</Text>
                    <Text>Coming soon...</Text>
                    
                </View>
            </ScrollView>





        </SafeAreaView>
    )
}

export default Progress; 