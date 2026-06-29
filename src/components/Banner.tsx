import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface BannerProps {
  imageUrl: string;
  text: string;
}

export default function Banner({ imageUrl, text }: BannerProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 160,
  },
  textContainer: {
    padding: 10,
  },
  text: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
});