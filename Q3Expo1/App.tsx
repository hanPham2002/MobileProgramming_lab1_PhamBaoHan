import React from "react";
import { View, ScrollView } from "react-native";
import styles from "./style";
import { Square } from "./Square";
import data from "./data";

export const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        {data.map((item, index) => (
          <Square key={item} text={`Square ${(index = 1)}`} />
        ))}
      </ScrollView>
    </View>
  );
};
