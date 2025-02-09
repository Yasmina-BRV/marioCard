import { Image, Text, View, StyleSheet } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.logo}
                    source={ require('./assets/logo/super_mario_party_jamboree_logo.png')}
                />  
            </View>
            <Text>Test </Text>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    logo: {
        width: 96,
        height: 78,
    }
})
