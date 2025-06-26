import Button2 from "@/components/Auth/Button2";
import main_styles from "@/components/main_styles";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import { SafeAreaView } from "react-native-safe-area-context";

const content = [
  {
    title: "Wide range of Food Categories & more",
    description:
      "Browse through our extensive list of restaurants and dishes, and when you're ready to order, simply add your desired items to your cart and checkout. It's that easy!",
    img: require("@/img/box.jpg"),
  },
  {
    title: "Free Deliveries for ONE MONTH!!",
    description:
      "Get your favorite meals delivered to your doorstep for free with our online food delivery app - enjoy a whole month of complimentary delivery!",
    img: require("@/img/box.jpg"),
  },
  {
    title: "Get started on Ordering your Food",
    description:
      "Please create an account or sign in to your existing account to start browsing our selection of delicious meals from your favorite restaurants.",
    img: require("@/img/box.jpg"),
  },
];

const MyPager = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const ref = useRef<PagerView>(null);

  const goHome = (): void => {
    router.push("/");
  };

  const nextPage = () => {
    let current = currentPage + 1;
    console.log("currentPage: ", currentPage);
    console.log("new current: ", current);
    ref.current?.setPage(current);
    console.log("Прозошёл переход");
    setCurrentPage(current);
  };

  const width_button = "40%";
  return (
    <SafeAreaView style={styles.container}>
      <Text>Начало</Text>
      <PagerView style={styles.pagerView} ref={ref} initialPage={0}>
        {content.map((item, index) => (
          <View key={index} style={styles.pagerView__page}>
            <Image style={styles.page__image} source={item.img} />
            <Text style={styles.page__h1}>{item.title}</Text>
            <Text style={styles.page__text}>{item.description}</Text>
            <View style={styles.page__buttons}>
              <Button2
                text="Skip"
                onPress={goHome}
                width={width_button}
                custom_styles={{
                  button: {
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "black",
                  },
                  text: {
                    color: "black",
                  },
                }}
              />
              {currentPage < content.length - 1 ? (
                <Button2
                  text="Next"
                  onPress={nextPage}
                  width={width_button}
                  active
                />
              ) : (
                <Button2
                  text="Continue"
                  onPress={goHome}
                  width={width_button}
                  active
                />
              )}
            </View>
          </View>
        ))}
      </PagerView>
      <Text>Конец</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagerView: {
    width: "100%",
    height: 1000,
  },
  pagerView__page: {},
  page__h1: {
    fontSize: 36,
    color: "#292D32",
  },
  page__text: {
    fontSize: 17,
    color: "#6A798A",
  },
  page__image: {
    borderRadius: 20,
    width: "90%",
    ...main_styles.marginCenter,
  },

  page__buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default MyPager;
