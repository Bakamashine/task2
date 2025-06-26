import Button2 from "@/components/Auth/Button2";
import CustomInput from "@/components/CustomInput";
import AlterAuth from "@/includes/Auth/AlterAuth";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [status, setStatus] = useState(false);

  const checkInput = () => {
    function wrapper(value: string) {
      return value !== null && value !== undefined && value !== "";
    }
    return wrapper(email) && wrapper(password);
  };

  useEffect(() => {
    checkInput() ? setStatus(true) : setStatus(false);
  }, [email, password]);

  return (
    <View>
      <View style={styles.wrapper}>
        <CustomInput
          label="Email Address"
          placeholder="Enter your Email"
          value={email}
          onChangeText={(data) => setEmail(data)}
        />
        <CustomInput
          label="Password"
          placeholder="Enter your Password"
          secureTextEntry
          value={password}
          onChangeText={(data) => setPassword(data)}
        />
        <Text style={styles.forgot}>Forgot Password?</Text>
        <View>
          <AlterAuth />
        </View>

        <View style={styles.button_footer}>
          <Button2
            text="Login"
            width={"80%"}
            active={status}
            disabled={!status}
            onPress={() => {
              router.push("/");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  wrapper: {
    gap: 30,
  },
  forgot: {
    color: "#6A798A",
    borderBottomWidth: 1,
    marginLeft: "auto",
  },

  button_footer: {
    alignItems: "center",
  },
});
