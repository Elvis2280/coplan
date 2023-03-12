import React from 'react';
import { Text } from 'react-native';

type Props = {
  secondary?: boolean;
};

export default function Logo({ secondary }: Props) {
  return (
    <Text
      className={`text-3xl font-bold text-center ${
        secondary ? 'text-brand-50' : 'text-brand-900'
      }`}
    >
      Coplan
    </Text>
  );
}
