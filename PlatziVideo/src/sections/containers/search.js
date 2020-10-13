import React, { Component } from 'react'
import {
  TextInput,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { CommonActions } from '@react-navigation/native'
import { withNavigation } from '@react-navigation/compat'

import api from '../../../utils/api'

class Search extends Component {
  state = {
    text: ''
  }

  handleSubmit = async () => {
    const movie = await api.searchMovie(this.state.text)
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie
      }
    })
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: 'Movie'
      })
    )
  }

  handleChangeText = (text) => {
    this.setState({
      text
    })
  }

  render() {
    return (
      <TextInput
        placeholder='Busca tu pelicula favorita'
        underlineColorAndroid='transparent'
        autoCorrect={false}
        autoCapitalize='none'
        onSubmitEditing={this.handleSubmit}
        onChangeText={this.handleChangeText}
        style={styles.input}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea'
  }
})

const connected = connect(null)(withNavigation(Search))

export {
  connected as Search
}