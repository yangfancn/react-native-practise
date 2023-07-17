import React, { useRef } from "react";
import { View, Button, Animated, StyleSheet, Easing } from "react-native";

export default (): JSX.Element => {
    const marginLeft = useRef(new Animated.Value(0)).current;

    const rotate = useRef(new Animated.Value(0)).current;
    const rotateValue = rotate.interpolate({
        inputRange: [0, 1000],
        outputRange: ['0deg', '1000deg']
    });

    const scale = useRef(new Animated.Value(1)).current;

    const opacity = useRef(new Animated.Value(1)).current;

    return (
        <View style={styles.root}>
            <Button
                title="Animate"
                onPress={() => {
                    // 平移
                    Animated.timing(marginLeft, {
                        toValue: 200,
                        duration: 300,
                        useNativeDriver: false, //是否使用原生驱动，一般false
                        easing: Easing.inOut(Easing.ease)
                    }).start();

                    // 旋转
                    Animated.timing(rotate, {
                        toValue: 1000,
                        duration: 2000,
                        useNativeDriver: false
                    }).start();

                    // 缩放
                    Animated.timing(scale, {
                        toValue: 2,
                        duration: 1000,
                        useNativeDriver: false
                    }).start();

                    //透明度
                    Animated.timing(opacity, {
                        toValue: .3,
                        duration: 500,
                        useNativeDriver: false
                    }).start();
                }}
            />
            <Animated.View style={[styles.subView, {
                marginLeft: marginLeft,
                transform: [
                    {
                        scale
                    },
                    {
                        rotate: rotateValue
                    }
                ],
                opacity
            }]}></Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#efefef',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subView: {
        width: 100,
        height: 100,
        backgroundColor: "#00c8ff",
        marginTop: 100
    }
})