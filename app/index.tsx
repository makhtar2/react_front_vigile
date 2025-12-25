import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";
// On utilise Ionicons de la bibliothèque Expo
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View className="flex-1 bg-slate-50 px-6">
      <View className="mt-16 mb-8 flex-row justify-between items-center">
        <View>
          <Text className="text-slate-500 text-base font-medium">Bonjour,</Text>
          <Text className="text-slate-900 text-3xl font-black tracking-tight">
            Officier de Garde
          </Text>
        </View>
        <TouchableOpacity className="bg-white p-3 rounded-full shadow-sm">
          <Ionicons name="person-circle-outline" size={32} color="#0f172a" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Carte Statistique */}
        <View className="bg-slate-900 p-8 rounded-[35px] flex-row justify-between items-center mb-10 shadow-xl shadow-slate-900/30">
          <View>
            <Text className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
              Sur site
            </Text>
            <Text className="text-white text-5xl font-black">142</Text>
            <Text className="text-sky-400 font-medium mt-1">Véhicules</Text>
          </View>
          <View className="bg-slate-800 p-5 rounded-3xl">
            {/* Icône de voiture Ionicons */}
            <Ionicons name="car-sport" size={40} color="#ffffffff" />
          </View>
        </View>

        <Text className="text-slate-800 text-xl font-bold mb-5 ml-1">
          Actions rapides
        </Text>

        <View className="flex-row gap-4 mb-6">
          <Link
            href={{ pathname: "/scan", params: { type: "entree" } }}
            asChild
          >
            <TouchableOpacity className="flex-1 bg-sky-500 h-44 rounded-[30px] justify-center items-center shadow-lg shadow-sky-500/30">
              <Ionicons name="log-in" size={45} color="white" />
              <Text className="text-white font-black text-xl mt-2">Entrée</Text>
            </TouchableOpacity>
          </Link>

          <Link
            href={{ pathname: "/scan", params: { type: "sortie" } }}
            asChild
          >
            <TouchableOpacity className="flex-1 bg-emerald-500 h-44 rounded-[30px] justify-center items-center shadow-lg shadow-emerald-500/30">
              <Ionicons name="log-out" size={45} color="white" />
              <Text className="text-white font-black text-xl mt-2">Sortie</Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Bouton secondaire avec icône */}
        <TouchableOpacity className="flex-row border-2 border-slate-200 p-6 rounded-[25px] items-center justify-center mt-2 mb-10">
          <Ionicons
            name="time-outline"
            size={20}
            color="#64748b"
            style={{ marginRight: 10 }}
          />
          <Text className="text-slate-500 font-bold text-base">
            Consulter l'historique
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
