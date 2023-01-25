import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgUri } from 'react-native-svg';
import colors from '../../../styles/colors';
import { globalStyle } from '../../../styles/global';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Input from '../../components/Input/Input';
import Divider from '../../components/SpaceY/Divider';

type Props = {
  navigation: any;
};

export default function Index({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { control, handleSubmit } = useForm();
  return (
    <Container topSpace={false}>
      <View style={{ ...style.topCircle, paddingTop: insets.top }}>
        <Text style={{ ...globalStyle.logo, color: colors.white }}>Coplan</Text>
        <View style={style.imageDecorationTop}>
          <SvgUri
            style={{
              flex: 1,
            }}
            uri={
              'https://res.cloudinary.com/elvisdev2280/image/upload/v1672939130/coplan/loginIllustration_t8dyab.svg'
            }
          />
        </View>
      </View>
      <Divider height={30} />
      <View style={{ ...globalStyle.container }}>
        <View>
          <Text style={style.title}>Hey, Hola de nuevo✌🏼!</Text>
          <View>
            <Text style={style.label}>Correo electronico</Text>
            <Divider height={10} />
            <Input control={control} name="email" />
          </View>
          <Divider height={20} />
          <View>
            <Text style={style.label}>Contraseña</Text>
            <Divider height={10} />
            <Input control={control} name="password" />
          </View>
          <Divider height={8} />
          <Button inline handler={() => {}}>
            ¿Olvidaste tu contraseña?
          </Button>
        </View>

        <View style={{ marginTop: 'auto' }}>
          <Button handler={() => {}}>Iniciar sesión</Button>
          <Divider height={8} />
          <Button inline handler={() => {}}>
            ¿No tienes una cuenta?
          </Button>
        </View>
      </View>
    </Container>
  );
}

const style = StyleSheet.create({
  topCircle: {
    width: '100%',
    height: 330,
    backgroundColor: colors.main500,
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
    position: 'relative',
  },
  imageDecorationTop: {
    position: 'absolute',
    width: '100%',
    bottom: 40,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  label: {
    fontSize: 18,
    color: colors.main900,
  },

  input: {
    borderWidth: 1,
    height: 44,
    borderRadius: 4,
    borderColor: colors.main600,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.main600,
    marginBottom: 20,
    textAlign: 'center',
  },
});
