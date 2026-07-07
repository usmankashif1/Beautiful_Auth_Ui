import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RF, RH, RS, RW } from "./components/responsive";

export default function Login() {
  const [focusedInput, setFocusedInput] = useState("");

  return (
    <LinearGradient colors={["#eabc63", "#eabc63"]} style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          source={require("../assets/images/Applogo.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Hola!</Text>
        <Text style={styles.subtitle}>Please login to your account.</Text>

        <View
          style={[
            styles.inputBox,
            focusedInput === "email" && styles.inputBoxFocused,
          ]}
        >
          <Image
            source={require("../assets/images/EmaiIcon.png")}
            style={[
              styles.inputIcon,
              { tintColor: focusedInput === "email" ? "#EE8549" : "#333" },
            ]}
          />

          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#333"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            onFocus={() => setFocusedInput("email")}
            onBlur={() => setFocusedInput("")}
          />
        </View>

        <View
          style={[
            styles.inputBox,
            focusedInput === "password" && styles.inputBoxFocused,
          ]}
        >
          <Image
            source={require("../assets/images/lockIcon.png")}
            style={[
              styles.inputIcon,
              { tintColor: focusedInput === "password" ? "#EE8549" : "#333" },
            ]}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#333"
            secureTextEntry
            style={styles.input}
            onFocus={() => setFocusedInput("password")}
            onBlur={() => setFocusedInput("")}
          />
        </View>

        <TouchableOpacity style={styles.forgotWrapper}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.dividerRow}>
          <View style={styles.line} />
          <Text style={styles.or}>or</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBox}>
            <Image source={require("../assets/images/google.png")} style={styles.google} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialBox}>
            <Image source={require("../assets/images/facebook.png")} style={styles.facebook} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => router.navigate("/SignUp")}>
        <Text style={styles.createAccount}>Create new account</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RW(25),
    paddingTop: RH(105),
    alignItems: "center",
  },

  logoWrapper: {
    width: RW(100),
    height: RH(80),
    marginBottom: RH(40),
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: RW(120),
    height: RH(120),
    resizeMode: "contain",
  },

  card: {
    width: "100%",
    backgroundColor: "#FFF3DF",
    borderRadius: RS(14),
    paddingHorizontal: RW(14),
    paddingTop: RH(31),
    paddingBottom: RH(30),
    alignItems: "center",
  },

  title: {
    fontSize: RF(34),
    fontWeight: "700",
    color: "#222",
    marginBottom: RH(3),
  },

  subtitle: {
    fontSize: RF(14),
    color: "#333",
    marginBottom: RH(23),
  },

  inputBox: {
    width: "100%",
    height: RH(48),
    backgroundColor: "#fff",
    borderRadius: RS(11),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: RW(16),
    marginBottom: RH(14),
    borderWidth: RS(1.5),
    borderColor: "transparent",
  },

  inputBoxFocused: {
    borderColor: "#EE8549",
  },

  inputIcon: {
    width: RW(20),
    height: RH(20),
    resizeMode: "contain",
  },

  input: {
    flex: 1,
    height: "100%",
    marginLeft: RW(12),
    fontSize: RF(14),
    color: "#222",
    paddingVertical: 0,
    textAlignVertical: "center",
  },

  forgotWrapper: {
    alignSelf: "flex-end",
    marginTop: RH(1),
    marginBottom: RH(15),
  },

  forgot: {
    fontSize: RF(14),
    color: "#333",
  },

  loginButton: {
    width: "100%",
    height: RH(48),
    backgroundColor: "#ee8549",
    borderRadius: RS(9),
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#ee8549",
    shadowOffset: {
      width: 0,
      height: RH(8),
    },
    shadowOpacity: 0.35,
    shadowRadius: RS(14),
    elevation: 8,
  },

  loginText: {
    color: "#fff",
    fontSize: RF(14),
    fontWeight: "700",
  },

  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: RH(27),
    marginBottom: RH(15),
  },

  line: {
    width: RW(72),
    height: RH(1),
    backgroundColor: "#E8DCC8",
  },

  or: {
    marginHorizontal: RW(20),
    fontSize: RF(14),
    color: "#333",
  },

  socialRow: {
    flexDirection: "row",
    gap: RW(20),
  },

  socialBox: {
    width: RS(45),
    height: RS(45),
    borderRadius: RS(12),
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  google: {
    width: RS(52),
    height: RS(52),
  },

  facebook: {
    width: RS(52),
    height: RS(52),
  },

  createAccount: {
    marginTop: RH(27),
    color: "#EE8549",
    fontSize: RF(14),
    textDecorationLine: "underline",
  },
});