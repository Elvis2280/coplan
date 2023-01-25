import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import colors from '../../../styles/colors';

type Props = {};

export default function Input({}: Props) {
  return (
    <TextInput
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
