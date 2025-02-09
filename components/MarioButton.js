import {Pressable, StyleSheet, Text} from "react-native";
import {useState} from "react";

export default function MarioButton() {
   const [open, setOpen] = useState(false);
    return(
        <Pressable style={styles.button} onPress={() => setOpen(true)}>
            <Text style={styles.buttonT}>Choisir une carte</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 10,
    },
    buttonT: {
        fontSize: 10,
        fontFamily: 'AOTFShinGoProRegular',
        textAlign: 'center',
    },
})