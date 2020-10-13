import React, { Component } from 'react'
import {
  FlatList
} from 'react-native'
import { CommonActions } from '@react-navigation/native'
import { withNavigation } from '@react-navigation/compat'

import { LayoutBackground } from '../components/layout-background'
import { Empty } from '../components/empty'
import { HorizontalSeparator } from '../components/horizontal-separator'
import { Category } from '../components/category'
// Conectar a redux el componente
import { connect } from 'react-redux'

class CategoryList extends Component {
  renderItem = ({ item }) => {
    return (
      <Category {...item } onPress={() => { this.viewCategory(item) }} />
    )
  }

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
      <HorizontalSeparator />
    )
  }

  viewCategory(item) {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: 'Category',
        params: {
          genre: item.genres[0]
        }
      })
    )
  }

  render() {
    return (
      <LayoutBackground title='Categorias'>
        <FlatList
          data={this.props.list}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmpyList}
          ItemSeparatorComponent={this.renderItemSeparator}
          renderItem={this.renderItem}
          horizontal={true}
        />
      </LayoutBackground>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.videos.categoryList
  }
}

const connected = connect(mapStateToProps)(withNavigation(CategoryList))

export {
   connected as CategoryList
}