import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SectionList,
  FlatList,
  StyleSheet,
} from 'react-native';

import CoinMarketItem from './CoinMarketItem';
import Http from '../../libs/http';
import Colors from '../../res/colors';

class CoinDetailScreen extends Component {
  state = {
    coin: {},
    markets: [],
  };

  componentDidMount() {
    this.getParametters();
  }

  getSymbolIcon(name) {
    if (name) {
      const symbol = name.toLowerCase().replace(' ', '-');
      return `https://c1.coinlore.com/img/25x25/${symbol}.png`;
    }
  }

  getSections(coin) {
    const sections = [
      {
        title: 'Market cap',
        data: [coin.market_cap_usd],
      },
      {
        title: 'Volumne 24h',
        data: [coin.volume24],
      },
      {
        title: 'Change 24h',
        data: [coin.percent_change_24h],
      },
    ];
    return sections;
  }

  async getMarkets(coinId) {
    const url = `https://api.coinlore.net/api/coin/markets/?id=${coinId}`;
    const markets = await Http.instance.get(url);
    this.setState({markets});
  }

  getParametters() {
    // Recibiendo parametros de la navegacion
    const {
      route: {
        params: {coin},
      },
    } = this.props;
    this.props.navigation.setOptions({title: coin.symbol});
    this.setState({coin});
    this.getMarkets(coin.id);
  }

  render() {
    const {coin, markets} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.subHeader}>
          <Image
            source={{uri: this.getSymbolIcon(coin.name)}}
            style={styles.iconImg}
          />
          <Text style={styles.titleText}>{coin.name}</Text>
        </View>
        <SectionList
          style={styles.section}
          sections={this.getSections(coin)}
          keyExtractor={(item) => item}
          renderItem={({item}) => (
            <View style={styles.sectionItem}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({section}) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionText}>{section.title}</Text>
            </View>
          )}
        />

        <Text style={styles.marketTitle}>Markets</Text>
        <FlatList
          style={styles.list}
          keyExtractor={(item) => `${item.base}-${item.name}-${item.quote}`}
          data={markets}
          renderItem={({item}) => <CoinMarketItem item={item} />}
          horizontal={true}
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
  subHeader: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 16,
    flexDirection: 'row',
  },
  titleText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  iconImg: {
    width: 25,
    height: 25,
  },
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: Colors.white,
    fontSize: 14,
  },
  sectionText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  section: {
    maxHeight: 220,
  },
  list: {
    maxHeight: 100,
    paddingLeft: 16,
  },
  marketTitle: {
    color: Colors.white,
    fontSize: 16,
    marginBottom: 16,
    marginLeft: 16,
    fontWeight: 'bold',
  },
});

export default CoinDetailScreen;
