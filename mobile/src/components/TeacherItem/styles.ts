import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },

    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee'
    },

    profileInfo: {
        marginLeft: 16,
    },

    name: {
        fontFamily: 'Archivo_700Bold',
        color: 'rgb(75, 26, 53)',
        fontSize: 20,
    },

    subject: {
        fontFamily: 'Poppins_400Regular',
        color: 'rgb(117, 45, 85)',
        fontSize: 12,
        marginTop: 4,
    },

    bio: {
        marginHorizontal:24,
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 27,
        color: 'rgb(117, 45, 85)'
    },

    footer: {
        backgroundColor: '#fafafc',
        padding: 24,
        alignItems: 'center'
    },

    price: {
        fontFamily: 'Poppins_400Regular',
        color: 'rgb(117, 45, 85)',
        fontSize: 14,
    },

    priceValue: {
        fontFamily: 'Archivo_700Bold',
        color: '#63b49f',
        fontSize: 16
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },

    favoriteButton: {
        backgroundColor: '#63b49f',
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },

    favorited: {
        backgroundColor: '#e33e3d',
    },

    contactButton: {
        backgroundColor: '#04e361',
        flex: 1,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },

    contactButtonText: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 16,
    }
});

export default styles