import React from 'react';// para importar o react
import { ScrollView, StyleSheet, View } from 'react-native';//componente exportado


import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Itens from './componentes/Itens';


export default function Cesta({topo, detalhes, itens}) { //export pois está exportando um componente 
    //nos parametros está a descontrução para chamar o que está dentro da const em cesta.js
    return <ScrollView>
      {/* scrollview permitir rolagem da tela */}
          <Topo {...topo} />

        {/*chamando o padding*/}
        <View style={estilos.cesta}>
      <Detalhes {...detalhes} />
      <Itens {...itens}/>
    </View>
  </ScrollView>
}

const estilos = StyleSheet.create({ // estilo da imagem, stylesheet é utilizado para otimizar os estilos no react native

    cesta: {
        paddingVertical: 8,//padding de cima e de baixo
        paddingHorizontal: 16, //esquerda e direita
    },

});