import React from 'react';
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native';
import { globalStyle } from '../../../styles/global';
import { SvgUri } from 'react-native-svg';
import Button from '../../components/Button/Button';
import Divider from '../../components/SpaceY/Divider';
import colors from '../../../styles/colors';
import CircleDecoration from './components/CircleDecoration';
import Container from '../../components/Container/Container';

type Props = {
  navigation: any;
};

export default function Index({ navigation }: Props) {
  return (
    <Container>
      <StatusBar barStyle={'dark-content'} />
      <View style={{ ...globalStyle.container }}>
        <View style={style.decorationTop}>
          <CircleDecoration />
        </View>
        <View style={style.decorationBottom}>
          <CircleDecoration />
        </View>
        <Text style={globalStyle.logo}>Coplan</Text>
        <View style={style.imageContainer}>
          <SvgUri
            style={{
              flex: 1,
            }}
            uri={
              'https://res.cloudinary.com/elvisdev2280/image/upload/v1672764528/coplan/loginpic_mkvhux.svg'
            }
          />
        </View>
        <View style={style.buttonsContainer}>
          <Button handler={() => navigation.navigate('Login')}>
            <Text style={globalStyle.buttonText}>Iniciar sesión</Text>
          </Button>
          <Divider height={12} />
          <Button
            handler={() => navigation.navigate('Signup')}
            secondary={true}
          >
            <Text style={globalStyle.buttonText}>Crear Cuenta</Text>
          </Button>
          <Divider height={12} />
        </View>
      </View>
    </Container>
  );
}

const style = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    justifyContent: 'flex-end',
    marginBottom: 12,
  },
  decorationTop: {
    position: 'absolute',
    top: -125,
    left: -125,
  },
  decorationBottom: {
    position: 'absolute',
    bottom: -140,
    right: -140,
    transform: [{ rotate: '180deg' }],
  },
});
