import React, { useEffect, useCallback } from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';

import { useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold } from '@expo-google-fonts/montserrat'; //importando a fonte montserrat do google

  import Cesta from './src/telas/Cesta';//tem que importar senão ele não reconhece porém se atentar pois ele não desmonstra erro no código
//o index já é reconhecido automaticamente
import mock from './src/mocks/cesta';

import * as SplashScreen from 'expo-splash-screen';

export default function App() {// componente
const [fonteCarregada] = useFonts({
  "MontserratRegular": Montserrat_400Regular,// definindo um nome para o uso da fonte
  "MontserratBold": Montserrat_700Bold,
}); //chamando a fonte

// if(!fonteCarregada){//se a fonte não estiver carregada
//   return <AppLoading />// para retornar ao usuário que o aplicativo ainda está carregando
//   //enquanto a fonte não estiver carregada vai permanece carregando.
// } Deprecated

useEffect(() => {
  async function prepare() {//função assincrona utilizando SplashScreen
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
  }
  prepare();
}, []);

const onLayoutRootView = useCallback(async () => {
  if (fonteCarregada) {
    await SplashScreen.hideAsync();
  }
}, [fonteCarregada]);

if (!fonteCarregada) {
  return null;
}

  return (
    <SafeAreaView>
       {/* Safe Area View style propriedade e auto valor da propriedade */}
      <StatusBar />
      {/*...mock é o mesmo que chamar todos os paramtros do const dentro do mock*/}
      <Cesta {...mock}/>   
      {/*estrutura xml JSX */}
      {/* View componente  */}
    </SafeAreaView> 
  );
}