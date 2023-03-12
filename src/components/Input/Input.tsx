import React, { useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { StyleSheet, TextInput, View } from 'react-native';
import colors from '../../../styles/colors';
import Button from '../Button/Button';
import Icon from 'react-native-vector-icons/Feather';
import useTrigger from '../../hooks/useTrigger';
type Props = {
  onChange: ((text: string) => void) | (() => void);
  value: any;
  onBlur?: () => void;
  passwordInput?: boolean;
};

export default function Input({
  onBlur,
  onChange,
  value,
  passwordInput,
}: Props) {
  const { bool, triggerBool } = useTrigger({ initialBool: false });
  if (passwordInput) {
    return (
      <View className=" relative">
        <TextInput
          secureTextEntry={!bool}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          textAlignVertical="center"
          className="border h-14 rounded border-brand-600 px-2 text-base text-brand-900"
        />
        {passwordInput && (
          <View className=" flex items-center absolute top-2/4 right-4 -translate-y-2">
            <Button inline handler={triggerBool}>
              <Icon size={20} name={`${bool ? 'eye' : 'eye-off'}`} />
            </Button>
          </View>
        )}
      </View>
    );
  }

  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
      className="border h-14 rounded border-brand-600 px-2 text-base text-brand-900"
    />
  );
}
