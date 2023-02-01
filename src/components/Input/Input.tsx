import React, { useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { StyleSheet, TextInput } from 'react-native';
import colors from '../../../styles/colors';

type Props = {
  onChange: ((text: string) => void) | (() => void);
  value: any;
  onBlur?: () => void;
};

export default function Input({ onBlur, onChange, value }: Props) {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
      style={{
        ...style.input,
      }}
    />
  );
}

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: 44,
    borderRadius: 4,
    borderColor: colors.main600,
    paddingHorizontal: 8,
    fontSize: 16,
    color: colors.main900,
  },
});
