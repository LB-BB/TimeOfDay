
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import TimeOfDay from './components/TimeOfDay/TimeOfDay';

const App = () => {
  return (
    <SafeAreaView>
      <View style={{height: '100%'}}>
        <TimeOfDay />
      </View>
    </SafeAreaView>
  );
};

export default App;
