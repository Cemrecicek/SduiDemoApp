import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

interface ProductCardProps {
  productName: string;
  price: string;
}

export default function ProductCard({ productName, price }: ProductCardProps) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>{productName}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => Alert.alert('Başarılı', `${productName} sepete eklendi!`)}
      >
        <Text style={styles.buttonText}>Ekle</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  price: {
    fontSize: 14,
    color: '#e74c3c',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#2ecc71',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});