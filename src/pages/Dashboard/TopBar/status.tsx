import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatusScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.statusTitle}>My Status</Text>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Available</Text>
        <Text style={styles.statusTime}>Just now</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  statusTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  statusContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
  },
  statusText: {
    fontSize: 18,
    marginBottom: 5,
  },
  statusTime: {
    color: '#777',
  },
});

export default StatusScreen;
