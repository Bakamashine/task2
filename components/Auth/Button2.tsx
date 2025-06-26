import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
} from "react-native";

interface HeaderButtonProps extends TouchableOpacityProps {
  text: string;
  active?: boolean;
  width?: number | string;
  height?: number | string;
  custom_styles ?: {
    button?: Object, 
    text?: Object
  }
}

const Button2: React.FC<HeaderButtonProps> = ({
  text,
  width = "50%",
  height = 43,
  active = false,
  custom_styles,
  ...rest
}) => {
  return (
    <TouchableOpacity
      {...rest}
      style={[
        styles.button,
        { width, height },
        active ? styles.button__active : styles.button__inactive,
        custom_styles?.button
      ]}
    >
      <Text style={[styles.text, custom_styles?.text]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button2;

const styles = StyleSheet.create({
  button: {
    borderRadius: 18,
    height: 64,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "white",
  },

  button__active: {
    backgroundColor: "#45B8E9",
  },

  button__inactive: {
    backgroundColor: "#BBE8FB",
  },
});
