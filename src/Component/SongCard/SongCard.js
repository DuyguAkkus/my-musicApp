import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SongCardStyle';

const SongCard = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={{uri: props.Song.imageUrl}} />
      <View style={styles.TextAll}>
        <Text style={styles.Title}>{props.Song.title}</Text>
        <View style={styles.contant}>
          <View style={styles.Description}>
            <Text style={styles.Artist}>{props.Song.artist}</Text>
            <Text style={styles.Year}>{props.Song.year}</Text>
          </View>
          {props.Song.isSoldOut && (
            <View style={styles.Soldout}>
              <Text style={styles.SoldoutText}>TÜKENDİ</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
export default SongCard;
