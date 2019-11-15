import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  ScrollView,
  Image,
  FlatList,
  ActivityIndicator
} from "react-native";
import * as Font from "expo-font";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [
        {
          image: require("../assets/marvel.png"),
          value: "Marvel Legends",
          text: "6-Inch Deadpoll Action Figure-Exclusive",
          price: "$24.99"
        },
        {
          image: require("../assets/starwars.png"),
          value: "Star Wars",
          text: "Star War Figure-Exclusive",
          price: "$18.99"
        },
        {
          image: require("../assets/transfor.png"),
          value: "Transformers",
          text: "Transformer Figure-Exclusive",
          price: "$20.99"
        },
        {
          image: require("../assets/pokemon.png"),
          value: "Pokemon",
          text: "Pokemon Figure-Exclusive",
          price: "$19.99"
        },
        {
          image: require("../assets/toy.png"),
          value: "Toy Story",
          text: "Toy Story Figure-Exclusive",
          price: "$25.99"
        },
        {
          image: require("../assets/pony.png"),
          value: "Pony Princess",
          text: "Ultimate Pony Rarity.Not Mink",
          price: "$18.74"
        },
        {
          image: require("../assets/barbie.png"),
          value: "Barbie Princess",
          text: "Barbie Princess",
          price: "$29.87"
        },
        {
          image: require("../assets/disney.png"),
          value: "Disney Princess",
          text: "Disney Princess",
          price: "$28.55"
        }
      ],
      fontLoaded: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      "Dosis-Medium": require("../assets/font/Dosis-Medium.otf")
    });
    this.setState({ fontLoaded: true });
  }

  FlatListItemSeparator = () => {
    return (
      <View style={{ height: 1, width: "100%", backgroundColor: "black" }} />
    );
  };
  render() {
    if (this.state.fontLoaded) {
      return (
        <View style={styles.MainContainer}>
          <FlatList
            data={this.state.FlatListItems}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Image source={item.image} style={styles.imageView} />
                <Text
                  style={styles.item}
                  onPress={() =>
                    this.props.navigation.navigate("Details", {
                      itemName: item.value,
                      photo: item.image,
                      text: item.text,
                      price: item.price
                    })
                  }
                >
                  {item.value}
                </Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          ></FlatList>
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
  MainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
    justifyContent: "center"
  },
  imageView: {
    width: "20%",
    height: 100,
    margin: 7,
  },
  item: {
    width: "50%",
    textAlignVertical: "center",
    padding: 10,
    color: "#000",
    fontFamily: "Dosis-Medium",
    fontSize: 18
  }
});
