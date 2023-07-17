import React, { useRef } from "react";
import { View, Button, Animated, StyleSheet, Easing, Dimensions, Alert } from "react-native";

export default (): JSX.Element => {
    const translateX = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(1)).current;

    const moveX = Animated.timing(translateX, {
        toValue: 200,
        duration: 500,
        useNativeDriver: false
    });

    const moveY = Animated.timing(translateY, {
        toValue: 200,
        duration: 500,
        useNativeDriver: false
    });

    const scaleAni = Animated.timing(scale, {
        toValue: 1.5,
        duration: 500,
        useNativeDriver: false
    });

    return (
        <View style={styles.root}>
            <Button
                title="Animate"
                onPress={() => {
                    // 并发
                    // Animated.parallel([moveX, moveY, scaleAni]).start();
                    // 序列
                    // Animated.sequence([moveX, moveY, scaleAni]).start();
                    // 有序间隔执行
                    // Animated.stagger(1500, [moveX, moveY, scaleAni]).start();
                    // 延时
                    Animated.sequence([
                        Animated.delay(1000),
                        moveX,
                        Animated.delay(500),
                        moveY,
                        Animated.delay(200),
                        scaleAni
                    ]).start();
                }}
            />
            <Animated.View style={[styles.subView, {
                transform: [
                    {
                        scale: scale
                    },
                    {
                        translateX: translateX
                    },
                    {
                        translateY: translateY
                    }
                ]
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