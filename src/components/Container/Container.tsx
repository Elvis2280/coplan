import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../../../styles/colors';

type Props = {
  children: React.ReactNode;
  topSpace?: boolean;
};

export default function Container({ children, topSpace = true }: Props) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        ...style.container,
        paddingTop: topSpace ? insets.top : 0,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        position: 'relative',
        paddingHorizontal: 16,
        backgroundColor: colors.white,
      }}
    >
      {children}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
