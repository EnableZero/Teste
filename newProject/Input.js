import React from 'react';
import { TextInput } from 'react-native';

class MeuInput extends React.Component {
  state = {
    text: 'Paçoca '
  };

  render(){
    return (
      <TextInput
        label='Email'
        value={this.props.texto} 
	onChangeText={text => this.setState({ text })}
	
      />
    );
  }
}

export default MeuInput