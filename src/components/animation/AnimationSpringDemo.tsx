import React, { useRef } from "react";
import { View, Button, Animated, StyleSheet, Dimensions } from "react-native";

// 弹性动画函数
export default (): JSX.Element => {
    const marginLeft = useRef(new Animated.Value(0)).current;
    /**
     * 弹性模型, 只能选一组
     * bounciness, speed
     * tension, friction
     * stiffness, damping, mass
     */
    return (
        <View style={styles.root}>
            <Button
                title="Animate"
                onPress={() => {
                    Animated.spring(marginLeft, {
                        toValue: Dimensions.get('window').width - 100,
                        velocity: 1, //初始速度， 默认 0
                        overshootClamping: false, //过冲， 默认false
                        useNativeDriver: false,
                        delay: 100,
                        //model 1
                        // bounciness: 18, //回弹幅度， 默认值 8
                        // speed: 5, // 默认值 12

                        // model 2
                        // tension: 20, //张力， 控制速度，默认 40
                        // friction: 5, //摩檫力， 越小越弹， 默认值 7

                        // modal 3
                        stiffness: 100, //刚度系数，越大越弹，默认值 100,
                        damping: 5, //阻尼，越小越弹， 默认 10
                        mass: 3, //运动物体的质量（保持惯性），越大越弹， 默认 1
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