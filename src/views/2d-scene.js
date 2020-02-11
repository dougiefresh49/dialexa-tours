import React from 'react';
import {
  asset,
  AppRegistry,
  Environment,
  StyleSheet,
  View,
} from 'react-360';
import { Portal, Sign } from '../components';
import { ROOMS } from '../constants';

export default class Dialexa2DScene extends React.Component {
  state = {
    currentRoom: ROOMS.GREAT_HALL,
  }

  constructor(props) {
    super(props);
    this.changeRoom = this.changeRoom.bind(this);
  }

  changeRoom(newRoomId) {
    const newRoom = ROOMS[newRoomId];
    this.setState({ currentRoom: newRoom });
    Environment.setBackgroundImage(asset(newRoom.location.image))
  }

  render() {
    const { currentRoom } = this.state;
    const { signs, portals } = currentRoom;

    return (
      <View style={styles.panel}>
          {signs && signs.length && signs.map((sign, idx) => (
            <Sign
              key={idx}
              text={sign.text}
              position={sign.position}
              directions={sign.directions}
            />
          ))}
          {portals && [portals].length && portals.map((portal, idx) => (
            <Portal
              key={idx}
              travelTo={portal.travelTo}
              position={portal.position}
              changeRoom={this.changeRoom}
            />
          ))}
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

AppRegistry.registerComponent('Dialexa2DScene', () => Dialexa2DScene);
