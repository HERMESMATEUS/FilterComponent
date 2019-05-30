/**
 *
 * HERMESMATEUS
 *
 */

import React, { Component } from "react";
import { View } from "react-native";
import FilterScreen from './FilterComponent/Filter.screen';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }} >
        <FilterScreen />
      </View>
    );
  }
}
