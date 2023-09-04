import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBarStyle';

const SearchBar = props => {
  return (
    <View style={styles.SearchContainer}>
      <TextInput
        style={styles.SearchText}
        placeholder="Search..."
        onChangeText={props.onSearch}
      />
    </View>
  );
};
export default SearchBar;
