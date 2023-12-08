import React from "react";
import { View, Image, StyleSheet, TouchableOpacity} from "react-native";

import Texto from '../../../componentes/Texto'; //importanto o texto Montserrat


export default function Detalhes({nome, logoFazenda, nomeFazenda, descricao, preco, botao}) {
    return <>

        {/*chamando o estilo da const*/}
        <Texto style={estilos.nome}>{ nome }</Texto>

        {/* para não atrapalhar nos outros componentes está sendo criada outra View */}
        <View style={estilos.fazenda}>
            {/*chamando o logoFazenda*/}
            <Image source={logoFazenda} style={estilos.imagemFazenda} />
            <Texto style={estilos.nomeFazenda}>{ nomeFazenda }</Texto>
        </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>

        {/* touchableOpacity serve para quando clicar no botão ele "apagar" a cor*/}
        {/* onPress={} para a cada clique do touchableOpacity chamar o que estiver */}
        {/*dentro de onPress */}
        <TouchableOpacity style={estilos.botao} >
            <Texto style={estilos.textoBotao}>{botao}</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    nome: {//estilo do nome da cesta
        color: "#464646",
        fontSize: 26,
        lineHeight: 42, //tamanho da linha
        fontWeight: 'bold',
    },
    fazenda: {
        flexDirection: "row",//serve para mudar a ordenação das coisas na tela, organizar a tela, por padraão o flex direction fica como coluna
        //o row serve para deixar como uma linha
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12, //margin a esquerda
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8 //margin do Topo
    },
    botao:{
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,//espaço em cima e em baixo
        borderRadius: 6,//para poder arredondar borda
    },
    textoBotao:{
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",// capturando a propriedada do Texto.js
    }
})