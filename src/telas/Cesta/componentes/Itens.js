import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Texto from "../../../componentes/Texto";

export default function Itens({titulo, lista}){
   return <>
        <Texto>{ titulo }</Texto>
        {/* map para percorrer uma lista de array e assim pode ser alterado para */}
        {/* retornar uma nova lista */}
        {lista.map(({nome, imagem}) => {
{/* o atributo key serve para dizer qual vai ser o atributo único/id 
da lista que não se repete */}
           return <View>
            <Texto key={nome}>{ nome }</Texto>
            <Image source={imagem}/>
           </View>
        })}
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#44646"
    }
})