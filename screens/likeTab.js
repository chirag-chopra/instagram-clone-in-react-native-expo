import React from "react";
import { Container, Tab, Tabs, Icon } from "native-base";
import { StyleSheet, Platform, StatusBar } from "react-native";

import FollowingScreen from "../screens/likeTabs/followingScreen";
import YouScreen from "../screens/likeTabs/youScreen";

export default class LikeTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-heart" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <Container style={styles.androidHeader}>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: "black" }}>
          <Tab
            heading="FOLLOWING"
            tabStyle={{ backgroundColor: "white" }}
            textStyle={{ color: "black" }}
            activeTabStyle={{ backgroundColor: "white" }}
            activeTextStyle={{ color: "black" }}
          >
            <FollowingScreen />
          </Tab>
          <Tab
            heading="YOU"
            tabStyle={{ backgroundColor: "white" }}
            textStyle={{ color: "black" }}
            activeTabStyle={{ backgroundColor: "white" }}
            activeTextStyle={{ color: "black" }}
          >
            <YouScreen />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  androidHeader: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    }),
    backgroundColor: "white"
  }
});
