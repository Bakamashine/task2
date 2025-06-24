import FontAwesome from "@react-native-vector-icons/fontawesome";
import { StyleSheet, Text, View } from "react-native";

const AlterAuth = () => {
  return (
    <View>
      <Text>Or Sign Up Using: </Text>
      <View style={styles.container}>
        {new Array(3).fill(null).map((item, index) => (
          <View key={index} style={styles.box}>
            <FontAwesome name="google" size={30} color="#000" />
          </View>
        ))}
      </View>
    </View>
  );
};

export default AlterAuth;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20
  },
  box: {
    borderWidth: 1,
    borderRadius: 1000,
    width: 71,
    borderColor: "#D5DEE7",
    height: 71,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  },
});
