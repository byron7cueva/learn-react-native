import React, { Component } from 'react'
import {
  FlatList
} from 'react-native'
import { LayoutBackground } from '../components/layout-background'
import { Empty } from '../components/empty'
import { HorizontalSeparator } from '../components/horizontal-separator'
import { Category } from '../components/category'
// Conectar a redux el componente
import { connect } from 'react-redux'

class CategoryList extends Component {
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

  renderItem({ item }) {
    return (
      <Category {...item } />
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
    list: state.categoryList
  }
}

const connected = connect(mapStateToProps)(CategoryList)

export {
   connected as CategoryList
}