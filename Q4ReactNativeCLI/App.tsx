import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './style';
import {Square} from './Square';
import data from './data';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {data.map((item, index) => (
          <Square key={index} text={`Square ${index + 1}`} />
        ))}
      </ScrollView>
    </View>
  );
};

export default App;
