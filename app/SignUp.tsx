import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { RF, RH, RS, RW } from "./components/responsive";

export default function SignUp() {
    const [focusedInput, setFocusedInput] = useState("");

    return (
        <LinearGradient colors={["#EABC63", "#EABC63"]} style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.navigate("/Login")}>
                <Feather name="arrow-left" size={RS(22)} color="#EE8549" />
            </TouchableOpacity>

            <View style={styles.card}>
                <Text style={styles.title}>Sign up</Text>
                <Text style={styles.subtitle}>Create a new account</Text>

                <InputBox
                    icon="user"
                    placeholder="Full name"
                    focused={focusedInput === "name"}
                    onFocus={() => setFocusedInput("name")}
                    onBlur={() => setFocusedInput("")}
                />

                <InputBox
                    icon="mail"
                    placeholder="Email Address"
                    focused={focusedInput === "email"}
                    onFocus={() => setFocusedInput("email")}
                    onBlur={() => setFocusedInput("")}
                    keyboardType="email-address"
                />

                <InputBox
                    icon="phone"
                    placeholder="Phone number"
                    focused={focusedInput === "phone"}
                    onFocus={() => setFocusedInput("phone")}
                    onBlur={() => setFocusedInput("")}
                    keyboardType="phone-pad"
                />

                <InputBox
                    icon="lock"
                    placeholder="Password"
                    focused={focusedInput === "password"}
                    onFocus={() => setFocusedInput("password")}
                    onBlur={() => setFocusedInput("")}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.createButton}>
                    <Text style={styles.createButtonText}>CREATE ACCOUNT</Text>
                </TouchableOpacity>

                <View style={styles.dividerRow}>
                    <View style={styles.line} />
                    <Text style={styles.or}>or</Text>
                    <View style={styles.line} />
                </View>

                <View style={styles.socialRow}>
                    <TouchableOpacity style={styles.socialBox}>
                        <Image
                            source={require("../assets/images/google.png")}
                            style={styles.socialIcon}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialBox}>
                        <Image
                            source={require("../assets/images/facebook.png")}
                            style={styles.socialIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity onPress={() => router.navigate("/Login")}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

function InputBox({
    icon,
    placeholder,
    focused,
    onFocus,
    onBlur,
    keyboardType,
    secureTextEntry,
}: any) {
    return (
        <View style={[styles.inputBox, focused && styles.inputBoxFocused]}>
            <Feather
                name={icon}
                size={RS(20)}
                color={focused ? "#EE8549" : "#333"}
            />

            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#333"
                style={styles.input}
                onFocus={onFocus}
                onBlur={onBlur}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                autoCapitalize="none"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: RW(25),
        paddingTop: RH(103),
        alignItems: "center",
    },

    backButton: {
        width: RW(30),
        height: RH(30),
        borderRadius: RS(8),
        backgroundColor: "#FFF3DF",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start",
        marginBottom: RH(18),
    },

    card: {
        width: "100%",
        backgroundColor: "#FFF3DF",
        borderRadius: RS(12),
        paddingHorizontal: RW(14),
        paddingTop: RH(19),
        paddingBottom: RH(30),
        alignItems: "center",
    },

    title: {
        fontSize: RF(33),
        fontWeight: "700",
        color: "#151515",
        marginBottom: RH(2),
    },

    subtitle: {
        fontSize: RF(14),
        color: "#333",
        marginBottom: RH(23),
    },

    inputBox: {
        width: "100%",
        height: RH(46),
        backgroundColor: "#fff",
        borderRadius: RS(10),
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

    input: {
        flex: 1,
        height: "100%",
        marginLeft: RW(13),
        fontSize: RF(14),
        color: "#222",
        paddingVertical: 0,
        textAlignVertical: "center",
    },

    createButton: {
        width: "100%",
        height: RH(46),
        backgroundColor: "#EE8549",
        borderRadius: RS(9),
        justifyContent: "center",
        alignItems: "center",
        marginTop: RH(1),
        shadowColor: "#EE8549",
        shadowOffset: { width: 0, height: RH(8) },
        shadowOpacity: 0.3,
        shadowRadius: RS(14),
        elevation: 8,
    },

    createButtonText: {
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
        width: RW(68),
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
        gap: RW(15),
    },

    socialBox: {
        width: RW(42),
        height: RH(42),
        borderRadius: RS(11),
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },

    socialIcon: {
        width: RW(42),
        height: RH(42),
        resizeMode: "contain",
    },

    loginText: {
        marginTop: RH(39),
        color: "#EE8549",
        fontSize: RF(14),
        textDecorationLine: "underline",
    },
});