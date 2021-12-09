import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height

const Map = () => {
  return (
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
  )
}

const styles = StyleSheet.create({
  map: {
    height
  }
})

export default Map