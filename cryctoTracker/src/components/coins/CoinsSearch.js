import React, {Component} from 'react';
import {TextInput, Platform, View, StyleSheet} from 'react-native';

import Colors from '../../res/colors';

class CoinsSearch extends Component {
  state = {
    query: '',
  };

  handleChangeText = (query) => {
    this.setState({query});
    if (this.props.onChange) {
      this.props.onChange(query);
    }
  }

  render() {
    return (
      <View>
        <TextInput
          style={[
            styles.textInput,
            Platform.OS === 'ios'
              ? styles.textInputIOS
              : styles.textInputAndroid,
          ]}
          value={this.state.query}
          onChangeText={this.handleChangeText}
          placeholder="Search coin"
          placeholderTextColor="#fff"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: Colors.charade,
    paddingLeft: 16,
    color: Colors.white,
  },
  textInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.zircon,
  },
  textInputIOS: {
    margin: 8,
    borderRadius: 8,
  },
});

export default CoinsSearch;
