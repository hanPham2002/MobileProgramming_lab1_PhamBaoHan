import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const Sum = () => {
  const [number, setNumber] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleNumberChange = (text: string) => {
    setNumber(text);

    // Kiểm tra nếu text là số và không rỗng
    if (text.length > 0) {
      const firstDigit = parseInt(text[0]);
      const lastDigit = parseInt(text[text.length - 1]);
      const sum = firstDigit + lastDigit;
      setResult(sum);
    } else {
      setResult(null);
    }
  };
  return (
    <View>
      <TextInput
        style={styles.textInput}
        value={number}
        onChangeText={handleNumberChange}
        placeholder="Enter your number"
        keyboardType="number-pad"
      />
      <Text>Current : {number}</Text>
      <Text style={styles.resultText}>
        Result: {result !== null ? result : ""}
      </Text>
    </View>
  );
};

export default Sum;

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderWidth: 2,
    borderBlockColor: "black",
    borderRadius: 10,
    marginTop: 100,
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
