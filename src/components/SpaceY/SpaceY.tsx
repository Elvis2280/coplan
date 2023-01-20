import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  height: number;
};

export default function SpaceY({ height }: Props) {
  return (
    <View
      style={{
        height: height,
      }}
    ></View>
  );
}
