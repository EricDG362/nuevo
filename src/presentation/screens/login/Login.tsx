import React, { useState } from 'react';
import {
  Text, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView,
  ImageBackground, StyleSheet, Platform, Keyboard, Pressable, View,
} from 'react-native';

import { Toast } from 'native-base'

import FormularioModal from './FormularioModal';
import { StackActions, useNavigation } from '@react-navigation/native';



const Login = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false)

const navi = useNavigation()


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={estilo.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ImageBackground
          source={require('../../../asset/img/ab.jpg')}
          style={estilo.background}
          resizeMode="cover"
        >
          <TextInput
            style={[estilo.input, estilo.inputPrime]}
            placeholder="EMAIL"
            placeholderTextColor={'#000'}
            keyboardType='email-address'
          />

          <TextInput
            style={[estilo.input]}
            placeholder="PASSWORD"
            placeholderTextColor={'#000'}
            secureTextEntry={true} // Esto oculta el texto
          />

          <Pressable
            style={estilo.boton}
            onPress={() => {
              navi.dispatch(StackActions.replace('NavegacionTop'));
            }}
          >
            <Text style={estilo.botontext}>INGRESAR</Text>
          </Pressable>

          {/* Contenedor que alinea el texto y el botón */}
          <View style={estilo.padre}>
            <Text style={estilo.text}>Si no posees una cuenta. </Text>
            <Pressable
              onPress={() => { setModalVisible(true) }}>
              <Text style={[estilo.text, estilo.textcreate]}>CREAR UNA CUENTA</Text>
            </Pressable>
          </View>

          <FormularioModal

            modalVisible={modalVisible}
            setModalVisible={setModalVisible}

          />


        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1, // Mantén el 100% de la pantalla
  },
  background: {
    flex: 1, // Hace que la imagen de fondo ocupe todo el espacio disponible
    justifyContent: 'center', // Alinea el contenido verticalmente
    alignItems: 'center', // Alinea el contenido horizontalmente
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Blanco con 70% de opacidad
    borderRadius: 15,
    width: '80%',
    height: 35,
    paddingLeft: 10,
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 700,


  },
  inputPrime: {
    marginTop: 450, // Puedes ajustar esto según el espacio necesario
  },
  text: {
    color: '#ffff',
    marginTop: 40, // Asegúrate de que este margen no se apile innecesariamente
  },
  boton: {
    backgroundColor: '#ffff',
    width: '50%',
    borderRadius: 10,
    paddingVertical: 15,
  },
  botontext: {
    textAlign: 'center',
    fontWeight: 900

  },
  // Alineación horizontal y centrado para el texto y el botón de "Crear cuenta"
  padre: {
    display: 'flex',
    flexDirection: 'row', // Esto pone el texto y el botón en una fila
    alignItems: 'center', // Centra verticalmente
    justifyContent: 'center', // Centra horizontalmente
  },
  textcreate: {
    color: 'cyan',
    fontWeight: '700',
  }
});

export default Login;
