import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const App = () => {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [preco, setPreco] = useState('');

  const handleSubmit = () => {
    console.log('Fabricante:', marca);
    console.log('Modelo:', modelo);
    console.log('Preço:', preco);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={require('./57e04903bd3475ffa87c0552b01d6801.jpg')} style={styles.imageBackground}>
          <Text style={styles.title}>Concessionaria de Veículos</Text>
        </ImageBackground>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Fabricante:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setMarca(text)}
            value={marca}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Modelo:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setModelo(text)}
            value={modelo}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Preço:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPreco(text)}
            value={preco}
          />
        </View>
        <Button 
          title="CADASTRAR/SALVAR" 
          onPress={handleSubmit} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    backgroundImage: 'linear-gradient(to left, RoyalBlue, LightBlue)',
  },
  header: {
    flex: 0.3,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#87CEEB',
    height: 50,
    width: '60%',
    color: 'white',
    borderRadius: 100, 
  },
  form: {
    flex: 0.7,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputLabel: {
        fontSize: 20,

    marginRight: 10,
    minWidth: 100,
    fontWeight: 'bold',
    color:'white',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'blue',
    backgroundColor:'white',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 100, 
    
  },
});

export default App;
