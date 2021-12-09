import React from 'react'
import MapView from 'react-native-maps'
import {StyleSheet,
        Dimensions,
        Image, 
        View,
        Text,
      TouchableWithoutFeedback } from 'react-native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const Map = () => {
  return (
    <>
      <MapView
        style={styles.map}
        loadingEnabled={true}
        region={{
          latitude: 48.856614,
          longitude: 2.3522219,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121
        }}
      >
        <MapView.Marker
          coordinate={{
            latitude: 48.868574,
            longitude: 2.380539,
          }}
          title={"Title 1"}
          description={"Description"}
        />
      </MapView>

      <TouchableWithoutFeedback>
      <View style={ styles.card }>
        <Text style={ styles.description}>Nifty Oberkampf</Text>
      </View>
      </TouchableWithoutFeedback>
    </>
  )
}

const styles = StyleSheet.create({
  map: {
    height
  },

  card: {
    backgroundColor: '#fff',
    height: 120,
    width: width -20,
    position: "absolute",
    overflow: "hidden",
    margin: 10,
    bottom: 50,
    textShadowRadius: 20,
    borderRadius: 8
  },
  description: {
    
  }
})

export default Map