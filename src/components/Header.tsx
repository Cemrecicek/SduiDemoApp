import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
  backgroundColor?: string;
}

export default function Header({ title, backgroundColor = '#3498db' }: HeaderProps) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});