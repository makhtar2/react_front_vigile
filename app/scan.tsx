import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<any>(null);
  const router = useRouter();
  const { type } = useLocalSearchParams();

  if (!permission) return <View className="flex-1 bg-black" />;
  if (!permission.granted) {
    return (
      <View className="flex-1 bg-slate-950 justify-center items-center p-8">
        <Text className="text-white text-center mb-6">
          L'accès à la caméra est nécessaire
        </Text>
        <TouchableOpacity
          className="bg-sky-500 p-4 rounded-2xl"
          onPress={requestPermission}
        >
          <Text className="text-slate-950 font-bold">Autoriser</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      router.push({
        pathname: "/confirm",
        params: { name: "Conducteur", license: "ID-882-SN", type: type },
      });
    }
  };

  return (
    <View className="flex-1 bg-black">
      <CameraView className="flex-1" ref={cameraRef} facing="back">
        {/* Overlay de visée */}
        <View className="flex-1 justify-center items-center bg-black/40">
          <View className="w-72 h-44 border-2 border-sky-400 rounded-3xl" />
          <Text className="text-white mt-4 font-medium">
            Cadrez le document
          </Text>
        </View>
      </CameraView>

      {/* Bouton de capture */}
      <View className="absolute bottom-12 w-full items-center">
        <TouchableOpacity
          onPress={takePicture}
          className="w-20 h-20 bg-white rounded-full p-2 border-4 border-slate-400/30"
        >
          <View className="flex-1 bg-white border-2 border-slate-900 rounded-full" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
