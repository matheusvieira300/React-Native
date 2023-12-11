import React from 'react';// para importar o react
import { FlatList, StyleSheet, View } from 'react-native';//componente exportado


import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';
import Texto from '../../componentes/Texto';


export default function Cesta({ topo, detalhes, itens }) { //export pois está exportando um componente 
  //nos parametros está a descontrução para chamar o que está dentro da const em cesta.js
  return <>

    <FlatList
      data={itens.lista}
      renderItem={Item}
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={() => {
        return <>
          {/* scrollview permitir rolagem da tela, pórem o Flatlist também já efetua o scroll da tela e mais otimizado */}
          <Topo {...topo} />
          {/*chamando o padding*/}
          <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Texto style={estilos.titulo}>{itens.titulo}</Texto>
          </View>
        </>
      }}
    />
  </>
}

const estilos = StyleSheet.create({ // estilo da imagem, stylesheet é utilizado para otimizar os estilos no react native
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
  },
  cesta: {
    paddingVertical: 8,//padding de cima e de baixo
    paddingHorizontal: 16, //esquerda e direita
  },

});