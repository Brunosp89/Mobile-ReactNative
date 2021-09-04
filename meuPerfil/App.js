
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class App extends Component {
  render(){
  let nome = 'Bruno da Silva Pereira';
  let img = 'https://avatars.githubusercontent.com/u/54291460?v=4';
  return (
    <View style={{margin: 40,}}>
      <Text style={{ fontSize:30, fontWeight: 'bold', textAlign: 'center' }}> Meu Perfil</Text>
      <Image source={{uri: img}} style={{width:200, height:200, borderRadius:100, margin: 60}}/>
      <Text style={{ fontSize:20, textAlign: 'center' }}>{nome}</Text>
      <Text style={{ fontSize:20, fontWeight: 'bold',margin: 20, textAlign: 'center' }}>Formação</Text>
      <Text style={{ fontSize:20, textAlign: 'center' }}>Superior Incompleto</Text>
      <Text style={{ fontSize:20, fontWeight: 'bold',margin: 20, textAlign: 'center' }}>Experiência</Text>
      <Text style={{ fontSize:20, textAlign: 'center' }}>HTML, CSS, JavaScript</Text>
      <Text style={{ fontSize:20, fontWeight: 'bold',margin: 20, textAlign: 'center' }}>Projetos</Text>
      <Text style={{ fontSize:20, textAlign: 'center' }}>https://github.com/Brunosp89</Text>




    </View>
  );
}
}
export default App;

