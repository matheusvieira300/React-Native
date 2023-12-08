import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Texto from "../../../componentes/Texto";

export default function Itens({titulo, lista}){
   return <>
        <Texto style={estilos.titulo}>{ titulo }</Texto>
        {/* map para percorrer uma lista de array e assim pode ser alterado para */}
        {/* retornar uma nova lista */}
        {lista.map(({nome, imagem}) => {
{/* o atributo key serve para dizer qual vai ser o atributo único/id 
da lista que não se repete */}
           return <View key={nome} style={estilos.item}>
            <Image source={imagem} style={estilos.imagem}/>
            <Texto style={estilos.nome}>{ nome }</Texto>
           </View>
        })}
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    item:{
        flexDirection: "row", //para ficar um do lado do outro
        borderBottomWidth: 1,//tem que defininir cado elemento da borda, nesse caso a largura
        borderBottomColor: "#ECECEC", //cor da borda 
        paddingVertical: 16, //para dar espaçamento de cima pra baixo
        alignItems: "center", //alinhar items no centro
    },
    imagem:{
        width: 46,//largura da imagem
        height: 46 //altura
    },
    nome:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color:"#464646",
    },
}); 