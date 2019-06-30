import React from "react";
import { View, Dimensions, Image } from "react-native";

var images = [
  require("../../assets/characterImg/1.jpg"),
  require("../../assets/characterImg/2.jpg"),
  require("../../assets/characterImg/3.jpg"),
  require("../../assets/characterImg/4.jpg"),
  require("../../assets/characterImg/5.jpg"),
  require("../../assets/characterImg/6.jpg"),
  require("../../assets/characterImg/7.jpg")
];
var { width } = Dimensions.get("window");

export default class GridPostTab extends React.Component {
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
