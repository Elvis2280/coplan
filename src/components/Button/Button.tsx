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
      <TouchableOpacity onPress={handler} style={styles.buttonSecondary}>
        {<Text style={styles.buttonText}>{children}</Text>}
      </TouchableOpacity>
    );
  }
  if (inline) {
    return (
      <TouchableOpacity onPress={handler} style={styles.buttonInline}>
        {<Text style={styles.buttonInlineText}>{children}</Text>}
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={handler} style={styles.button}>
      {<Text style={styles.buttonText}>{children}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.main600,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  buttonSecondary: {
    backgroundColor: colors.main400,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  buttonInline: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
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
});
