import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
//import React from 'react';
import { StyleSheet, Text,Button, View } from 'react-native';

class App extends Component {
  constructor(){
      
    super();
    this.state = {
        contador: 0
};
}
somar() {
this.setState({contador:this.state.contador+1})
}

diminuir() {
  if(this.state.contador>0){
this.setState({contador:this.state.contador-1})
  }
  else{

  }
}
  
  render(){
  
    return(
      <View>
            
        <Text style={{color: 'FF0000', fontSize:25, margin: 45, textAlign: 'center'}}>Contador de Pessoas</Text>
        
        <Text style={{fontSize: 50, fontWeight: 'bold', textAlign: 'center' }}>{this.state.contador}</Text>

        <Button style={{color: '00FF00', fontSize:25}}
        title="+"
        onPress={() => this.somar()}
      />
      
          <Button style={{color: 'FF0000', fontSize:25}}
        title="-"
        onPress={() => this.diminuir()}
      />
      
      
      
      </View>
    )
  }
}

export default App;