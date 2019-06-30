import React from "react";
import { View, Dimensions, Image } from "react-native";

var images = [
  require("../../assets/characterImg/8.jpg"),
  require("../../assets/characterImg/5.jpg")
];
var { width } = Dimensions.get("window");

export default class TagTab extends React.Component {
  renderGridImages = () => {
    return images.map((image, index) => {
      return (
        <View key={index} style={[{ width: width / 3 }, { height: width / 3 }]}>
          <Image
            style={{ flex: 1, height: undefined, width: undefined }}
            source={image}
          />
        </View>
      );
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        {this.renderGridImages()}
      </View>
    );
  }
}
