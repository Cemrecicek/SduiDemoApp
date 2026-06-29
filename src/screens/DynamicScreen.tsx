import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { ComponentMap } from '../utils/componentMap';

export default function DynamicScreen() {
  const [layout, setLayout] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const myComputerIP = '192.168.1.X';

    // standart_user_page | premium_user_page
    const userType = 'premium_user_page';

    fetch(`http://${myComputerIP}:3000/${userType}`)
      .then(response => response.json())
      .then(data => {
        setLayout(data);
        setLoading(false);
      })
      .catch(err => {
        console.log('Hata:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#8e44ad" />
        <Text style={styles.loadingText}>Arayüz Sunucudan Yükleniyor...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {layout.map((componentData, index) => {
        const TargetComponent = ComponentMap[componentData.type];

        if (!TargetComponent) {
          return (
            <View key={index} style={styles.errorCard}>
              <Text style={styles.errorText}>
                Desteklenmeyen Bileşen: "{componentData.type}" (Lütfen
                uygulamayı güncelleyin)
              </Text>
            </View>
          );
        }

        return <TargetComponent key={index} {...componentData.props} />;
      })}
      <View style={styles.bottomSpacer} />{' '}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
    fontSize: 14,
  },
  errorCard: {
    margin: 15,
    padding: 10,
    backgroundColor: '#fadbd8',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e74c3c',
  },
  errorText: {
    color: '#c0392b',
    fontSize: 12,
    fontWeight: 'bold',
  },
  bottomSpacer: {
    height: 40,
  },
});
