import React from 'react';
import {View, StyleSheet} from 'react-native';
import ButtonComp from './components/ButtonComp';
import Number from './components/Number';

class Main extends React.Component {
  render() {
    return(
      <View style={styles.wrapAll}>
        <View style={styles.wrapNumber}>
          <Number />
        </View>
        <View style={styles.wrapButton}>
          <ButtonComp 
            title="Increase"
            onPress={() => {}}
          />
          <ButtonComp 
            title="Decrease"
            onPress={() => {}}
          />
        </View>
      </View>
    )
  }
}

export default Main;

const styles = StyleSheet.create({
  wrapAll: {
    flex: 1,
    width: '100%',
    justifyContent: 'center'
  },
  wrapNumber: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapButton: {
    flex: 1
  },
})
