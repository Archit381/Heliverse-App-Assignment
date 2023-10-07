import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by Name"
        value={searchText}
        onChangeText={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
});

export default Search;
