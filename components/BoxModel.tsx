import { StyleSheet, Text, View } from "react-native";

const BoxModel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox}>
        <Text style={styles.title}>HelloWorld</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  title: {
    fontSize: 50,
  },
  purpleBox: {
    height: 100,
    backgroundColor: "purple",
    margin: 10,
    padding: 10,
  },
});

export default BoxModel;
