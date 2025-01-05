import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const stepInto = () => {
    console.log("Stepped into");
  };
  const stepOver = () => {
    console.log("stepped over");
  };

  const onButtonPressed = () => {
    console.log("called when button pressed");
  };

  useEffect(() => {
    console.log("Pause here and step over");
    stepOver();
    stepInto();
  }, []);

  return (
    <View style={styles.container}>
      <Button onPress={onButtonPressed} title="myButton"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
