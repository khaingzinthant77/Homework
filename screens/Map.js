import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, StatusBar, Dimensions } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapRegion: {
        latitude: 19.754578,
        longitude: 96.2012023,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        {/* <StatusBar barStyle="dark-content" hidden={false}></StatusBar> */}
        <MapView
          style={{ alignSelf: "stretch", height: "100%" }}
          region={this.state.mapRegion}
        >
          <Marker
            style={{ width: 60, height: 40 }}
            coordinate={{
              latitude: 19.75462,
              longitude: 96.203392
            }}
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={"Linn Mobile Mark"}
            description={"MA-30,58 street, Pyinmana"}
          ></Marker>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "lightsalmon",
    alignItems: "center",
    justifyContent: "center"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
