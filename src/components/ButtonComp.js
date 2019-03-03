import React from 'react';
import {Button} from 'react-native-elements';

const ButtonComp = ({title, onPress}) => {
  const styles = {
    myButton: {
      marginBottom: 10
    },
  }
  return(
    <Button
      style = {styles.myButton}
      title = {title}
      onPress = {onPress}
    />
  )
}

export default ButtonComp;
