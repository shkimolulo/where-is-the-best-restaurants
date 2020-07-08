import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import { SearchBarProps, SearchBarStates, ISearchBar } from './types';


class SearchBar extends React.Component<
  SearchBarProps, SearchBarStates
> implements ISearchBar {

  constructor(props) {
    super(props);

    this.onChangeText = this.onChangeText.bind(this);

    this.state = {
      text: '',
    };
  }

  onChangeText(text: string) {
    this.setState({text: text});
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={this.onChangeText}
            value={this.state.text}
          />
        </View>

        <View style={styles.button}>

        </View>

      </View>
    );
  }

}

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 80,
    marginTop: 100,
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
  textInputContainer: {
    width: 230,
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 2,
    height: 50,
  },
  button: {
    width: 70,
    backgroundColor: 'red',
  },
});