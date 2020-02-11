import React from 'react';
import {
  asset,  
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import { COLORS } from '../../constants/index';

export default class Sign extends React.Component {
  render() {
    const { text, position, directions } = this.props;
    const { signPosition } = StyleSheet.create({
        signPosition: { transform: [ { translate: position } ] }
    })
    return (
      <View style={[styles.container, signPosition]}>
        <View style={styles.greetingBox2}>
          {text && (
            <View style={styles.row}>
              <Text style={styles.greeting2}>
                { text }
              </Text>
            </View>
          )}
          {directions && directions.map(({ location, direction }) => (
            <View key={location.name} style={styles.row}>
              <Image
                style={styles.arrow}
                source={asset(`icons/arrow-${direction}.svg`)}
              />
              <Image
                style={styles.roomIcon}
                source={asset(location.icon)}
              />
              <Text style={styles.greeting2}>
                { location.name }
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  roomIcon: {
    height: 50,
    width: 50,
    marginRight: 20,
  },
  arrow: {
    height: 30,
    width: 30,
    marginRight: 50,
  },
  greetingBox2: {
    padding: 20,
    borderColor: COLORS.WHITE,
    borderWidth: 1,
  },
  greeting2: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Sign', () => Sign);
