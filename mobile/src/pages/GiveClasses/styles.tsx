import {StyleSheet} from 'react-native';
import { Archivo_400Regular } from '@expo-google-fonts/archivo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#63b49f',
        justifyContent: 'center',
        padding: 40,
    },

    content: {
        flex:1,
        justifyContent: 'center',
    },

    title: {
        flexDirection: "row",
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 32,
        lineHeight: 32,
        maxWidth: 200,
    },

    description: {
        marginTop: 24,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240,
    },

    okButton: {
        marginVertical: 40,
        backgroundColor:'#9c3f3f',
        height: 58,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 8,
    },

    okButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold'
    }
});

export default styles;