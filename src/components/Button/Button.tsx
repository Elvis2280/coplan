import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../../styles/colors';

type Props = {
  children: React.ReactNode;
  secondary?: boolean;
  inline?: boolean;
  handler: () => void;
};

export default function Button({
  children,
  secondary = false,
  inline = false,
  handler,
}: Props) {
  if (secondary) {
    return (
      <TouchableOpacity
        className=" py-4 px-2 rounded bg-brand-500"
        onPress={handler}
      >
        {<Text>{children}</Text>}
      </TouchableOpacity>
    );
  }
  if (inline) {
    return (
      <TouchableOpacity onPress={handler}>
        {<Text>{children}</Text>}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      className=" py-4 px-2 rounded bg-brand-600"
      onPress={handler}
    >
      {children}
    </TouchableOpacity>
  );
}
