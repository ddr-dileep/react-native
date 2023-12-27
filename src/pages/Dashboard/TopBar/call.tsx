import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { dashBoardIcon, homeIcon, tobBarIcon } from '../../../assets';

const CallDetailsScreen = () => {
  const callDetails = [
    { id: 1, name: 'John Doe', type: 'Incoming', time: '10:00 AM' },
    { id: 2, name: 'Alice Smith', type: 'Outgoing', time: '11:30 AM' },
    { id: 3, name: 'Bob Johnson', type: 'Missed', time: 'Yesterday' },
    // Add more call details as needed
  ];

  const getCallImage = (type: any) => {
    switch (type) {
      case 'Incoming':
        return dashBoardIcon;
      case 'Outgoing':
        return tobBarIcon;
      case 'Missed':
        return homeIcon;
      default:
        return null;
    }
  };

  const renderItem = ({ item }:any) => (
    <TouchableOpacity style={styles.callItem} onPress={() => handleCall(item)}>
      <Image source={getCallImage(item.type)} style={styles.callTypeIcon} />
      <View style={styles.callInfo}>
        <Text style={styles.callName}>{item.name}</Text>
        <Text>{item.type} call - {item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleCall = (item: {name: any}) => {
    // Implement logic to initiate the call again based on the selected item
    console.log(`Calling ${item.name}...`);
  };

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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  callTypeIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  callInfo: {
    flex: 1,
  },
  callName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default CallDetailsScreen;
