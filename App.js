/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {
  SafeAreaView,
  Button,
  StyleSheet,
 
} from 'react-native';
import notifee from '@notifee/react-native';





const App: () => Node = () => {
  
  async function onDisplayNotification() {
    // Create a channel
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
      },
    });
  }


  return (
    <SafeAreaView >
      <Button title="Display Notification" onPress={() => onDisplayNotification()} />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
