import React from 'react';
import { useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgUri } from 'react-native-svg';
import colors from '../../../styles/colors';
import { globalStyle } from '../../../styles/global';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Input from '../../components/Input/Input';
import Divider from '../../components/SpaceY/Divider';
import useCreateAccount from './hooks/useCreateAccount';

type Props = {
  navigation: any;
};

type fieldSchema = {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
};

export default function Index({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { createUser } = useCreateAccount();
  const { control, handleSubmit } = useForm();
  console.log('Loading', createUser.isLoading);
  console.log('success', createUser.isSuccess);
  console.log('data', createUser.data);
  console.log('error', createUser.error);
  console.log('es error', createUser.isError);
  return (
    <ScrollView>
      <Container topSpace={false}>
        <View style={{ ...style.topCircle, paddingTop: insets.top }}>
          <Text style={{ ...globalStyle.logo, color: colors.white }}>
            Coplan
          </Text>
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
            <Text style={style.title}>Hey, Bienvenido✌🏼!</Text>

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View style={{ flex: 1 }}>
                <Text style={globalStyle.label}>Nombre</Text>
                <Divider height={10} />
                <Input control={control} name="nombre" />
              </View>
              <Divider width={20} />
              <View style={{ flex: 1 }}>
                <Text style={globalStyle.label}>Apellido</Text>
                <Divider height={10} />
                <Input control={control} name="apellido" />
              </View>
            </View>
            <Divider height={20} />
            <View>
              <Text style={globalStyle.label}>Correo electronico</Text>
              <Divider height={10} />
              <Input control={control} name="email" />
            </View>

            <Divider height={20} />
            <View>
              <Text style={globalStyle.label}>Contraseña</Text>
              <Divider height={10} />
              <Input control={control} name="password" />
            </View>
            <Divider height={8} />
            <Button inline handler={() => {}}>
              ¿Olvidaste tu contraseña?
            </Button>
          </View>
          <Divider height={16} />
          <View style={{ marginTop: 'auto' }}>
            <Button
              handler={handleSubmit((data: any) => createUser.mutate(data))}
            >
              {createUser.isLoading ? (
                <ActivityIndicator size={'small'} color={colors.white} />
              ) : (
                'Crear cuenta'
              )}
            </Button>
            <Divider height={8} />
            <Button inline handler={() => {}}>
              ¿Ya tienes una cuenta?
            </Button>
          </View>
        </View>
      </Container>
    </ScrollView>
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

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.main600,
    marginBottom: 20,
    textAlign: 'center',
  },
});
