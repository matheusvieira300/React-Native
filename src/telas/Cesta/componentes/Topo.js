import React from "react";
import { Image, StyleSheet, Dimensions} from "react-native";

import Texto from "../../../componentes/Texto";

import topo from "../../../../assets/topo.png";

const width = Dimensions.get('screen').width;//para poder pegar a largura da tela, screen width

export default function Topo({ titulo }){
    return <>{/*<> fragmento serve para agrupar*/}
    {/*//para adicionar imagem no react native, source o caminho 8*/}
    <Image source={topo} style={estilos.topo} /> 
    {/*passando o título abaixo atráves do cesta.js*/}
    <Texto style={estilos.titulo}> {titulo} </Texto>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%", //largura da imagem
        height: 578 / 768 * width, //altura da imagem dividida pela largura total da image multiplicada pela largura da imagem
    },
    titulo: {
        width: "100%",//para definir o tamanho
        position: 'absolute',//para jogar o texto para cima 
        textAlign: 'center',//para centralizar o texto
        fontSize: 16, //altura da fonte
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",//para deixar a fonte com negrito
        padding: 16//espaçamento do topo 
        },
});