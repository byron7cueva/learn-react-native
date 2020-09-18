import React, {Component} from 'react';
// Pressable: Es como un link para indicar que se puede presionar
// FlatList: Es una lista plana ya que no tiene secciones
// solo renderiza lo que alcanza a verse en pantalla
// tiene una velocidad de 60 frames por segundo
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';

import Http from '../../libs/http';
import CoinsItem from './CoinsItem';
import Colors from '../../res/colors';

class CoinsScreen extends Component {
  state = {
    coins: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({loading: true});
    const res = await Http.instance.get('https://api.coinlore.net/api/tickers');
    this.setState({coins: res.data, loading: false});
  }

  handlePress = (coin) => {
    // Navegando a otro screen
    this.props.navigation.navigate('CoinDetail', {coin});
  };

  render() {
    const {coins, loading} = this.state;

    return (
      <View style={styles.container}>
        {loading && (
          <ActivityIndicator color="#fff" size="large" style={styles.loader} />
        )}
        <FlatList
          data={coins}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <CoinsItem item={item} onPress={() => this.handlePress(item)} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  titleText: {
    color: '#fff',
    textAlign: 'center',
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
  loader: {
    marginTop: 60,
  },
});

export default CoinsScreen;
