import { View, Dimensions, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowLeftCircleIcon } from "react-native-heroicons/outline";
import Card from "./components/Card";
import { useNavigation } from "@react-navigation/native";

export default function Team() {
  const { height, width } = Dimensions.get("window");
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{ backgroundColor: "transparent", height: height, width: width }}
    >
      <SafeAreaView>
        <ScrollView>
          <View className={`flex-row mt-10 px-4 items-center`}>
            <Text className={`text-[32px] font-medium text-[#19073b]`}>
              Your Team
            </Text>
            <TouchableOpacity onPress={handleBackButtonPress} style={{ marginLeft: 'auto' }}>
              <ArrowLeftCircleIcon size={40} color={"#19073b"} />
            </TouchableOpacity>
          </View>

        <View>

        </View>
          
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
