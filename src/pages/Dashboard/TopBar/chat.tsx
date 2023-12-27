import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { id: 1, message: 'Hey there!', sender: 'other' },
    { id: 2, message: 'Hi! How are you?', sender: 'user' },
  ]);

  const sendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = { id: chatHistory.length + 1, message, sender: 'user' };
      setChatHistory([...chatHistory, newMessage]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.contactName}>Contact Name</Text>
        <Text style={styles.onlineStatus}>Online</Text>
      </View>
      <ScrollView style={styles.chatContainer}>
        {chatHistory.map((msg) => (
          <View key={msg.id} style={msg.sender === 'user' ? styles.userMessage : styles.otherMessage}>
            <Text>{msg.message}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  onlineStatus: {
    color: 'green',
  },
  chatContainer: {
    flex: 1,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
    maxWidth: '70%',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
    maxWidth: '70%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
  },
  sendButton: {
    marginLeft: 10,
  },
  sendButtonText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default ChatScreen;
