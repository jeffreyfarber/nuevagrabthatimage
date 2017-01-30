import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput } from 'react-native';
import ImageDisplay from './imageDisplay.js';

export default class NuevaGrabThatImage extends Component {
  constructor(props) {
    super(props);
    this.state = {url: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          Grab That Image!
        </Text>
        <TextInput
          style={styles.urlTextInput}
          placeholder="Paste URL here!"
          onChangeText={(url) => this.setState({url: url})}
        />
        <ImageDisplay url={this.state.url} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  heading: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
  },
  urlTextInput: {
    height: 40,
    fontSize: 9,
    borderColor: 'black',
    borderWidth: 1,
  }
});

AppRegistry.registerComponent('NuevaGrabThatImage', () => NuevaGrabThatImage);
