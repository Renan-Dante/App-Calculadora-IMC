import { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import Result from "./Result";

export default function Form() {
    const [peso, setPeso] = useState(null)
    const [altura, setAltura] = useState(null)
    const [msgCalculo, setMsgCalculo] = useState(null)
    const [msgResultado, setMsgResultado] = useState(null)
    const [imc, setIMC] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function calcularIMC(peso, altura) {
        let imcFinal = ((Number.parseFloat(peso) / (Number.parseFloat(altura) * Number.parseFloat(altura))))
        setIMC(imcFinal.toFixed(1))
        resultado(imcFinal.toFixed(1))
    }

    function resultado(imc) {
        if (imc < 18.5) {
            setMsgResultado("Peso Baixo")
        } else if (imc >= 18.5 && imc < 24.9) {
            setMsgResultado("Peso Normal")
        } else if (imc >= 25 && imc < 29.9) {
            setMsgResultado("Sobrepeso")
        } else if (imc >= 30 && imc < 34.9) {
            setMsgResultado("Obesidade (GRAU I)")
        } else if (imc >= 35 && imc < 39.9) {
            setMsgResultado("Obesidade Severa (GRAU II)") 
        } else {
            setMsgResultado("Obesidade Mórbida (GRAU III)")
        }
    }

    function validacaoIMC() {
        if (peso != null && altura != null) {
            let pesoFormat = peso.replace(",", ".")
            let alturaFormat = altura.replace(",", ".")    
       
            if (pesoFormat > 0 && alturaFormat > 0) {
                calcularIMC(pesoFormat, alturaFormat)
                setPeso(null)
                setAltura(null)
                setMsgCalculo(null)
                setTextButton("Calcular Novamente")
            } else {
                setMsgCalculo("Valor inválido!")
                setPeso(null)
                setAltura(null)
                setTextButton("Calcular")
            }
        } else {
            setMsgCalculo("Preencha todos os campos!")
            setIMC(null)
        }
    }

    return (
        <View style={styles.form}>
            {imc == null ?
                <View>
                    {/* Condição que verifica se há mensagem de erro */}
                    {msgCalculo != null && (
                        <Text style={styles.alerta}>{msgCalculo}</Text>
                    )}
                    <Text style={styles.label}>Digite a sua Altura</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={altura}
                        onChangeText={setAltura}
                    />

                    <Text style={styles.label}>Digite o seu Peso</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={peso}
                        onChangeText={setPeso}
                    />

                    <TouchableOpacity onPress={() => validacaoIMC()}>
                        <Text style={styles.buttom}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
                :
                <View>
                    <Result imc={imc} msgResultado={msgResultado} />
                    <TouchableOpacity onPress={() => validacaoIMC()}>
                        <Text style={styles.buttom}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
}