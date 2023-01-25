import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  height?: number;
  width?: number;
};

export default function Divider({ height = 0, width = 0 }: Props) {
  return (
    <View
      style={{
        height: height,
        width: width,
      }}
    ></View>
  );
}
