import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const HailstoneSequence: React.FC = () => {
  const [number, setNumber] = useState<string>("");
  const [sequence, setSequence] = useState<number[]>([]);

  const generateSequence = () => {
    let n = parseInt(number, 10);

    if (isNaN(n) || n <= 0) {
      setSequence([]);
      return;
    }

    const result: number[] = [];
    while (n !== 1) {
      result.push(n);
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = n * 3 + 1;
      }
    }
    result.push(1); // cuối cùng luôn kết thúc ở 1
    setSequence(result);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={number}
        onChangeText={setNumber}
        placeholder="Enter a positive number"
        keyboardType="number-pad"
      />

      <Button title="Generate Hailstone Sequence" onPress={generateSequence} />

      <ScrollView style={styles.resultContainer}>
        {sequence.length > 0 ? (
          <Text style={styles.resultText}>{sequence.join(" → ")}</Text>
        ) : (
          <Text style={styles.resultText}>Enter a valid positive number!</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default HailstoneSequence;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  textInput: {
    padding: 10,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    marginBottom: 20,
  },
  resultContainer: {
    marginTop: 20,
    maxHeight: 300,
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
