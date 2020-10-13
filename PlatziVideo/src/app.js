import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Home } from './screens/containers/home'
import { Header } from './sections/components/header'
import { SuggestionList } from './video/containers/suggestion-list'
import { CategoryList } from './video/containers/category-list'
import { Movie } from './screens/containers/movie'
import { Search } from './sections/containers/search'

import api from '../utils/api'


class AppLayout extends Component {
  /* state = {
    suggestionList: [],
    categoryList: []
  } */ 

  async componentDidMount() {
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

    /*this.setState({
      suggestionList: movies,
      categoryList: categories
    })*/
  }

  render () {
    if (this.props.selectedMovie) {
      return <Movie />
    }
    return (
      <Home>
        <Header/>
        <Search />
        <CategoryList />
        <SuggestionList />
      </Home>
    )
  }
}

const mapStateToProps = (state)  => {
  return {
    selectedMovie: state.videos.selectedMovie
  }
}

const connected = connect(mapStateToProps)(AppLayout)

export {
  connected as AppLayout
}