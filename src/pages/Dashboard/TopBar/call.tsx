import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CallScreen = () => {
  const callDetails = [
    { id: 1, name: 'John Doe', type: 'Incoming', time: '10:00 AM' },
    { id: 2, name: 'Alice Smith', type: 'Outgoing', time: '11:30 AM' },
    // Add more call details as needed
  ];

  const renderItem = ({ item }:any) => (
    <View style={styles.callItem}>
      <Text style={styles.callName}>{item.name}</Text>
      <Text>{item.type} call - {item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={callDetails}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  callItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  callName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default CallScreen;
