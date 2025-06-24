import CustomInput from "@/components/CustomInput";
import AlterAuth from "@/includes/Auth/AlterAuth";
import { StyleSheet, Text, View } from "react-native";

const Login = () => {
  return (
    <View>
      <View style={styles.wrapper}>
        <CustomInput label="Email Address" placeholder="Enter your Email" />
        <CustomInput
          label="Password"
          placeholder="Enter your Password"
          secureTextEntry
        />
        <Text style={styles.forgot}>Forgot Password?</Text>
        <View>
        <AlterAuth />
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
});
