import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import { Icon, Container, Content } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class YouScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="md-search" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <Container>
        <Content>
          {/* ------------------------------------FOLLOW REQUEST------------------------- */}
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View
              style={{
                flex: 2,
                marginLeft: 10
              }}
            >
              <View
                style={{
                  height: 55,
                  width: 55,
                  borderRadius: 55 / 2,
                  borderColor: "black",
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <MaterialIcons name="person-add" size={45} />
              </View>
            </View>
            <View style={{ flex: 8, marginVertical: 10 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 15, color: "black" }}
              >
                Follow requests
              </Text>
              <Text style={{ fontSize: 15, color: "#99AAAB" }}>
                Approve or ignore requests
              </Text>
            </View>
          </View>
          {/* -----------------------------YESTERDAY------------------------------- */}
          <View style={{ marginLeft: 10, marginVertical: 15 }}>
            <Text style={{ fontSize: 15, color: "black" }}>Yesterday</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ height: 60, width: undefined, flex: 2 }}>
              <ImageBackground
                source={require("../../assets/characterImg/8.jpg")}
                style={{
                  height: 40,
                  width: 40,
                  borderWidth: 1,
                  borderColor: "white",
                  marginLeft: 10
                }}
                imageStyle={{ borderRadius: 20 }}
              >
                <Image
                  source={require("../../assets/characterImg/7.jpg")}
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: "white",
                    marginTop: 10,
                    marginLeft: 10
                  }}
                />
              </ImageBackground>
            </View>
            <View style={{ flex: 8 }}>
              <Text>
                <Text
                  style={{ color: "black", fontWeight: "bold", fontSize: 15 }}
                >
                  leon_george43,debra_perez09
                </Text>
                and
                <Text
                  style={{ color: "black", fontWeight: "bold", fontSize: 15 }}
                >
                  21 others
                </Text>
                started following you
                <Text style={{ color: "#99AAAB", fontSize: 15 }}>2 days</Text>
              </Text>
            </View>
          </View>
          {/* --------------------------THIS WEEK--------------------- */}
          <View style={{ marginLeft: 10, marginVertical: 15 }}>
            <Text style={{ fontSize: 15, color: "black" }}>This Week</Text>
          </View>
          {/* ---------------------THIS WEEK CONTENT------------ */}
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={{ flex: 2, marginLeft: 10 }}>
              <Image
                source={require("../../assets/characterImg/8.jpg")}
                style={{ height: 50, width: 50, borderRadius: 25 }}
              />
            </View>
            <View style={{ flex: 5, marginVertical: 10 }}>
              <Text style={{ fontSize: 15 }}>
                You liked 3 posts taged{" "}
                <Text style={{ color: "#0A3D62" }}>#baseball</Text>
                <Text style={{ fontSize: 15 }}>this week</Text>
                <Text style={{ color: "#99AAAB", fontSize: 15 }}> 2 d</Text>
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
            <View style={{ flex: 3 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#2e88db",
                  borderRadius: 5,
                  marginRight: 15
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    paddingVertical: 7,
                    paddingHorizontal: 5,
                    alignSelf: "center"
                  }}
                >
                  Follow
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
