import HeaderButton from "@/components/Auth/Button";
import main_styles from "@/components/main_styles";
import { router, usePathname } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  const pathname = usePathname();

  return (
    <View>
      <Text style={styles.h1}>Welcome!</Text>
      <Text style={styles.text1}>Sign up or Login to your Account</Text>

      <View style={styles.container}>
        <View style={styles.wrapper}>
          <HeaderButton
            text="Login"
            active={pathname === "/Auth/login"}

            onPress={() => {
                router.push("/Auth/login");
            }}
            width="45%"
          />
          <HeaderButton
            text="Sign Up"
            active={pathname === '/Auth/register'}
            onPress={() => {
                router.push("/Auth/register")
            }}
            width="45%"
          />
        </View>
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  h1: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#292D32",
  },
  text1: {
    color: "#6A798A",
    fontSize: 17,
  },
  container: {
    backgroundColor: "#FDD3E166",
    width: "80%",
    height: 63,
    borderRadius: 230,
    ...main_styles.marginCenter,
    padding: 10,
    marginTop: 21
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
