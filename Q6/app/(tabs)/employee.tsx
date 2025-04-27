import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const Employee = () => {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");

  const handleUpdate = () => {
    // Trên Android/iOS: xài Alert.alert.
    // Alert.alert("update successfully ");
    // Trên Web: xài window.alert.
    window.alert("update successfully ");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Full Name : </Text>
        <TextInput
          style={styles.textInput}
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter your name"
        />
      </View>
      <View>
        <Text>Age : </Text>
        <TextInput
          value={age}
          onChangeText={setAge}
          style={styles.textInput}
          placeholder="Enter your age"
        />
      </View>
      <View>
        <Text>Occupation : </Text>
        <TextInput
          value={occupation}
          onChangeText={setOccupation}
          style={styles.textInput}
          placeholder="Enter your occupation"
        />
      </View>
      <Button title="Update" color="blue" onPress={handleUpdate} />
    </View>
  );
};

export default Employee;

const styles = StyleSheet.create({
  container: { padding: 60 },
  title: { color: "red" },
  textInput: {
    padding: 10,
    borderWidth: 2,
    borderBlockColor: "black",
    borderRadius: 10,
    marginVertical: 10,
  },
});
