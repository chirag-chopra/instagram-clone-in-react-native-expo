import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { Icon } from "native-base";
import HeaderButtons, {
  HeaderButton,
  Item
} from "react-navigation-header-buttons";

import HomeTab from "./screens/homeTab";
import SearchTab from "./screens/searchTab";
import AddMediaTab from "./screens/addMediaTab";
import LikeTab from "./screens/likeTab";
import ProfileTab from "./screens/profileTab";

const IoniconsHeaderButton = passMeFurther => (
  <HeaderButton
    {...passMeFurther}
    IconComponent={Ionicons}
    iconSize={23}
    color="#4C4B4B"
  />
);

const AppTabBar = createBottomTabNavigator(
  {
    Home: { screen: HomeTab },
    Search: { screen: SearchTab },
    AddMedia: { screen: AddMediaTab },
    Like: { screen: LikeTab },
    Profile: { screen: ProfileTab }
  },
  {
    tabBarPosition: "bottom",
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: "#FFF"
      },
      labelStyle: {
        textAlign: "center"
      },
      indicatorStyle: {
        borderBottomColor: "#FFF",
        borderBottomWidth: 2
      }
    }
  }
);

const App = createStackNavigator({
  AppTabBar: {
    screen: AppTabBar,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(App);
