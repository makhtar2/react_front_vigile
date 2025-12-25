import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-slate-950 justify-center px-8"
    >
      <View className="items-center mb-12">
        <Text className="text-5xl font-black text-sky-400 tracking-tighter italic">
          UniGate
        </Text>
        <Text className="text-slate-400 text-lg mt-1 font-medium">
          Sécurité & Flux
        </Text>
      </View>

      <View className="bg-slate-900 p-8 rounded-[40px] border border-slate-800 shadow-2xl">
        <Text className="text-white text-2xl font-bold mb-8 text-center">
          Espace Vigile
        </Text>

        <View className="mb-4">
          <TextInput
            className="bg-slate-800 text-white p-5 rounded-2xl border border-slate-700 focus:border-sky-500"
            placeholder="Identifiant"
            placeholderTextColor="#64748b"
            value={id}
            onChangeText={setId}
          />
        </View>

        <View className="mb-8">
          <TextInput
            className="bg-slate-800 text-white p-5 rounded-2xl border border-slate-700 focus:border-sky-500"
            placeholder="Mot de passe"
            placeholderTextColor="#64748b"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity
          className="bg-sky-500 p-5 rounded-2xl active:bg-sky-600 shadow-lg shadow-sky-500/20"
          onPress={() => router.replace("/")}
        >
          <Text className="text-slate-950 text-center font-black text-lg uppercase">
            Se connecter
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
