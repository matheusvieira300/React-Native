import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/Cesta';//tem que importar senão ele não reconhece porém se atentar pois ele não desmonstra erro no código

import { useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold } from '@expo-google-fonts/montserrat'; //importando a fonte montserrat do google

export default function App() {// componente
const [fonteCarregada] = useFonts({
  "MontserratRegular": Montserrat_400Regular,// definindo um nome para o uso da fonte
  "MontserratBold": Montserrat_700Bold,
}); //chamando a fonte

if(!fonteCarregada){//se a fonte não estiver carregada
  return <View />// enquanto a fonte não estiver carregada vai ser retornada uma tela em branco
}
  return (
    <SafeAreaView>
       {/* Safe Area View style propriedade e auto valor da propriedade */}
      <StatusBar/>
      <Cesta/>   
      {/*estrutura xml JSX */}
      {/* View componente  */}
    </SafeAreaView> 
  );
}