import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
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
import { zodResolver } from '@hookform/resolvers/zod';
import createAccountSchema from './zodSchema';
import { useStoreUser } from '../../store/zustandStore';
type Props = {
  navigation: any;
};

export default function Index({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const { createUser } = useCreateAccount();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      nombre: '',
      apellido: '',
      email: '',
      password: '',
    },
  });

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
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input onChange={onChange} onBlur={onBlur} value={value} />
                  )}
                  name="nombre"
                  rules={{
                    required: true,
                  }}
                />
                <Text style={globalStyle.errorText}>
                  <ErrorMessage errors={errors} name="nombre" />
                </Text>
              </View>
              <Divider width={20} />
              <View style={{ flex: 1 }}>
                <Text style={globalStyle.label}>Apellido</Text>
                <Divider height={10} />
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input onChange={onChange} onBlur={onBlur} value={value} />
                  )}
                  name="apellido"
                  rules={{ required: true }}
                />
                <Text style={globalStyle.errorText}>
                  <ErrorMessage errors={errors} name="apellido" />
                </Text>
              </View>
            </View>
            <Divider height={20} />
            <View>
              <Text style={globalStyle.label}>Correo electronico</Text>
              <Divider height={10} />
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input onChange={onChange} onBlur={onBlur} value={value} />
                )}
                name="email"
                rules={{ required: true }}
              />
              <Text style={globalStyle.errorText}>
                <ErrorMessage errors={errors} name="email" />
              </Text>
            </View>

            <Divider height={20} />
            <View>
              <Text style={globalStyle.label}>Contraseña</Text>
              <Divider height={10} />
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input onChange={onChange} onBlur={onBlur} value={value} />
                )}
                name="password"
                rules={{ required: true }}
              />
              <Text style={globalStyle.errorText}>
                <ErrorMessage errors={errors} name="password" />
              </Text>
            </View>
            <Divider height={8} />
            <Button inline handler={() => {}}>
              <Text style={globalStyle.buttonInlineText}>
                ¿Olvidaste tu contraseña?
              </Text>
            </Button>
          </View>
          <Divider height={16} />
          <View style={{ marginTop: 'auto' }}>
            <Button
              handler={handleSubmit((data: any) => createUser.mutate(data))}
            >
              {createUser.isLoading ? (
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                  }}
                >
                  <ActivityIndicator size={'small'} color={colors.white} />
                </View>
              ) : (
                <Text style={globalStyle.buttonText}>Crear cuenta</Text>
              )}
            </Button>
            <Divider height={8} />
            <Button inline handler={() => navigation.navigate('Createbudget')}>
              <Text style={globalStyle.buttonInlineText}>
                ¿Ya tienes una cuenta?
              </Text>
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
