import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { globalStyle } from '../../../styles/global';
import { SvgUri } from 'react-native-svg';
import Button from '../../components/Button/Button';
import Divider from '../../components/Space/Divider';
import CircleDecoration from './components/CircleDecoration';
import Container from '../../components/Container/Container';
import Logo from '../../components/Logo/Logo';

type Props = {
  navigation: any;
};

export default function Index({ navigation }: Props) {
  return (
    <Container>
      <StatusBar barStyle={'dark-content'} />
      <View className=" flex-1 px-4 min-h-max">
        <View className=" absolute -top-28 -left-28">
          <CircleDecoration />
        </View>
        <View className=" absolute -bottom-32 -right-32 rotate-180">
          <CircleDecoration />
        </View>
        <Logo />
        <View className=" flex-1 items-center justify-center">
          <SvgUri
            style={{
              flex: 1,
            }}
            uri={
              'https://res.cloudinary.com/elvisdev2280/image/upload/v1678337126/coplan/Login_pic_n2rtmt.svg'
            }
          />
        </View>
        <View className=" justify-end mb-3">
          <Button handler={() => navigation.navigate('Login')}>
            <Text className=" text-xl text-brand-50 text-center">
              Iniciar sesión
            </Text>
          </Button>
          <Divider height={20} />
          <Button
            handler={() => navigation.navigate('Signup')}
            secondary={true}
          >
            <Text className=" text-xl text-brand-50 text-center">
              Crear Cuenta
            </Text>
          </Button>
          <Divider height={12} />
        </View>
      </View>
    </Container>
  );
}
