import React from "react";
import styles from "./style";
import { Alert, Text, View, Button } from "react-native";

function ClickOnTheSquare(value: string) {
  Alert.alert(value);
}
interface Props {
  text: string;
}
export const Square = ({ text }: Props) => {
  return (
    <View style={[styles.box, { backgroundColor: "#7ce0f9" }]}>
      <Text>{text}</Text>
      <Button title="Click" onPress={() => ClickOnTheSquare(text)}></Button>
    </View>
  );
};
