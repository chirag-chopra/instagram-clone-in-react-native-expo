import React from "react";
import { Text, View, Image } from "react-native";
import { Container, Content, Icon, Card } from "native-base";

export default class FollowingScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-search" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <Container>
        <Content>
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <View style={{ flex: 2, marginLeft: 10 }}>
                <Image
                  source={require("../../assets/characterImg/8.jpg")}
                  style={{ height: 50, width: 50, borderRadius: 25 }}
                />
              </View>
              <View style={{ flex: 8, marginVertical: 10 }}>
                <Text style={{ fontSize: 15 }}>
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    chris_fisher
                  </Text>{" "}
                  liked 8 posts.{" "}
                  <Text style={{ color: "#99AAAB", fontSize: 15 }}> 56 s</Text>
                </Text>
                <View
                  style={{
                    flexWrap: "wrap",
                    flexDirection: "row",
                    marginTop: 20
                  }}
                >
                  <Image
                    source={require("../../assets/characterImg/8.jpg")}
                    style={{
                      height: 50,
                      width: 50,
                      borderWidth: 1,
                      borderColor: "white"
                    }}
                  />
                  <Image
                    source={require("../../assets/characterImg/8.jpg")}
                    style={{
                      height: 50,
                      width: 50,
                      borderWidth: 1,
                      borderColor: "white"
                    }}
                  />
                  <Image
                    source={require("../../assets/characterImg/8.jpg")}
                    style={{
                      height: 50,
                      width: 50,
                      borderWidth: 1,
                      borderColor: "white"
                    }}
                  />
                </View>
              </View>
            </View>

            <Card transparent>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 2, marginLeft: 10 }}>
                  <Image
                    source={require("../../assets/characterImg/8.jpg")}
                    style={{ height: 50, width: 50, borderRadius: 25 }}
                  />
                </View>
                <View style={{ flex: 8, marginVertical: 10 }}>
                  <Text style={{ fontSize: 15 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                      chris_fisher
                    </Text>{" "}
                    liked 8{" "}
                    <Text style={{ fontWeight: "bold" }}>Walter Beck</Text>{" "}
                    <Text>'s comment:</Text>
                    <Text style={{ color: "#0A3D62" }}>@rileyhanson</Text>
                    <Text>nice picture...</Text>
                    <Text style={{ color: "#99AAAB", fontSize: 15 }}>
                      {" "}
                      56 s
                    </Text>
                  </Text>
                </View>
                <View style={{ flex: 2, marginLeft: 10 }}>
                  <Image
                    source={require("../../assets/characterImg/8.jpg")}
                    style={{ height: 50, width: 50 }}
                  />
                </View>
              </View>
            </Card>
          </View>
        </Content>
      </Container>
    );
  }
}
