import React, { useRef } from "react";
import { View, Button, Animated, StyleSheet, Easing } from "react-native";

//衰减动画函数，不好确定终点
export default (): JSX.Element => {
    const marginLeft = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.root}>
            <Button
                title="Animate"
                onPress={() => {
                    Animated.decay(marginLeft, {
                        velocity: 1,
                        deceleration: 0.990, //值越小，衰减越快
                        useNativeDriver: false,
                    }).start()
                }}
            />
            <Animated.View style={[styles.subView, {
                marginLeft: marginLeft
            }]}></Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#efefef'
    },
    subView: {
        width: 100,
        height: 100,
        backgroundColor: "#00c8ff",
        marginTop: 20
    }
})