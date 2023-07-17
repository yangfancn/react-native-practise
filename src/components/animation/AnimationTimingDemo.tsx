import React, { useRef } from "react";
import { View, Button, Animated, StyleSheet, Easing, Dimensions } from "react-native";

export default (): JSX.Element => {
    const marginLeft = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.root}>
            <Button
                title="Animate"
                onPress={() => {
                    Animated.timing(marginLeft, {
                        toValue: Dimensions.get('window').width - 100,
                        duration: 300,
                        useNativeDriver: false, //是否使用原生驱动，一般false

                        // easing: Easing.back(3), // 先会拉再运动
                        // easing: Easing.ease, // 平滑运动
                        // easing: Easing.bounce, // 弹跳动画, 不会超过最终位置
                        // easing: Easing.elastic(4), // 弹性动画， 会超过最终位置

                        // 标准函数
                        // easing: Easing.linear, // 1次方
                        // easing: Easing.quad, // 2次方
                        // easing: Easing.cubic, // 3次方

                        // 补充函数, 速率
                        // 贝塞尔函数 https://cubic-bezier.com/
                        // easing: Easing.bezier(.7, .2, .42, .82),
                        // 环形变化率
                        // easing: Easing.circle,
                        // 正弦
                        // easing: Easing.sin
                        // 指数
                        // easing: Easing.exp,

                        // 自由组合动画函数 https://easings.net
                        // easing: Easing.in(Easing.bounce),
                        // easing: Easing.out(Easing.exp),
                        easing: Easing.inOut(Easing.elastic(3))
                    }).start();
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