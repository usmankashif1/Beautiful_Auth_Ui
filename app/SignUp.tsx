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

export default function SignUp() {
    const [focusedInput, setFocusedInput] = useState("");

    return (
        <LinearGradient colors={["#EABC63", "#EABC63"]} style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.navigate("/Login")}>
                <Feather name="arrow-left" size={22} color="#EE8549" />
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

            <TouchableOpacity>
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
                size={20}
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
        paddingHorizontal: 50,
        paddingTop: 103,
        alignItems: "center",
    },

    backButton: {
        width: 30,
        height: 30,
        borderRadius: 8,
        backgroundColor: "#FFF3DF",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start",
        marginBottom: 18,
    },

    card: {
        width: "100%",
        backgroundColor: "#FFF3DF",
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingTop: 19,
        paddingBottom: 8,
        alignItems: "center",
    },

    title: {
        fontSize: 33,
        fontWeight: "700",
        color: "#151515",
        marginBottom: 2,
    },

    subtitle: {
        fontSize: 14,
        color: "#333",
        marginBottom: 23,
    },

    inputBox: {
        width: "100%",
        height: 46,
        backgroundColor: "#fff",
        borderRadius: 10,
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

    input: {
        flex: 1,
        height: "100%",
        marginLeft: 13,
        fontSize: 14,
        color: "#222",
        paddingVertical: 0,
        textAlignVertical: "center",
    },

    createButton: {
        width: "100%",
        height: 46,
        backgroundColor: "#EE8549",
        borderRadius: 9,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 1,

        shadowColor: "#EE8549",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 14,
        elevation: 8,
    },

    createButtonText: {
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
        width: 68,
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
        gap: 15,
    },

    socialBox: {
        width: 42,
        height: 42,
        borderRadius: 11,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },

    socialIcon: {
        width: 42,
        height: 42,
        resizeMode: "contain",
    },

    loginText: {
        marginTop: 39,
        color: "#EE8549",
        fontSize: 14,
        textDecorationLine: "underline",
    },
});