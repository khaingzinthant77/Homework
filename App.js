import React from "react";
import {ActivityIndicator,View,StyleSheet} from 'react-native';
import Navigation from "./Navigation";
import * as Font from "expo-font";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      "Dosis-Bold": require("./assets/font/Dosis-Bold.otf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if (this.state.fontLoaded) {
    return <Navigation />;
  }else {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  }
}
