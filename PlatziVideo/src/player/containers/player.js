import React, { Component } from 'react'
import Video from 'react-native-video'
import {
  StyleSheet,
  ActivityIndicator,
  Text
} from 'react-native'
import { Layout } from '../components/layout'
import { ControlLayout } from '../components/control-layout'
import { PlayPause } from '../components/play-pause'

class Player extends Component {
  state = {
    loading: true,
    paused: false
  }

  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering
    })
  }

  onLoad = () => {
    this.setState({
      loading: false
    })
  }

  playPause = () => {
    this.setState((prevState) => ({
      paused: !prevState.paused
    }))
  }

  render() {
    return (
      <Layout
        video={
          <Video
            source={{uri: 'https://player.vimeo.com/external/195912468.sd.mp4?s=4fdf320d5912bcfc67fcdb40d85a75ed38c2285a&profile_id=164&oauth2_token_id=57447761'}}
            style={styles.video}
            resizeMode='contain'
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.paused}
          />
        }
        loader={
          <ActivityIndicator color='red' />
        }
        loading={this.state.loading}
        controls={
          <ControlLayout>
            <PlayPause
              onPress={this.playPause}
              paused={this.state.paused}
            />
            <Text>FullScream</Text>
          </ControlLayout>
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
})

export {
  Player
}