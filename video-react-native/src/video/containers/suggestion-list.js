import React, { Component } from 'react'
import {
  FlatList
} from  'react-native'
import { Layout } from '../components/layout'
import { Empty } from '../components/empty'
import { VerticalSeparator } from '../components/vertical-separator'
import { Suggestion } from '../components/suggestion'
import { connect } from 'react-redux'

class SuggestionList extends Component {
  renderItem = ({ item }) => (
    <Suggestion
      {...item}
      onPress={this.viewMovie.bind(this, item)}
    />
  )

  keyExtractor(item) {
    return item.id.toString()
  }

  renderEmpyList() {
    return (
      <Empty text='No hay recomendaciones :('/>
    )
  }

  renderItemSeparator() {
    return (
      <VerticalSeparator />
    )
  }

  viewMovie(item) {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: item
      }
    })
  }

  render() {
    // Las key deben ser de tipo string
    return (
      <Layout title='Recomendado para ti'>
        <FlatList
          data={this.props.list}
          ListEmptyComponent={this.renderEmpyList}
          ItemSeparatorComponent={this.renderItemSeparator}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </Layout>
    )
  }
}

// Mapea el estado a las props
const mapStateToProps = (state) => {
  // Que es lo que se va mapear del estado a las props
  return {
    list: state.suggestionList
  }
}

const connected = connect(mapStateToProps)(SuggestionList)

export {
  connected as SuggestionList
}