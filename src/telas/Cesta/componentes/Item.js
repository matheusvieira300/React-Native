import React from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";

import Texto from "../../../componentes/Texto";

export default function Item({item: {nome, imagem}}) {//alterado os parâmetros da função para que fossem os mesmos do rendem item

    //item para pegar os pârametros
    return <View key={nome} style={estilos.item}>
        <Image source={imagem} style={estilos.imagem} />
        <Texto style={estilos.nome}>{nome}</Texto>
    </View>
}

const estilos = StyleSheet.create({
   
    item: {
        flexDirection: "row", //para ficar um do lado do outro
        borderBottomWidth: 1,//tem que defininir cado elemento da borda, nesse caso a largura
        borderBottomColor: "#ECECEC", //cor da borda 
        paddingVertical: 16, //para dar espaçamento de cima pra baixo
        marginHorizontal:16,// para margem nas laterais
        alignItems: "center", //alinhar items no centro
    },
    imagem: {
        width: 46,//largura da imagem
        height: 46 //altura
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    },
}); 