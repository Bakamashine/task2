import { Slot } from "expo-router";
import { StatusBar, StyleSheet, View } from "react-native";

const RootLayout = () => (
  <View>
    <StatusBar hidden />
    <View style={styles.slot}>
      <Slot />
    </View>
  </View>
);

export default RootLayout;

const styles = StyleSheet.create({
  slot: {
    padding: 20,
    marginTop: 20,
  },
});
