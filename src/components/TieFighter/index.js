import React from 'react';
import { AppRegistry, Animated, asset, View } from 'react-360';
import Entity from 'Entity';
import Easing from 'Easing';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';
import { COLORS } from '../../constants/index';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);
const LOW_JUMP_VALUE = 1.70;
const TOP_JUMP_VALUE = 1.75;

export default class TieFighter extends React.Component {
    rotation = new Animated.Value(0);
    jumpValue = new Animated.Value(LOW_JUMP_VALUE);

    spin() {
        Animated.timing(this.rotation, {
            toValue: 45,
            duration: 2000,
            easing: Easing.linear
        }).start(() => this.spinBack());
    }

    spinBack() {
        Animated.timing(this.rotation, {
            toValue: -45,
            duration: 2000,
            easing: Easing.linear
        }).start(() => this.spin());
    }

    hover(value) {
        let currentVal =
            value === TOP_JUMP_VALUE ? LOW_JUMP_VALUE : TOP_JUMP_VALUE;
        Animated.timing(this.jumpValue, {
            toValue: currentVal,
            duration: 500
        }).start(() => this.hover(currentVal));
    }

    componentDidMount() {
        this.spin();
        this.hover(LOW_JUMP_VALUE);
    }

    render() {
        return (
            <View>
                <AmbientLight intensity={1.0} color={COLORS.WHITE} />
                <PointLight
                    intensity={1}
                    style={{ transform: [{ translate: [0, 1, 5] }] }}
                />
                <AnimatedEntity
                    source={{ gltf2: asset('models/tie-silencer.gltf') }}
                    style={{
                        transform: [
                            { translateY: this.jumpValue },
                            { scale: 0.3 },
                            { rotateY: 45 },
                            { rotateX: this.rotation }
                        ]
                    }}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('TieFighter', () => TieFighter);
