import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ChatHomeScreen = ({ navigation }: any) => {
  const contacts = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Alice Smith'},
    {id: 3, name: 'Bob Johnson'},
    {id: 4, name: 'jsoo dow'},
    {id: 5, name: 'Bob best w'},
    {id: 13, name: 'John Doe'},
    {id: 23, name: 'Alice Smith'},
    {id: 33, name: 'Bob Johnson'},
    {id: 43, name: 'jsoo dow'},
    {id: 53, name: 'Bob best w'},
  ];

  const navigateToChat = (contactName: string) => {
    navigation.navigate('Chat', { contact: contactName });
  };

  const renderContact = ({item}: any) => (
    <TouchableOpacity
      onPress={() => navigateToChat(item.name)}
      style={styles.contact}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
      </View>
      <Text style={styles.contactName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={renderContact}
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
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ChatHomeScreen;
