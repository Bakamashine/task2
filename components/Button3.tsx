import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} from "react-native";

interface HeaderButtonProps extends TouchableOpacityProps {
  text: string;
  active?: boolean;
  width?: number | string
  height?: number | string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  text,
  width = "50%",
  height = 43,
  active = false,
  ...rest
}) => {
  return (
    <TouchableOpacity
      {...rest}
      style={[styles.button,  {width, height}, active && styles.button__active]}
    >
      <Text style={active ? styles.text : styles.text__inactive}>{text}</Text>
    </TouchableOpacity>
  );
};

export default HeaderButton;


const styles = StyleSheet.create({
  button: {
    borderRadius: 32,
    height: 56,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  button__active: {
    backgroundColor: my_color,
  },

  text: {
    color: "white",
  },

  text__inactive: {
    color: my_color,
  },
});
