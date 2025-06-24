import Header from "@/includes/Auth/Header";
import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";
const AuthLayout = () => (
  <View>
    <Header />
    <View style={styles.slot}>
      <Slot />
    </View>
  </View>
);


export default AuthLayout;

const styles = StyleSheet.create({
  slot: {
    marginTop: 20,
    marginBottom: 30,
    padding: 10
  }
})