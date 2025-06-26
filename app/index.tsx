import { router } from "expo-router";
import { Button, StyleSheet, View } from "react-native";
const Main = () => {
  return (
    <View style={styles.buttons}>
      <Button
        onPress={() => {
          router.push("/Auth/login");
        }}
        title="Login"
      />
      <Button
        onPress={() => {
          router.push("/Auth/register");
        }}
        title="register"
      />
      <Button
        onPress={() => {
          router.push("/more");
        }}
        title="More"
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  buttons: {
    gap: 10,
  },
});
