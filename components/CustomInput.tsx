import { FC } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
} from "react-native";

export interface CustomInputProps extends TextInputProps {
  label: string;
}

const CustomInput: FC<CustomInputProps> = ({ label, ...rest }) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <TextInput style={styles.input} {...rest} />
  </View>
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#EFF2F5",
    borderRadius: 14,
    // borderBottomWidth: 1,
    // borderBottomColor: "#CFCFCF",
  paddingLeft: 10
  },
  label: {
    color: "#14304A",
    marginLeft: 10
  },
});

export default CustomInput;