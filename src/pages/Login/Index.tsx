import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import colors from '../../../styles/colors';
import { globalStyle } from '../../../styles/global';
import Container from '../../components/Container/Container';

type Props = {
  navigation: any;
};

export default function Index({ navigation }: Props) {
  return (
    <Container topSpace={false}>
      <View style={style.decoration}></View>
      <View style={{ ...globalStyle.container }}>
        <View>
          <Text>Login</Text>
          <SvgUri
            style={{
              flex: 1,
            }}
            uri={
              'https://res.cloudinary.com/elvisdev2280/image/upload/v1672764528/coplan/loginpic_mkvhux.svg'
            }
          />
        </View>
      </View>
    </Container>
  );
}

const style = StyleSheet.create({
  decoration: {
    height: 275,
    backgroundColor: colors.main500,
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
    position: 'absolute',
  },
});
