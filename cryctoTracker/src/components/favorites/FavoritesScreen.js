import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import FavoritesEmptyState from './FavoritesEmptyState';
import Colors from '../../res/colors';
import Storage from '../../libs/storage';
import CoinsItem from '../coins/CoinsItem';

class FavoritesScreen extends Component {
  state = {
    favorites: [],
  };

  getFavorites = async () => {
    try {
      const allKeys = await Storage.instance.getAllKeys();
      const keys = allKeys.filter((key) => key.includes('favorite-'));
      const favs = await Storage.instance.multiGet(keys);
      const favorites = favs.map((fav) => JSON.parse(fav[1]));
      this.setState({favorites});
    } catch (err) {
      console.log('get favorites err', err);
    }
  };

  componentDidMount() {
    this.getFavorites();
    this.props.navigation.addListener('focus', this.getFavorites);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus', this.getFavorites);
  }

  handlePress(coin) {
    this.props.navigation.navigate('CoinDetail', {coin});
  }

  render() {
    const {favorites} = this.state;

    return (
      <View style={styles.container}>
        {favorites.length === 0 ? (
          <FavoritesEmptyState />
        ) : (
          <FlatList
            data={favorites}
            renderItem={({item}) => (
              <CoinsItem item={item} onPress={() => this.handlePress(item)} />
            )}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.charade,
    flex: 1,
  },
});

export default FavoritesScreen;
