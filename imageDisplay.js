import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default class ImageDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {errorUrl: ''};
  }

  render() {
    if (this.state.errorUrl && this.props.url && this.props.url === this.state.errorUrl) {
      return (
        <View style={styles.container}>
          <Text style={styles.errorText}>
            Error getting Image from URL:
          </Text>
          <Text style={styles.normalText}>
            {this.props.url}
          </Text>
        </View>
      );
    }
    else if (this.props.url) {
      return (
        <View style={styles.container}>
          <Text style={styles.normalText}>
            Displaying Image from URL:
          </Text>
          <Text style={styles.normalText}>
            {this.props.url}
          </Text>
          <Image
            style={styles.image}
            source={{uri: this.props.url}}
            onLoad={() => {
              console.log('success');
              this.setState({errorUrl: ''});
            }}
            onError={() => {
              console.log('error');
              this.setState({errorUrl: this.props.url});
            }}
          />
        </View>
      );
    }
    else {
      return (
        <View style={styles.container}>
          <Text style={styles.normalText}>
            No URL provided
          </Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  errorText: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
  normalText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width: 250,
    height: 250,
  },
});

AppRegistry.registerComponent('ImageDisplay', () => ImageDisplay);
