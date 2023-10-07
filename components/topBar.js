import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function topBar() {
  const navigation = useNavigation();

  const navigateToNewScreen = () => {
    
    navigation.navigate('Team');
  };
  
  return (
    <View className="flex-row px-4" style={{ alignItems: "center" }}>
      <Image
        source={require("../assets/logo1.png")}
        style={{ borderRadius: 25, height: 35, width: 35 }}
      />
      <Text
        className="font-bold px-3 "
        style={{
          fontSize: 28,
          color: "#19073b",
          textShadowColor: "rgba(0, 0, 0, 0.2)",
          textShadowOffset: { width: 2, height: 2 },
          textShadowRadius: 4,
        }}
      >
        Heliverse
      </Text>
      <TouchableOpacity
      onPress={navigateToNewScreen}>
        <View className={`ml-24 bg-[#19073b] p-2 rounded-xl`}>
          <Text className={`text-white`}>Team Details</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
