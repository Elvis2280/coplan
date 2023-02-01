import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Container from '../../components/Container/Container';
import { globalStyle } from '../../../styles/global';
import Divider from '../../components/SpaceY/Divider';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import Input from '../../components/Input/Input';
import userBudgetSchema from './zodBudgetSchema';
import { ErrorMessage } from '@hookform/error-message';
import { MaskedTextInput } from 'react-native-mask-text';
import usePorcentInputControl from '../../hooks/usePorcentInputControl';
import Button from '../../components/Button/Button';
import colors from '../../../styles/colors';
type Props = {};

export default function Index({}: Props) {
  const {
    onChangeHandler,
    onBlurHandler,
    checkCompletePorcent,
    isFullPorcent,
    generateMoneyOnFieldByPorcent,
    inputBySalary,
    inputsPorcent,
  } = usePorcentInputControl();

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: zodResolver(userBudgetSchema),
    defaultValues: {
      salario: '',
      porcentaje_ahorro: '',
      porcentaje_gastos: '',
      porcentaje_entretenimiento: '',
    },
  });

  useEffect(() => {
    const moneySalario = Number(getValues().salario);
    generateMoneyOnFieldByPorcent(moneySalario);
  }, [getValues().salario]); // check when money field change for calculate the money by porcent

  useEffect(() => {
    const moneySalario = Number(getValues().salario);
    if (moneySalario > 0) generateMoneyOnFieldByPorcent(moneySalario);
  }, [inputsPorcent]); // check when any porcent field change for calculate the money by that porcent
  return (
    <Container>
      <View style={{ ...globalStyle.container, flex: 1 }}>
        <Text style={globalStyle.logo}>Coplan</Text>
        <Divider height={24} />
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View>
              <Text style={globalStyle.label}>Salario</Text>
              <Divider height={10} />
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <MaskedTextInput
                    type="currency"
                    options={{
                      prefix: '$',
                      decimalSeparator: '.',
                      groupSeparator: ',',
                      precision: 2,
                    }}
                    onChangeText={(text) => {
                      const moneyToNumber = Number(text.replace('$', ''));
                      onChange(moneyToNumber);
                      generateMoneyOnFieldByPorcent(moneyToNumber);
                    }}
                    style={globalStyle.input}
                    keyboardType="numeric"
                  />
                )}
                name="salario"
                rules={{
                  required: true,
                }}
              />
              <Text style={globalStyle.errorText}>
                <ErrorMessage errors={errors} name="salario" />
              </Text>
            </View>
            <Divider height={8} />
            <View>
              <Text style={globalStyle.label}>Porcentaje para gastos</Text>
              <Divider height={10} />
              <View style={styles.fieldBox}>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      onBlur={onBlurHandler}
                      onChange={(val) => {
                        onChange(onChangeHandler(val, 'gastosPorcent'));
                      }}
                      value={value}
                    />
                  )}
                  name="porcentaje_gastos"
                  rules={{
                    required: true,
                  }}
                />
                <View style={styles.boxSalaryPerPorcent}>
                  <Text style={styles.moneyPerPorcentText}>
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(inputBySalary.gastos)}
                  </Text>
                </View>
              </View>
              <Text style={globalStyle.errorText}>
                <ErrorMessage errors={errors} name="porcentaje_gastos" />
              </Text>
            </View>
            <Divider height={8} />
            <View>
              <Text style={globalStyle.label}>
                Porcentaje para entretenimiento
              </Text>
              <Divider height={10} />
              <View style={styles.fieldBox}>
                <Controller
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      onBlur={onBlurHandler}
                      onChange={(val) => {
                        onChange(
                          onChangeHandler(val, 'entretenimientoPorcent'),
                        );
                      }}
                      value={value}
                    />
                  )}
                  name="porcentaje_entretenimiento"
                  rules={{
                    required: true,
                  }}
                />
                <View style={styles.boxSalaryPerPorcent}>
                  <Text style={styles.moneyPerPorcentText}>
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(inputBySalary.entretenimiento)}
                  </Text>
                </View>
              </View>
              <Text style={globalStyle.errorText}>
                <ErrorMessage
                  errors={errors}
                  name="porcentaje_entretenimiento"
                />
              </Text>
            </View>
            <Divider height={8} />
            <View>
              <Text style={globalStyle.label}>Porcentaje para ahorro</Text>
              <Divider height={10} />
              <View style={styles.fieldBox}>
                <Controller
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      onBlur={onBlurHandler}
                      onChange={(val) => {
                        onChange(onChangeHandler(val, 'ahorroPorcent'));
                      }}
                      value={value}
                    />
                  )}
                  name="porcentaje_ahorro"
                  rules={{
                    required: true,
                  }}
                />
                <View style={styles.boxSalaryPerPorcent}>
                  <Text style={styles.moneyPerPorcentText}>
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(inputBySalary.ahorro)}
                  </Text>
                </View>
              </View>
              <Text style={globalStyle.errorText}>
                <ErrorMessage errors={errors} name="porcentaje_ahorro" />
              </Text>
              <Text style={globalStyle.errorText}>
                {!isFullPorcent && 'Debe repartir el 100% de su salario'}
              </Text>
            </View>
          </ScrollView>
        </View>
        <View>
          <Button
            handler={() => {
              checkCompletePorcent();
              console.log(getValues());
            }}
          >
            <Text style={globalStyle.buttonText}>Siguiente</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
}
const styles = StyleSheet.create({
  boxSalaryPerPorcent: {
    position: 'absolute',
    height: '100%',
    left: 80,
    justifyContent: 'center',
  },
  fieldBox: { position: 'relative' },
  moneyPerPorcentText: {
    color: colors.main300,
  },
});
