import { StyleSheet } from 'react-native';
import colors from './colors';
export const globalStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    minHeight: 10,
    flex: 1,
  },
  logo: {
    fontFamily: 'Lato_900Black',
    color: colors.main900,
    fontSize: 28,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    color: colors.main900,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
  },
  buttonInlineText: {
    color: colors.main200,
    fontSize: 18,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
  },
});
