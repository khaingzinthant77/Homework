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
      "Pyidaungsu-Bold": require("../assets/Pyidaungsu/Pyidaungsu-Bold.ttf"),
      "Dosis-Regular": require("../assets/font/Dosis-Regular.otf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if (this.state.fontLoaded) {
      return (
        <View style={styles.container}>
          <View style={{ flex: 1 }}></View>
          <Image
            style={styles.image}
            source={require("../assets/panda-bear.png")}
          ></Image>
          <Text style={styles.text}> ရုပ်စုံကမ္ဘာမှကြိုဆိုပါတယ်။</Text>

          <Text style={styles.text}>
            ကလေးတို့လိုချင်တဲ့အရုပ်မျိုးစုံကိုဒီမှာရနိုင်ပြီနော်...
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Categories")}
          >
            <Image
              style={styles.forward}
              source={require("../assets/right-arrow.png")}
            />
          </TouchableOpacity>
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Code with heart by Ulitimated Solutions
            </Text>
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
    justifyContent: "center",
    backgroundColor: "lightblue"
  },
  image: {
    width: "10%",
    height: 40,
    justifyContent: "flex-start",
    marginLeft: 20
  },
  text: {
    paddingLeft: 20,
    fontSize: 15,
    fontFamily: "Pyidaungsu-Bold"
  },
  forward: {
    alignSelf: "flex-end",
    width: "10%",
    height: 22,
    resizeMode: "contain",
    marginTop: 10,
    marginHorizontal: 20
  },
  footer: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1
  },
  footerText: {
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Dosis-Regular"
  }
});
