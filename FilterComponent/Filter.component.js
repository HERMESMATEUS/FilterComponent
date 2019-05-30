
import React, { Component } from "react";
import { View } from "react-native";

export default class FilterComponent extends Component {
  render() {

    return (
      <View style={{ flex: 1 }} >
        {this.props.children}
      </View>
    );
  }
}
