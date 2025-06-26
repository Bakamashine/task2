import { StyleSheet, View } from "react-native";

interface PaginatorProps {
  max_page: number;
  current_page: number;
}

const Paginator = ({ max_page, current_page }: PaginatorProps) => {
  let items = [];

  for (let i = 0; i < max_page; i++) {
    items.push(
      <View
        key={i}
        style={[
          styles.dot,
          i == current_page ? styles.dot__active : styles.dot__inactive,
        ]}
      />
    );
  }
  return <View style={styles.container}>{items}</View>;
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 1000,
    marginRight: 10,
  },
  dot__active: {
    backgroundColor: "#EA985B",
  },
  dot__inactive: {
    backgroundColor: "#D5DEE7",
  },
});
