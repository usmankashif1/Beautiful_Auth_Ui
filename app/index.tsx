import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import { RH, RW } from "./components/responsive";

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/Login");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient colors={["#eabc63", "#eabc63"]} style={styles.container}>
      <Image
        source={require("../assets/images/Applogo.png")}
        style={styles.logo}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: RW(120),
    height: RH(120),
    resizeMode: "contain",
  },
});
