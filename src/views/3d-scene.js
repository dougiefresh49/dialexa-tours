import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-360';
import { TieFighter } from '../components';

export default class Dialexa3DScene extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View >
          <TieFighter />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    width: 4680, // Fill the entire surface
    height: 600,
    // backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('Dialexa3DScene', () => Dialexa3DScene);
