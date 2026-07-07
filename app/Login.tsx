import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

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
    paddingHorizontal: 34,
    paddingTop: 105,
    alignItems: "center",
  },

  logoWrapper: {
    width: 100,
    height: 80,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },

  card: {
    width: "100%",
    backgroundColor: "#FFF3DF",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingTop: 31,
    paddingBottom: 25,
    alignItems: "center",
  },

  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#222",
    marginBottom: 3,
  },

  subtitle: {
    fontSize: 14,
    color: "#333",
    marginBottom: 23,
  },

  input: {
    flex: 1,
    height: "100%",
    marginLeft: 12,
    fontSize: 14,
    color: "#222",
    paddingVertical: 0,
    textAlignVertical: "center",
  },


  forgotWrapper: {
    alignSelf: "flex-end",
    marginTop: 1,
    marginBottom: 15,
  },

  forgot: {
    fontSize: 14,
    color: "#333",
  },
  loginButton: {
    width: "100%",
    height: 48,
    backgroundColor: "#ee8549",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",

    // iOS Shadow
    shadowColor: "#ee8549",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.35,
    shadowRadius: 14,

    // Android Shadow
    elevation: 8,
  },

  loginText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },

  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 27,
    marginBottom: 15,
  },

  line: {
    width: 72,
    height: 1,
    backgroundColor: "#E8DCC8",
  },

  or: {
    marginHorizontal: 20,
    fontSize: 14,
    color: "#333",
  },

  socialRow: {
    flexDirection: "row",
    gap: 20,
  },

  socialBox: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  google: {
    width: 52,
    height: 52,
  },

  facebook: {
    width: 52,
    height: 52,

  },

  createAccount: {
    marginTop: 27,
    color: "#EE8549",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  inputIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  inputBox: {
    width: "100%",
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 11,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 14,

    borderWidth: 1.5,
    borderColor: "transparent",
  },

  inputBoxFocused: {
    borderColor: "#EE8549",
  },
});