import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RioOn Bank</Text>
      <Text style={styles.subtitle}>Sejam Bem-vindo(a)s</Text>
    </View>
  );
}