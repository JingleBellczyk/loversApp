import React, { useEffect } from 'react';
import { Alert, BackHandler } from 'react-native';

function useBackAction(action: () => void) {
  return useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        action();
        return true;
      },
    );

    return () => backHandler.remove();
  }, []);
}

function closeApp() {
  return backAlert("close the app", () => BackHandler.exitApp());
}

function backAlert(description: string, onPress: () => void) {
  console.warn("backAlert is untested")
  Alert.alert('Hold on!', `Are you sure you want to ${description}?`, [
    {
      text: 'Cancel',
      onPress: () => null,
      style: 'cancel',
    },
    {text: 'YES', onPress: () => onPress()},
  ]);
}

export { useBackAction, closeApp, backAlert };