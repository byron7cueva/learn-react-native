import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Animated
} from 'react-native'

import { MovieLayout } from '../components/movie-layout'
import { Player } from '../../player/containers/player'
import { Header } from '../../sections/components/header'
import { Close } from '../../sections/components/close'
import { Details } from '../../video/components/details'

class Movie extends Component {

  static navigationOptions = ({ navigation }) => ({
    header: () => (
      <Header>
        <Close onPress={() => {
          navigation.goBack();
        }} />
      </Header>
    )
  })

  state = {
    // Insanciando un valor que puede cambiar
    opacity: new Animated.Value(0)
  }

  componentDidMount() {
    // Se debe pasar una instancia de algo que se pueda animar
    Animated.timing(this.state.opacity, {
      toValue: 1, // A que valor quiero que cambie
      duration: 1000, // Tiempo que se desea que se demore el cambio en millisegundos
      useNativeDriver: true
    }).start() // Lanzando el timing de la animacion
  }

  closeVideo = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null
      }
    })
  }

  render() {
    return (
      <Animated.View
        style={{
          flex: 1,
          opacity: this.state.opacity
        }}
      >
        <MovieLayout>
          <Player />
          <Details {...this.props.selectedMovie} />
        </MovieLayout>
      </Animated.View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie
  }
}

const connected = connect(mapStateToProps)(Movie)

export {
  connected as Movie
}