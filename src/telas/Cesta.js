import React from 'react';// para importar o react
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';//componente exportado

import Texto from '../componentes/Texto'; //importanto o texto Montserrat

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;//para poder pegar a largura da tela, screen width

export default function Cesta(){ //export pois está exportando um componente
    return <> 
    {/*<> fragmento serve para agrupar*/}
    {/*//para adicionar imagem no react native, source o caminho 8*/}
    <Image source={topo} style={estilos.topo} /> 
    <Texto style={estilos.titulo}>Detalhe da cesta </Texto>

{/*chamando o padding*/}
    <View style={estilos.cesta}>

{/*chamando o estilo da const*/}
        <Texto style={estilos.nome}>Cesta de Verduras</Texto> 

        {/* para não atrapalhar nos outros componentes está sendo criada outra View */}
        <View style={estilos.fazenda}>
            {/*chamando o logo*/}
            <Image source={logo} style={estilos.imagemFazenda}/> 
        <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>
        <Texto style={estilos.descricao}>
            Uma cesta com Produtos selecionados 
            cuidadosamente da fazenda direto 
            para sua cozinha
        </Texto>
        <Texto style={estilos.preco}>R$ 40,00</Texto>
    </View>
    </>
}

const estilos = StyleSheet.create({ // estilo da imagem, stylesheet é utilizado para otimizar os estilos no react native
    topo: {
        width: "100%", //largura da imagem
        height: 578 / 768 * width, //altura da imagem dividida pela largura total da image multiplicada pela largura da imagem
    },
    titulo: {
        width: "100%",//para definir o tamanho
        position: 'absolute',//para jogar o texto para cima 
        textAlign: 'center',//para centralizar o texto
        fontSize: 15, //altura da fonte
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",//para deixar a fonte com negrito
        padding: 16//espaçamento do topo 
        },
    cesta:{
        paddingVertical: 8,//padding de cima e de baixo
        paddingHorizontal:16, //esquerda e direita
    },
    nome: {//estilo do nome da cesta
        color: "#464646",
        fontSize: 26,
        lineHeight:42, //tamanho da linha
        fontWeight: 'bold',
    },
    fazenda:{
        flexDirection: "row",//serve para mudar a ordenação das coisas na tela, organizar a tela, por padraão o flex direction fica como coluna
        //o row serve para deixar como uma linha
        paddingVertical: 12,
    },
    imagemFazenda:{
        width: 32,
        height: 32,
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12, //margin a esquerda
    },
    descricao:{
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco:{
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8 //margin do Topo
    }
});