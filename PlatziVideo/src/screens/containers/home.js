import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StatusBar, Platform } from 'react-native'

import { Header } from '../../sections/components/header'
import { SuggestionList } from '../../video/containers/suggestion-list'
import { CategoryList } from '../../video/containers/category-list'
import { Search } from '../../sections/containers/search'

import api from '../../../utils/api'


class Home extends Component {

  static navigationOptions = {
    header: Header
  }

  async componentDidMount() {
    this.props.navigation.addListener('focus', this.handleFocus)

    const categoryList = await api.getMovies()
    // Al connectar el componente a redux se crea la propiedad dispatch sobre props
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })

    const suggestionList = await api.getSuggestion(10)
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus', this.handleFocus)
  }

  handleFocus() {
    StatusBar.setBarStyle('dark-content')
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('white')
    }
  }

  render () {
    return (
      <>
        <Search />
        <CategoryList />
        <SuggestionList />
      </>
    )
  }
}

const connected = connect()(Home)

export {
  connected as Home
}