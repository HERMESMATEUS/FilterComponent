import React, { Component } from "react";
import { View, TextInput, FlatList } from "react-native";
import Styles from './Styles';
import FilterComponent from './Filter.component';


export default class FilterScreen {

  list({ item }) {

  }

  render() {
    const { DATAJSON } = this.props;
    return (
      <FilterComponent>
        <View style={{ flex: 1 }}>
          <TextInput
            onChangeText={(text) => {
              this.setState({ text })
            }}
            value={this.state.text}
          />
          <FlatList
            data={DATAJSON}
            renderItem={this.list}

          />
        </View>

      </FilterComponent>
    );
  }
}