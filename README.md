# Grab That Image App
Use this sample app to explore [StyleSheets](#stylesheets), [State](#state), and [Props](#props).

To get started:
```
git clone https://github.com/jeffreyfarber/nuevagrabthatimage
cd nuevagrabthatimage
npm install
react-native run-ios
```

### StyleSheets
See `StyleSheet.create()` in index.ios.js.  Using this StyleSheet syntax creates reusable formats that can be applied to multiple items, without duplicating the styles.  For instance:
###### index.ios.js
```
render() {
  return (
    <View>
      <Text style={{fontSize: 20, color: 'red', fontStyle: 'italic', 'fontWeight: 'bold'}}>Some text #1</Text>
      <Text style={{fontSize: 20, color: 'red', fontStyle: 'italic', 'fontWeight: 'bold'}}>Some text #2</Text>
      <Text style={{fontSize: 20, color: 'red', fontStyle: 'italic', 'fontWeight: 'bold'}}>Some text #3</Text>
  );
}
```
The font size, color, etc. are duplicated for every `<Text>` tag.  If you want to make it a little easier to read and easier to change (by changing one spot instead of three), create and refer to a StyleSheet:
```
render() {
    return (
      <View>
        <Text style={styles.textFormat}>Some text #1</Text>
        <Text style={styles.textFormat}>Some text #2</Text>
        <Text style={styles.textFormat}>Some text #3</Text>
      </View>
    );
}
...
const styles = StyleSheet.create({
    textFormat: {
      fontSize: 20,
      color: 'red',
      fontStyle: 'italic',
      fontWeight: 'bold',
    },
});
```
For more information, see [React Native Stylesheet Documentation](https://facebook.github.io/react-native/docs/stylesheet.html)

### State
State is a way to keep track of temporary settings or variables within a Component.  In the index.ios.js example, explore these lines of code:
###### index.ios.js
```
  constructor(props) {
    super(props);
    this.state = {url: ''};
  }
  ...
  <TextInput
    style={styles.urlTextInput}
    placeholder="Paste URL here!"
    onChangeText={(url) => this.setState({url: url})}
  />
```
`this.state.url` should refer to the text that the user put into the text input box.  When the app starts (is 'constructed' and the 'constructor') runs, we set `this.state.url = '';` (an empty string, since the user hasn't yet typed anything).  When the text is changed, we call `this.setState({url: url})` which is a special function we use to modify state variables, and that will set `this.state.url` to the value that the user typed.  The `onChangeText` will repeat this everytime the user changes the text.

For more information, see [React Native State Documentation](https://facebook.github.io/react-native/docs/state.html)

### Props
Whereas state is used to keep track of variables _within_ a Component, props are used to pass variables _between_ Components.  Explore this code, which imports and renders the `ImageDisplay` Component:
###### index.ios.js
```
import ImageDisplay from './imageDisplay.js';
...
render() {
  return (
      <ImageDisplay url={this.state.url} />
  );
}
```
This will call the `render()` function within the `ImageDisplay` Component, which in turn looks like this:
###### imageDisplay.js
```
  render() {
    ...
          <Text style={styles.normalText}>
            {this.props.url}
          </Text>
```
Here we refer to the 'url' that is provided as a property, and we use `this.props.url` to get its value.  The value is provided in the index.ios.js file via the `<ImageDisplay ... />` tag.  This is how we use 'props' to pass values between Components.  For more information, see [React Native Props Documentation](https://facebook.github.io/react-native/docs/props.html).
