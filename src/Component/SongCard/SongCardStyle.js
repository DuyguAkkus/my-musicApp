import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: '#fffaf0',
  },
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  Image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ff1493',
  },
  TextAll: {
    padding: 15,
    flex: 1,
    justifyContent: 'center',
  },
  Title: {
    fontSize: 25,
    fontWeight: '500',
  },
  Description: {
    flexDirection: 'row',
    marginTop: 4,
    flex: 1,
  },
  Artist: {
    fontSize: 15,
    fontWeight: '400',
    marginRight: 15,
  },
  Year: {
    fontSize: 15,
    fontWeight: '400',
    color: '#ff1493',
  },
  Seperator: {
    borderWidth: 0.5,
    borderBlockColor: '#ffb6c1',
  },
  Soldout: {
    borderWidth: 2,
    borderColor: '#ff69b4',
    padding: 3,
    borderRadius: 8,
    marginTop: 5,
  },
  SoldoutText: {
    color: '#ff69b4',
    fontWeight: '500',
    fontSize: 12,
  },
  contant: {
    flexDirection: 'row',
  },
  head: {
    padding: 10,
    alignItems: 'center',
  },
  headText: {
    color: '#db7093',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
