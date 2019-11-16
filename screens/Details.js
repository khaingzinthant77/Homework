import React from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import * as Font from "expo-font";

export default class Details extends React.Component {
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
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("itemName", ""),
      headerStyle: {
        backgroundColor: "lightblue"
      },
      headerTitleStyle: {
        color: "white",
        width: "80%",
        textAlign: "center",
        fontFamily: "Dosis-Bold",
        fontWeight:"300"
      },
      headerTintColor: "white"
    };
  };
  render() {
    // console.log(this.props.navigation);

    const { navigation } = this.props;
    if (this.state.fontLoaded) {
      return (
        <View style={styles.container}>
          <Image
            style={styles.imageStyle}
            source={navigation.getParam("photo")}
          ></Image>
          <View style={styles.footer}>
            <Text style={styles.textTitle}>{navigation.getParam("text")}</Text>
            <Text style={styles.textPrice}>{navigation.getParam("price")}</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.props.navigation.navigate("Map")}
              activeOpacity={0.8}
            >
              <Text style={styles.btnText}>Where can I buy?</Text>
            </TouchableOpacity>
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
    flex: 1
  },
  imageStyle: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    height: "100%",
    borderWidth: 1,
    borderColor: "black",
    marginTop: 10,
    flex: 4
  },
  footer: {
    flex: 1,
    marginVertical: 10
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 14,
    marginHorizontal: 25,
    fontFamily: "Dosis-Bold"
  },
  textPrice: {
    color: "lightsalmon",
    fontSize: 13,
    marginHorizontal: 25,
    marginVertical: 10,
    fontFamily: "Dosis-Bold"
  },
  btnText: {
    fontSize: 15,
    color: "blue",
    alignSelf: "center",
    marginVertical: 10,
    fontFamily: "Dosis-Bold"
  },
  btn: {
    width: "90%",
    height: 40,
    backgroundColor: "skyblue",
    paddingHorizontal: 20,
    alignSelf: "center"
  }
});
