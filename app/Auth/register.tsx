import Button2 from "@/components/Auth/Button2";
import CustomInput from "@/components/CustomInput";
import AlterAuth from "@/includes/Auth/AlterAuth";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);

  const checkInput = () => {
    function wrapper(value: string) {
      return value !== null && value !== undefined && value !== "";
    }
    return wrapper(name) && wrapper(phone) && wrapper(password);
  };

  useEffect(() => {
    checkInput() ? setStatus(true) : setStatus(false);
  }, [name, phone, password]);

  return (
    <View>
      <View style={styles.wrapper}>
        <CustomInput
          label="Full name"
          placeholder="Enter your Name"
          value={name}
          onChangeText={(data) => setName(data)}
        />
        <CustomInput
          label="Phone Number"
          keyboardType="number-pad"
          placeholder="+7 (000) 00-00"
          value={phone}
          onChangeText={(data) => setPhone(data)}
        />
        <CustomInput
          label="Create Password"
          placeholder="Enter your Password"
          secureTextEntry
          value={password}
          onChangeText={(data) => setPassword(data)}
        />
        <View>
          <AlterAuth />
        </View>

        <View style={styles.button_footer}>
          <Button2
            text="Register"
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
    alignItems: "center",
  },
});
