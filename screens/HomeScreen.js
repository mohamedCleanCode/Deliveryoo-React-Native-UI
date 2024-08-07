import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, SafeAreaView, Text, TextInput, View } from "react-native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white p-2 flex-col gap-3">
      {/* Header */}
      <View className="flex-row items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          width={30}
          height={30}
          alt="Logo"
          className="bg-gray-300 rounded-full object-cover"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Delivery now!</Text>
          <View className="flex-row items-center">
            <Text className="font-bold text-xl">Current Location</Text>
            <ChevronDownIcon color={"#00CCBB"} fontSize={20} />
          </View>
        </View>
        <UserIcon color={"#00CCBB"} fontSize={20} />
      </View>
      {/* Search */}
      <View className="flex-row items-center mx-4">
        <View className="flex-row items-center flex-1 bg-gray-300 p-2 rounded-lg">
          <MagnifyingGlassIcon color={"gray"} fontSize={20} />
          <TextInput
            placeholder="Restaurant and coffee"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color={"#00CCBB"} fontSize={20} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
