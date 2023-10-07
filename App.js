import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import TopBar from "./components/topBar";
import Search from "./components/Search";
import Card from "./components/Card";
import Filter from "./components/Filter";
import Team from "./Team.js";

const Stack = createStackNavigator();


function HomeScreen({ navigation }) {
  const data = require("./constants/heliverse_mock_data.json");
  const { height, width } = Dimensions.get("window");
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const dataToShow = data.slice(startIndex, endIndex);

  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
  };

  const renderCard = ({ item }) => (
    <View className={`mt-10 mb-5`}>
      <Card data={item} />
    </View>
  );

  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (searchText) => {
    const filtered = data.filter(
      (item) =>
        (item.first_name &&
          item.first_name.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.last_name &&
          item.last_name.toLowerCase().includes(searchText.toLowerCase()))
    );
    setFilteredData(filtered);
  };

  const handleApplyFilters = (filters) => {
    const { domains, genders, availabilities } = filters;
    const filtered = data.filter(
      (item) =>
        (!domains.length || domains.includes(item.domain)) &&
        (!genders.length || genders.includes(item.gender)) &&
        (!availabilities.length ||
          availabilities.includes(item.available.toString()))
    );
    setFilteredData(filtered);
  };

  return (
    <View
      style={{ backgroundColor: "transparent", height: height, width: width }}
    >
      <SafeAreaView>
        <ScrollView>
          <View className={`mt-10`}>
            <TopBar />
          </View>

          <View className={`mt-16`}>
            <Search onSearch={handleSearch} />

            <TouchableOpacity onPress={toggleFilter} className={'bg-[#19073b] pb-2 w-[112px] ml-4 rounded-xl'}>
              <Text style={styles.filterButton} >Toggle Filters</Text>
            </TouchableOpacity>

            {isFilterVisible && (
              <Filter onApplyFilters={handleApplyFilters} />
            )}
          </View>

          <FlatList
            data={filteredData.slice(startIndex, endIndex)}
            renderItem={renderCard}
            style={{ marginTop: isFilterVisible ? 50 : 0 }}
          />

          <View style={styles.pagination}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  if (currentPage > 1) {
                    setCurrentPage(currentPage - 1);
                  }
                }}
                disabled={currentPage === 1}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Previous</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 25, color: "#19073b" }}>
              {" "}
              Page {currentPage}{" "}
            </Text>
            <View>
              <TouchableOpacity
                onPress={() => {
                  if (currentPage < Math.ceil(data.length / itemsPerPage)) {
                    setCurrentPage(currentPage + 1);
                  }
                }}
                disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Team"
          component={Team}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "white",
    borderColor: "#19073b",
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 7,
    alignItems: "center",
  },
  buttonText: {
    color: "#19073b",
    fontWeight: "bold",
  },
  filterButton: {
    fontSize: 15,
    color: "#fefefe",
    textAlign: "left",
    marginTop: 10,
    marginLeft: 10,
  },
});
