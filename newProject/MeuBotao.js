import React from 'react'
import {TouchableOpacity, Text} from 'react-native'

class MeuBotao extends React.Component{

  state = {
    texto : 0
  }

  render(){
    return(
      <TouchableOpacity 
      onPress={()=> this.setState({texto:'Me pressione'})}
      style={{
        width:'100%',
        height: 100,
        backgroundColor: 'blue',
        marginBottom:5
      }}>
        <Text style={{
           alignSelf: 'center',
           color: 'white'
        }}>{this.props.texto}</Text>
      </TouchableOpacity>
    )
  }
}

export default MeuBotao