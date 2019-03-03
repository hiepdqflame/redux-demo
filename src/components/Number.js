import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Number extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.wrapText}>0</Text>
      </View>
    )  
  }
}
const styles = StyleSheet.create({
  wrapText: {
      fontSize: 100,
      color: '#000'
  }
})
