import React from 'react'
import { View, Text, Button,TextInput } from 'react-native'
import MeuBotao from './MeuBotao'
import MeuInput from './Input'

state={
	value:0,
}

class App extends React.Component{
  render(){
    return(
      <View>
        <MeuBotao texto = 'Incrementar'/>
        <MeuBotao texto = 'Decrementar'/>
	<MeuInput 
	texto = 'Altura'
	color='gray'
	/>
      </View>
    )
  }
}

export default App