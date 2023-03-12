import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

type Props = {};

export default function CircleDecoration({}: Props) {
  return (
    <SvgUri
      style={{
        flex: 1,
      }}
      uri={
        'https://res.cloudinary.com/elvisdev2280/image/upload/v1678337276/coplan/Ellipse_2_obfpnd.svg'
      }
    />
  );
}
