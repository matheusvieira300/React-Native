import React from "react";
import {StyleSheet, Text } from "react-native";

export default function Texto({ children, style }){//children para pegar os componentes filhos de um componente, style para poder manter os styles criados
    //para aquele componente, para que não sejam esquecidos
    let estilo = estilos.texto;
    
    if(style?.fontWeight === 'bold'){//para validar quando for bold ou não e adicionando um Optional através do ? interrogação
        estilo = estilos.textoNegrito;
    }
    return <Text style={[style, estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    texto:{
        fontFamily: "MontserratRegular",
        fontWeight: 'normal'//para deixar padrão e para permitir editar o fontweight quando for usado
    },
    textoNegrito:{
        fontFamily: "MontserratBold",
        fontWeight: 'normal'
    }
})