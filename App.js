import React from 'react';
import { StyleSheet, Text, View, TextInput,Image } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {texto1:'Digite alguma coisa!',texto2:''};
    this.escrever = this.escrever.bind(this);
  }

  mudarVogais(texto){
    let novo = texto.toLowerCase();
    novo = novo.replace(/(a|e|i|o|u)/g, 'i');
    novo = novo.replace(/(ã|á|à|â)/g, 'i');
    novo = novo.replace(/(é|è|ẽ|ê)/g, 'i');
    novo = novo.replace(/(í|ì|ĩ|î)/g, 'i');
    novo = novo.replace(/(ó|ò|õ|ô)/g, 'i');
    novo = novo.replace(/(ú|ù|û|ũ)/g, 'i');

    return novo;
  }
  escrever(t){
    let s = this.state;
    s.texto1 = t;
    s.texto2 = this.mudarVogais(t);
    this.setState(s);
  }

  render() {
    return (
        <View style={styles.body}>
          <View>
            <Text style={styles.title}>Generate Mimimi</Text>
          </View>
          <View style={styles.inputArea}>
            <TextInput style={styles.input} placeholder={"Digite uma frase!"} onChangeText={this.escrever}/>
          </View>
          <View style={styles.area}>
            <Text style={[styles.texto, styles.texto1]}>{this.state.texto1.toUpperCase()}</Text>
            <Image style={styles.guri} source={require('./images/mimimi.jpg')}/>
            <Text style={[styles.texto, styles.texto2]}>{this.state.texto2.toUpperCase()}</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    backgroundColor: 'tomato',
    paddingTop:30
  },
  title:{
    fontSize:30,
    color: '#FFF'
  },
  inputArea:{
    alignSelf: 'stretch'
  },
  input:{
    borderWidth: 1,
    borderColor:'#999',
    backgroundColor: '#EEE',
    color:'#000',
    height:40,
    margin: 20,
    padding:10
  },
  area:{
    width:300,
    height: 300,
    marginTop: 10
  },
  guri:{
    width: 300,
    height:300,
    marginTop:-80,
    zIndex: 0
  },
  texto:{
    fontSize: 25,
    color:'#FFF',
    padding: 10,
    backgroundColor:'transparent',
    fontWeight: 'bold',
    textAlign: 'center',
    height:80
  },
  texto1:{
    zIndex: 1

  },
  texto2:{
    zIndex: 1,
    marginTop:-80
  }
});
