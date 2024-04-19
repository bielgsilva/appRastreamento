import React from 'react';
import Main from './src/pages/Main';
import { StatusBar } from 'expo-status-bar';

export default function MainRoutes() {
  return (
    <>
      <Main />
      <StatusBar style='auto' />
    </>
  );
}
