import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  FlatList
} from  'react-native'
import { CommonActions } from '@react-navigation/native'
import { withNavigation } from '@react-navigation/compat'

import { Layout } from '../../video/components/layout'
import { Empty } from '../../video/components/empty'
import { VerticalSeparator } from '../../video/components/vertical-separator'
import { Suggestion } from '../../video/components/suggestion'

class Category extends Component {
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

    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: 'Movie'
      })
    )
  }

  render() {
    // Las key deben ser de tipo string
    return (
      <Layout title={`${this.props.route.params?.genre ?? 'Categoria'}`} >
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
    list: state.categoryList
  }
}

const connected = connect(mapStateToProps)(withNavigation(Category))

export {
  connected as Category
}