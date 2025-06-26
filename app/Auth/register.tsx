import Button2 from "@/components/Auth/Button2";
import CustomInput from "@/components/CustomInput";
import AlterAuth from "@/includes/Auth/AlterAuth";
import { StyleSheet, View } from "react-native";

const Register = () => {
  return (
    <View>
      <View style={styles.wrapper}>
        <CustomInput label="Full name" placeholder="Enter your Name" />
        <CustomInput label="Phone Number" keyboardType="number-pad" placeholder="+7 (000) 00-00" />
        <CustomInput
          label="Create Password"
          placeholder="Enter your Password"
          secureTextEntry
        />
        <View>
          <AlterAuth />
        </View>

        <View style={styles.button_footer}>
          <Button2 text="Register"  width={"80%"}/>
        </View>
      </View>
    </View>
  );
};

export default Register;

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
    alignItems: "center"
  }
});
