import React, {useState} from 'react';
import {View, FlatList, SafeAreaView, Text} from 'react-native';
import data from './data.json';
import styles from './Component/SongCard/SongCardStyle';
import SongCard from './Component/SongCard';
import SearchBar from './Component/SearchBar/SearchBar';

function App() {
  const renderSong = ({item}) => <SongCard Song={item} />;
  const renderSeparator = () => <View style={styles.Seperator} />;
  const handleSearch = text => {
    const filterList = data.filter(Song => {
      const searchText = text.toLowerCase();
      const currentTitle = Song.title.toLowerCase();

      return currentTitle.indexOf(searchText) > -1;
    });
    setList(filterList);
  };

  const [list, setList] = useState(data);
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.head}>
        <Text style={styles.headText}>MUSICAPP</Text>
      </View>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
}
export default App;
