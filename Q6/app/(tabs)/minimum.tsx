import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const minimum = () => {
  const [firstNum, setFirstNum] = useState<string>("");
  const [secondNum, setSecondNum] = useState<string>("");
  const [thirdNum, setThirdtNum] = useState<string>("");
  const [minValue, setMinValue] = useState<number | null>(null);
  const findMinimum = () => {
    if (firstNum && secondNum && thirdNum) {
      const num1 = parseFloat(firstNum);
      const num2 = parseFloat(secondNum);
      const num3 = parseFloat(thirdNum);
      const min = Math.min(num1, num2, num3);
      setMinValue(min);
    } else {
      setMinValue(null);
    }
  };
  return (
    <View>
      <TextInput
        style={styles.textInput}
        value={firstNum}
        onChangeText={(text) => {
          setFirstNum(text);
        }}
        placeholder="Enter first number"
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.textInput}
        value={secondNum}
        onChangeText={(text) => {
          setSecondNum(text);
        }}
        placeholder="Enter second number"
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.textInput}
        value={thirdNum}
        onChangeText={(text) => {
          setThirdtNum(text);
        }}
        placeholder="Enter third number"
        keyboardType="number-pad"
      />
      <Button title="Find Minimum" onPress={findMinimum} />
      <Text>
        Fist number: {firstNum} ,Second number: {secondNum} ,Third number:
        {thirdNum}
      </Text>
      <Text style={styles.resultText}>
        Minimum value: {minValue !== null ? minValue : "0"}
      </Text>
    </View>
  );
};

export default minimum;

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderWidth: 2,
    borderBlockColor: "black",
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 10,
  },
  resultText: {
    fontSize: 18,
    marginTop: 0,
    fontWeight: "bold",
  },
});
