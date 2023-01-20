import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { globalStyle } from '../../../styles/global';
import { SvgUri } from 'react-native-svg';
import Button from '../../components/Button/Button';
import SpaceY from '../../components/SpaceY/SpaceY';
import colors from '../../../styles/colors';
import CircleDecoration from './CircleDecoration';
import Container from '../../components/Container/Container';

type Props = {
  navigation: any;
};

export default function Index({ navigation }: Props) {
  return (
    <Container>
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
            Iniciar sesión
          </Button>
          <SpaceY height={12} />
          <Button handler={() => {}} secondary={true}>
            Crear Cuenta
          </Button>
          <SpaceY height={12} />
          <Button handler={() => {}} inline={true}>
            ¿Olvidaste tu contraseña?
          </Button>
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
