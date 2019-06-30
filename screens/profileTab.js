import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Platform,
  StatusBar
} from "react-native";
import {
  Container,
  Header,
  Left,
  Right,
  Icon,
  Content,
  Card,
  Tab,
  Tabs,
  TabHeading
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import GridPostTab from "./profileTabs/gridPostTab";
import TagTab from "../screens/profileTabs/tagTab";

export default class LikeTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <Container style={styles.androidHeader}>
        <Content>
          <Header style={{ backgroundColor: "white" }}>
            <Left>
              <Text style={{ fontSize: 20 }}>otis_mack</Text>
            </Left>
            <Right>
              <FontAwesome
                name="history"
                size={25}
                style={{ marginHorizontal: 10 }}
              />
              <FontAwesome
                name="navicon"
                size={25}
                style={{ marginHorizontal: 10 }}
              />
            </Right>
          </Header>
          {/* ------------------------------PROFILE + INFO---------------------- */}
          <Card transparent style={{ marginTop: 20 }}>
            <View
              style={{
                flexDirection: "row",
                marginLeft: 10,
                justifyContent: "space-evenly"
              }}
            >
              <View style={{ marginRight: 20, flex: 2 }}>
                <Image
                  source={require("../assets/characterImg/1.jpg")}
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 50,
                    marginHorizontal: 10
                  }}
                />
              </View>
              <View style={{ flex: 4, justifyContent: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly"
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        alignSelf: "center"
                      }}
                    >
                      7
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: "#99AAAB",
                        alignSelf: "center"
                      }}
                    >
                      Posts
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        alignSelf: "center"
                      }}
                    >
                      209
                    </Text>
                    <Text style={{ fontSize: 15, color: "#99AAAB" }}>
                      Followers
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        alignSelf: "center"
                      }}
                    >
                      12
                    </Text>
                    <Text style={{ fontSize: 15, color: "#99AAAB" }}>
                      Following
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Card>
          {/* ----------------------------------NAME AND BIO------------------------ */}
          <Card transparent>
            <View style={{ marginHorizontal: 20 }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Otis Mack
              </Text>
              <Text>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Text>
            </View>
          </Card>
          {/* ----------------------------------EDIT PROFILE----------------------------- */}
          <View>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 6,
                borderColor: "#99AAAB",
                justifyContent: "center",
                marginHorizontal: 15,
                marginTop: 20,
                paddingVertical: 5
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  color: "black",
                  fontWeight: "bold"
                }}
              >
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
          {/* ------------------------------HIGHLIGHTS------------------------- */}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginVertical: 15 }}
          >
            <View style={{ marginHorizontal: 15 }}>
              <ImageBackground
                style={{
                  color: "#FFF",
                  borderColor: "#99AAAB",
                  height: 70,
                  width: 70,
                  borderWidth: 1,
                  borderRadius: 35,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <AntDesign name="plus" size={30} />
              </ImageBackground>
              <Text style={{ alignSelf: "center" }}>New</Text>
            </View>

            <View style={{ marginHorizontal: 15 }}>
              <ImageBackground
                style={{
                  color: "#FFF",
                  borderColor: "#99AAAB",
                  height: 70,
                  width: 70,
                  borderWidth: 1,
                  borderRadius: 35,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  source={require("../assets/characterImg/1.jpg")}
                  style={{ height: 62, width: 62, borderRadius: 31 }}
                />
              </ImageBackground>
              <Text style={{ alignSelf: "center" }}>One</Text>
            </View>

            <View style={{ marginHorizontal: 15 }}>
              <ImageBackground
                style={{
                  color: "#FFF",
                  borderColor: "#99AAAB",
                  height: 70,
                  width: 70,
                  borderWidth: 1,
                  borderRadius: 35,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  source={require("../assets/characterImg/2.jpg")}
                  style={{ height: 62, width: 62, borderRadius: 31 }}
                />
              </ImageBackground>
              <Text style={{ alignSelf: "center" }}>Two</Text>
            </View>

            <View style={{ marginHorizontal: 15 }}>
              <ImageBackground
                style={{
                  color: "#FFF",
                  borderColor: "#99AAAB",
                  height: 70,
                  width: 70,
                  borderWidth: 1,
                  borderRadius: 35,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  source={require("../assets/characterImg/3.jpg")}
                  style={{ height: 62, width: 62, borderRadius: 31 }}
                />
              </ImageBackground>
              <Text style={{ alignSelf: "center" }}>Three</Text>
            </View>

            <View style={{ marginHorizontal: 15 }}>
              <ImageBackground
                style={{
                  color: "#FFF",
                  borderColor: "#99AAAB",
                  height: 70,
                  width: 70,
                  borderWidth: 1,
                  borderRadius: 35,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  source={require("../assets/characterImg/4.jpg")}
                  style={{ height: 62, width: 62, borderRadius: 31 }}
                />
              </ImageBackground>
              <Text style={{ alignSelf: "center" }}>Four</Text>
            </View>

            <View style={{ marginHorizontal: 15 }}>
              <ImageBackground
                style={{
                  color: "#FFF",
                  borderColor: "#99AAAB",
                  height: 70,
                  width: 70,
                  borderWidth: 1,
                  borderRadius: 35,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  source={require("../assets/characterImg/5.jpg")}
                  style={{ height: 62, width: 62, borderRadius: 31 }}
                />
              </ImageBackground>
              <Text style={{ alignSelf: "center" }}>Five</Text>
            </View>
          </ScrollView>
          {/* ------------------------------TABS------------------------- */}
          <View>
            <Tabs tabBarUnderlineStyle={{ backgroundColor: "black" }}>
              <Tab
                heading={
                  <TabHeading style={{ backgroundColor: "white" }}>
                    <MaterialIcons name="grid-on" size={30} />
                  </TabHeading>
                }
                tabStyle={{ backgroundColor: "white" }}
                textStyle={{ color: "black" }}
                activeTabStyle={{ backgroundColor: "white" }}
                activeTextStyle={{ color: "black" }}
              >
                <GridPostTab />
              </Tab>
              <Tab
                heading={
                  <TabHeading style={{ backgroundColor: "white" }}>
                    <Ionicons name="ios-people" size={30} />
                  </TabHeading>
                }
                tabStyle={{ backgroundColor: "white" }}
                textStyle={{ color: "black" }}
                activeTabStyle={{ backgroundColor: "white" }}
                activeTextStyle={{ color: "black" }}
              >
                <TagTab />
              </Tab>
            </Tabs>
          </View>
        </Content>
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
