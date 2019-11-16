import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./screens/Home";
import Categories from "./screens/Categories";
import Listing from "./screens/Listing";
import Details from "./screens/Details";
import Map from "./screens/Map";

const StackNavigatorConfig = {
  initialRouteName: "Home"
};

const RouteConfig = {
  Home: {
    screen: Home,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: "lightblue",
        elevation: 0 //For Android to hide header bottom shadow color
      }
    })
  },
  Categories: {
    screen: Categories,
    navigationOptions: () => ({
      title: "Category Lists",
      headerStyle: { backgroundColor: "lightblue" },
      headerTitleStyle: {
        color: "white",
        textAlign: "center",
        width: "80%",
        fontFamily: "Dosis-Bold",
        fontWeight: "300"
      },
      //change back key color
      headerTintColor: "white"
    })
  },

  Listing: {
    screen: Listing,
    navigationOptions: () => ({
      title: "Action Figures",
      headerStyle: { backgroundColor: "lightblue" },
      headerTitleStyle: {
        color: "white",
        textAlign: "center",
        width: "80%",
        fontFamily: "Dosis-Bold",
        fontWeight: "300"
      },
      headerTintColor: "white"
    })
  },
  Details: {
    screen: Details
  },
  Map: {
    screen: Map,
    navigationOptions: () => ({
      title: "You can buy here...",
      headerStyle: { backgroundColor: "lightblue" },
      headerTitleStyle: {
        color: "white",
        textAlign: "center",
        width: "80%",
        fontFamily: "Dosis-Bold",
        fontWeight: "300"
      },
      headerTintColor: "white"
    })
  }
};

export default createAppContainer(
  createStackNavigator(RouteConfig, StackNavigatorConfig)
);
