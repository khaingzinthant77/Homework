import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
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
      "Dosis-Bold": require("../assets/font/Dosis-Bold.otf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if (this.state.fontLoaded) {
      return (
        <View style={styles.container}>
        <View style={styles.body}>
            <View style={styles.flexcontainer}>
              <TouchableOpacity
                style={styles.box}
                activeOpacity={0.9}
                onPress={() => this.props.navigation.navigate("Listing")}
              >
                <Image
                  style={styles.image}
                  source={require("../assets/transformer.png")}
                ></Image>
                <Text style={styles.text}>Action Figures</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box} activeOpacity={0.9}>
                <Image
                  style={styles.image}
                  source={require("../assets/doll.png")}
                ></Image>
                <Text style={styles.text}>Dolls</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.flexcontainer}>
              <TouchableOpacity style={styles.box} activeOpacity={0.9}>
                <Image
                  style={styles.image}
                  source={require("../assets/mindfulness.png")}
                ></Image>
                <Text style={styles.text}>Educational</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box} activeOpacity={0.9}>
                <Image
                  style={styles.image}
                  source={require("../assets/car.png")}
                ></Image>
                <Text style={styles.text}>Controlled Cars</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.flexcontainer}>
              <TouchableOpacity style={styles.box} activeOpacity={0.9}>
                <Image
                  style={styles.image}
                  source={require("../assets/robot.png")}
                ></Image>
                <Text style={styles.text}>Electronic</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box} activeOpacity={0.9}>
                <Image
                  style={styles.image}
                  source={require("../assets/moon.png")}
                ></Image>
                <Text style={styles.text}>Creative</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.flexcontainer}>
              <TouchableOpacity style={styles.box} activeOpacity={0.9}>
                <Image
                  style={styles.image}
                  source={require("../assets/guitar.png")}
                ></Image>
                <Text style={styles.text}>Sound</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.box} activeOpacity={0.9}>
                <Image
                  style={styles.image}
                  source={require("../assets/trojan-horse.png")}
                ></Image>
                <Text style={styles.text}>Animals</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    padding:7,
    marginLeft:10,
    marginRight:10
  },
  image: {
    
    width: "50%",
    height: "55%",
    resizeMode: "contain",
    marginTop: "5%",
    marginLeft:"25%"
  },
  body: {
    flex: 2,
    paddingHorizontal: 20
  },
  text: {
    fontSize: 15,
    color: "white",
    marginHorizontal: 15,
    fontFamily: "Dosis-Bold",
    marginBottom: 50,
    alignSelf:"center"
  },
  flexcontainer: {
    flexDirection: "row",
    marginVertical: 10,
    flex:1,
    justifyContent:"space-between",
  },

  box: {
    width: "46%",
    height: "100%",
    backgroundColor: "lightblue",
    borderRadius:7,
    marginRight:20
  }
});
