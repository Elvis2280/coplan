import React, { useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { StyleSheet, TextInput } from 'react-native';
import colors from '../../../styles/colors';

type Props = {
  control: FieldValues | any;
  name: string;
};

export default function Input({ name, control }: Props) {
  const { field } = useController({
    control,
    defaultValue: '',
    name,
  });
  return (
    <TextInput
      value={field.value}
      onChange={field.onChange}
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
