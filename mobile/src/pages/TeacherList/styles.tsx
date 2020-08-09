import {StyleSheet} from 'react-native';
import TeacherList from '.';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f0f0f7',
    },

    teacherList: {
        marginTop: -40,
    },

    searchForm: {
        marginBottom: 24,

    }, 

    label: {
        flexDirection: 'row',
        color: '#d4c5ff',
        fontFamily: 'Poppins_400Regular'
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputBlock: {
        width: '48%',
    },

    input: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

    filterButton: {
        flexDirection: 'row',
    },

    filterButtonText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        marginLeft: 6,
        color: '#fff',
    },

    submitButton: {
        backgroundColor: '#04e361',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    submitButtonText: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },

    inputSelect: {
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 16,
        width: 135,
    },

    viewBorder: {
        borderRadius: 10, 
        borderWidth: 1, 
        borderColor: '#d4c5ff',
        backgroundColor: '#fff',
        height: 50,
    }
});

export default styles;