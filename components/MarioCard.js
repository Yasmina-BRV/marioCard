import {Card, CardAction, CardButton, CardContent, CardImage, CardTitle} from "react-native-material-cards";
import {data} from "../data/data";
import {useFonts} from "expo-font";
import {useState} from "react";
import {Pressable, Text} from "react-native";

export default function MarioCard () {
    const [cardVisible, setCardVisible] = useState(false);

    const randomData = data[Math.floor(Math.random() * data.length)];

    const [fontsLoaded, error] = useFonts({
        'AOTFShinGoProRegular': require('../assets/fonts/AOTFShinGoProRegular.otf'),
        'SuperMario256': require('../assets/fonts/SuperMario256.ttf'),
    });

    return (
        <>
            <Card style={styles.container} visible={cardVisible}>
                <CardImage style={styles.image} source={randomData.boardView}></CardImage>
                <CardTitle style={styles.title} title={randomData.name}></CardTitle>
                <CardContent style={styles.description} text={randomData.description}></CardContent>
                <CardAction separator={true}>
                    <CardButton style={styles.button} onPress={() => setCardVisible(!cardVisible)}>
                        <Text style={styles.buttonT}>Choisir une carte</Text>
                    </CardButton>
                </CardAction>
            </Card>
            <Pressable onPress={() => setCardVisible(true)}>
                <Text style={styles.buttonT}>Choisir une carte</Text>
            </Pressable>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius : 10
    },
    title: {
        fontSize: 20,
        fontFamily: 'SuperMario256',
        textAlign: 'center',
    },
    description: {
        fontSize: 10,
        fontFamily: 'AOTFShinGoProRegular',
        textAlign: 'center',
    },
    button: {
        borderRadius: 20,
        padding: 10,
    },
    buttonT: {
        fontSize: 10,
        fontFamily: 'AOTFShinGoProRegular',
        textAlign: 'center',
    },
})