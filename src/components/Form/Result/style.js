import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    resultadoIMC: {
        marginBottom: 20,
    },

    info: {
        textAlign: 'center',
        fontSize: 10,
        marginBottom: 10,
    },

    imc: {
        backgroundColor: '#DDD',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    msgResultado: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    corPesoBaixo: {
        backgroundColor: '#fb0',
    },

    corPesoNormal: {
        backgroundColor: '#008000',
    },

    corSobrepeso: {
        backgroundColor: '#FFA07A', //Cor Aprovado: 32cd32
    },

    corObesidade: {
        backgroundColor: '#FF8C00',
    },

    corObsidadeSevera: {
        backgroundColor: '#FF6347',
    },

    corObesidadeMorbida: {
        backgroundColor: '#FF0000',
    },
});

export default styles;