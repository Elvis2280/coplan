import { Text, View, StatusBar } from 'react-native';
import React from 'react';
import Container from '../../components/Container/Container';

type Props = {};

export default function Dashboard({}: Props) {
  return (
    <Container>
      <StatusBar barStyle={'dark-content'} />
    </Container>
  );
}
