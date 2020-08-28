import React from 'react'
import {
  View,
  Text,
  Image,
  // ScrollView es como un viwe normal esta pensado para que pueda contener contenido desbordado dentro del viewport y poder hacer scroll
  ScrollView,
  StyleSheet
} from 'react-native'
// WebView permite insertar una view que en su interior permite cargar una pagina web o contenido web
import { WebView } from 'react-native-webview'

export const Details = (props) => (
  <ScrollView>
    <View style={styles.top}>
      <Text style={styles.title}>
        {props.title}
      </Text>
    </View>
    <View style={styles.bottom}>
      <View style={styles.details}>
        <Image
          style={styles.cover}
          source={{
            uri: props.medium_cover_image
          }}
        />
        <Text style={styles.description}>
          {props.description_full}
        </Text>
      </View>
      <View style={styles.trailer}>
        <WebView
          source={{ html: makeHtml(props.yt_trailer_code) }}
        />
      </View>
    </View>
  </ScrollView>
)

const makeHtml = (id) => {
  return `
    <style>
      iframe {
        position: absolute;
        letf: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
      }
      .video {
        positon: relative;
        padding-bottom: 52.25%;
      }
    </style>
    <div class="video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `
}

const styles = StyleSheet.create({
  trailer: {
    height: 200,
    marginBottom: 10
  },
  details: {
    flexDirection: 'row',
    marginBottom: 20
  },
  cover: {
    width: 125,
    height: 190
  },
  title: {
    color: '#44546b',
    fontSize: 18,
    fontWeight: 'bold'
  },
  top: {
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    padding: 20,
    backgroundColor: 'white'
  },
  bottom: {
    padding: 20,
    flex: 1
  },
  description: {
    fontSize: 15,
    lineHeight: 22.5,
    color: '#4c4c4c',
    marginLeft: 10,
    flex: 1
  }
})