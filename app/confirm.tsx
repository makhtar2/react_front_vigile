import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
export default function ConfirmScreen() {
  const { name, license, type } = useLocalSearchParams();
  const router = useRouter();
  const isEntry = type === "entree";

  return (
    <ScrollView className="flex-1 bg-slate-50 p-6">
      <View className="mt-12 mb-8">
        <Text
          className={`text-sm font-bold uppercase tracking-widest ${
            isEntry ? "text-sky-500" : "text-red-500"
          }`}
        >
          {isEntry ? " Enregistrement Entrée" : " Enregistrement Sortie"}
        </Text>
        <Text className="text-3xl font-black text-slate-900">Vérification</Text>
      </View>

      <View className="bg-white p-6 rounded-[35px] shadow-sm border border-slate-100">
        <View className="mb-6">
          <Text className="text-slate-400 text-xs font-bold uppercase mb-2 ml-1">
            Nom du conducteur
          </Text>
          <TextInput
            className="bg-slate-50 p-5 rounded-2xl text-slate-900 font-bold"
            defaultValue={name as string}
          />
        </View>

        <View className="mb-6">
          <Text className="text-slate-400 text-xs font-bold uppercase mb-2 ml-1">
            Numéro de Permis
          </Text>
          <TextInput
            className="bg-slate-50 p-5 rounded-2xl text-slate-900 font-bold"
            defaultValue={license as string}
          />
        </View>

        <View className="mb-8">
          <Text className="text-slate-400 text-xs font-bold uppercase mb-2 ml-1">
            Plaque d'immatriculation
          </Text>
          <TextInput
            className="bg-slate-50 p-5 rounded-2xl text-slate-900 font-bold border-2 border-sky-100 focus:border-sky-500"
            placeholder="AA-123-BB"
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            alert(isEntry ? "Portail ouvert !" : "Sortie validée !");
            router.replace("/");
          }}
          className={`p-6 rounded-2xl items-center shadow-lg ${
            isEntry
              ? "bg-sky-500 shadow-sky-500/30"
              : "bg-red-500 shadow-red-500/30"
          }`}
        >
          <Text className="text-white font-black text-lg uppercase">
            {isEntry ? "Ouvrir le portail" : "Valider la sortie"}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => router.back()}
        className="mt-8 items-center"
      >
        <Text className="text-slate-400 font-bold">Annuler et reprendre</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
