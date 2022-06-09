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
import { not } from 'react-native-reanimated';





const App: () => Node = () => {
  
  async function onDisplayNotification() {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
  
    // Required for iOS
    // See https://notifee.app/react-native/docs/ios/permissions
    await notifee.requestPermission();
  
    const notificationId = await notifee.displayNotification({
      id: '123',
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
      },
    });
  
    // Sometime later...
    await notifee.displayNotification({
      id: '123',
      title: 'Updated Notification Title',
      body: 'Updated main body content of the notification',
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
