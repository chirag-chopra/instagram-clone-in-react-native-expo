import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Platform,
  ImageBackground
} from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Header,
  Icon
} from "native-base";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default class HomeTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-home" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <Container style={{ backgroundColor: "white" }}>
        <Content>
          <Header style={styles.androidHeader}>
            <Left style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <Image
                  source={require("../assets/homeAssets/instagramHeaderCamera.png")}
                  style={{
                    height: 25,
                    width: 25,
                    marginTop: 5,
                    paddingHorizontal: 5
                  }}
                />
              </TouchableOpacity>
              <Image
                source={require("../assets/homeAssets/instagramHeaderIcon.png")}
              />
            </Left>

            <Right>
              <Icon
                name="ios-tv"
                style={{ color: "black", paddingHorizontal: 5 }}
              />
              <Icon
                name="ios-send"
                style={{ color: "black", paddingHorizontal: 5 }}
              />
            </Right>
          </Header>
          {/* -------------------------------------STORY START------------------ */}
          <Card transparent style={{ backgroundColor: "white" }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignContent: "center",
                paddingStart: 15,
                paddingEnd: 5,
                alignItems: "center",
                marginVertical: 5
              }}
            >
              <View>
                <Thumbnail
                  source={require("../assets/characterImg/1.jpg")}
                  style={{
                    height: 55,
                    width: 55,
                    borderWidth: 3,
                    marginRight: 20
                  }}
                />
                <Text>Your Story</Text>
              </View>

              <View style={{ marginRight: 20 }}>
                <ImageBackground
                  style={{
                    color: "#FFF",
                    borderColor: "#99AAAB",
                    height: 55,
                    width: 55,
                    borderWidth: 1,
                    borderRadius: 55 / 2,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Image
                    source={require("../assets/characterImg/2.jpg")}
                    style={{ height: 50, width: 50, borderRadius: 25 }}
                  />
                </ImageBackground>
                <Text style={{ alignSelf: "center" }}>One</Text>
              </View>

              <View style={{ marginRight: 20 }}>
                <ImageBackground
                  style={{
                    color: "#FFF",
                    borderColor: "#99AAAB",
                    height: 55,
                    width: 55,
                    borderWidth: 1,
                    borderRadius: 55 / 2,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Image
                    source={require("../assets/characterImg/3.jpg")}
                    style={{ height: 50, width: 50, borderRadius: 25 }}
                  />
                </ImageBackground>
                <Text style={{ alignSelf: "center" }}>Two</Text>
              </View>

              <View style={{ marginRight: 20 }}>
                <ImageBackground
                  style={{
                    color: "#FFF",
                    borderColor: "#99AAAB",
                    height: 55,
                    width: 55,
                    borderWidth: 1,
                    borderRadius: 55 / 2,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Image
                    source={require("../assets/characterImg/4.jpg")}
                    style={{ height: 50, width: 50, borderRadius: 25 }}
                  />
                </ImageBackground>
                <Text style={{ alignSelf: "center" }}>Three</Text>
              </View>

              <View style={{ marginRight: 20 }}>
                <ImageBackground
                  style={{
                    color: "#FFF",
                    borderColor: "#99AAAB",
                    height: 55,
                    width: 55,
                    borderWidth: 1,
                    borderRadius: 55 / 2,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Image
                    source={require("../assets/characterImg/5.jpg")}
                    style={{ height: 50, width: 50, borderRadius: 25 }}
                  />
                </ImageBackground>
                <Text style={{ alignSelf: "center" }}>Four</Text>
              </View>

              <View style={{ marginRight: 20 }}>
                <ImageBackground
                  style={{
                    color: "#FFF",
                    borderColor: "#99AAAB",
                    height: 55,
                    width: 55,
                    borderWidth: 1,
                    borderRadius: 55 / 2,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Image
                    source={require("../assets/characterImg/6.jpg")}
                    style={{ height: 50, width: 50, borderRadius: 25 }}
                  />
                </ImageBackground>
                <Text style={{ alignSelf: "center" }}>Five</Text>
              </View>
            </ScrollView>
          </Card>
          {/* --------------------------------POST START------------------------------------ */}
          <Card transparent>
            <CardItem>
              <Left>
                <Thumbnail
                  source={require("../assets/characterImg/4.jpg")}
                  style={{ height: 30, width: 30 }}
                />
                <Body>
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    chris_fisher
                  </Text>
                  <Text style={{ fontSize: 10 }}>New York, USA</Text>
                </Body>
              </Left>
              <Right>
                <Entypo name="dots-three-vertical" style={{ color: "black" }} />
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require("../assets/characterImg/4.jpg")}
                style={{ height: 400, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <TouchableOpacity style={{ paddingHorizontal: 7 }}>
                  <FontAwesome
                    name="heart-o"
                    style={{ color: "black" }}
                    size={25}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingHorizontal: 7 }}>
                  <FontAwesome
                    name="comment-o"
                    style={{ color: "black" }}
                    size={25}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingHorizontal: 7 }}>
                  <FontAwesome
                    name="send-o"
                    style={{ color: "black" }}
                    size={25}
                  />
                </TouchableOpacity>
              </Left>
              <Right>
                <FontAwesome
                  name="bookmark-o"
                  style={{ color: "black" }}
                  size={25}
                />
              </Right>
            </CardItem>
            <View style={{ marginStart: 10 }}>
              <Text style={{ fontWeight: "900", fontSize: 15 }}>102 likes</Text>
              <Text>
                <Text style={{ fontWeight: "900", fontSize: 15 }}>
                  chris_fisher
                </Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text style={{ color: "#99AAAB", fontSize: 15 }}>
                View all 56 comments
              </Text>
              <Text style={{ fontSize: 12, color: "#99AAAB" }}>3 days ago</Text>
            </View>
          </Card>

          <Card transparent>
            <CardItem>
              <Left>
                <Thumbnail
                  source={require("../assets/characterImg/3.jpg")}
                  style={{ height: 30, width: 30 }}
                />
                <Body>
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    jim_Pena04
                  </Text>
                  <Text style={{ fontSize: 10 }}>New York, USA</Text>
                </Body>
              </Left>
              <Right>
                <Entypo name="dots-three-vertical" style={{ color: "black" }} />
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={require("../assets/characterImg/3.jpg")}
                style={{ height: 400, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <TouchableOpacity style={{ paddingHorizontal: 7 }}>
                  <FontAwesome
                    name="heart-o"
                    style={{ color: "black" }}
                    size={25}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingHorizontal: 7 }}>
                  <FontAwesome
                    name="comment-o"
                    style={{ color: "black" }}
                    size={25}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingHorizontal: 7 }}>
                  <FontAwesome
                    name="send-o"
                    style={{ color: "black" }}
                    size={25}
                  />
                </TouchableOpacity>
              </Left>
              <Right>
                <FontAwesome
                  name="bookmark-o"
                  style={{ color: "black" }}
                  size={25}
                />
              </Right>
            </CardItem>
            <View style={{ marginStart: 10 }}>
              <Text style={{ fontWeight: "900", fontSize: 15 }}>102 likes</Text>
              <Text>
                <Text style={{ fontWeight: "900", fontSize: 15 }}>
                  jim_Pena04
                </Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <Text style={{ color: "#99AAAB", fontSize: 15 }}>
                View all 56 comments
              </Text>
              <Text style={{ fontSize: 12, color: "#99AAAB" }}>3 days ago</Text>
            </View>
          </Card>
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
