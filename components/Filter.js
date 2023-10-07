import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const Filter = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({
    domains: [],
    genders: [],
    availabilities: [],
  });

  const domainOptions = ['Sales', 'Finance','Marketing','IT','Management','UI Designing','Business Development']; 
  const genderOptions = ['Male', 'Female']; 
  const availabilityOptions = ['true', 'false'];

  const applyFilters = () => {
    onApplyFilters(filters);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filters</Text>
      <View style={styles.filterSection}>
        <Text style={styles.filterHeader}>Select Domain</Text>
        <SelectDropdown
          data={domainOptions}
          onSelect={(selectedItem) => {
            setFilters((prevFilters) => ({
              ...prevFilters,
              domains: selectedItem ? [selectedItem] : [],
            }));
          }}
          buttonTextAfterSelection={(selectedItem) => {
            return selectedItem;
          }}
          rowTextForSelection={(item) => {
            return item;
          }}
          style={{
            borderRadius: '20px', 
            overflow: 'hidden',   
          }}
        />
      </View>
      <View style={styles.filterSection}>
        <Text style={styles.filterHeader}>Select Gender</Text>
        <SelectDropdown
          data={genderOptions}
          onSelect={(selectedItem) => {
            setFilters((prevFilters) => ({
              ...prevFilters,
              genders: selectedItem ? [selectedItem] : [],
            }));
          }}
          buttonTextAfterSelection={(selectedItem) => {
            return selectedItem;
          }}
          rowTextForSelection={(item) => {
            return item;
          }}

        />
      </View>
      <View style={styles.filterSection}>
        <Text style={styles.filterHeader}>Select Availability</Text>
        <SelectDropdown
          data={availabilityOptions}
          onSelect={(selectedItem) => {
            setFilters((prevFilters) => ({
              ...prevFilters,
              availabilities: selectedItem ? [selectedItem] : [],
            }));
          }}
          buttonTextAfterSelection={(selectedItem) => {
            return selectedItem;
          }}
          rowTextForSelection={(item) => {
            return item;
          }}
        />
      </View>
      <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
        <Text style={styles.applyButtonText}>Apply Filters</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 10,
    marginHorizontal: 14,
    borderRadius: 20,
    elevation: 5,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#19073b',
  },
  filterSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  filterHeader: {
    marginRight: 10,
    fontSize: 15,
  },
  applyButton: {
    backgroundColor: '#19073b',
    padding: 10,
    borderRadius: 15,
    marginTop: 10,

  },
  applyButtonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default Filter;
