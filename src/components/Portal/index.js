import React from 'react';
import { AppRegistry, asset, StyleSheet, Image, View, VrButton } from 'react-360';
import { COLORS } from '../../constants/index';

export default class Portal extends React.Component {
    state = {
        isActive: false
    }
    render() {
        const { container, portal, activePortal } = styles;
        const { travelTo, changeRoom, position } = this.props;
        const { isActive } = this.state;
        const { portalPosition } = StyleSheet.create({
            portalPosition: { transform: [ { translate: position } ] }
        })
        return (
            <View style={[container, portalPosition]}>
                <VrButton
                    onEnter={() => this.setState({ isActive: true })}
                    onExit={() => this.setState({ isActive: false })}
                    onClick={() => changeRoom(travelTo)}
                >
                    <Image
                        style={[portal, isActive && activePortal ]}
                        source={asset('icons/portal.svg')}
                    />
                </VrButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: COLORS.WHITE,
        backgroundColor: COLORS.BLACK,
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 20
    },
    portal: {
        height: 50,
        width: 50,
        marginRight: 20,
        opacity: 0.7
    },
    activePortal: {
        opacity: 1
    }
});

AppRegistry.registerComponent('Portal', () => Portal);