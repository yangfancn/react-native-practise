import React, { useRef } from "react";
import {
    View,
    Button,
    Animated,
    StyleSheet,
    Easing,
    Dimensions,
} from "react-native";

// 平移动画支持的属性， margin, translate, 绝对定位的 top,left,bottom,right
export default (): JSX.Element => {
    const marginLeft = useRef(new Animated.Value(0)).current;
    const traslateY = useRef(new Animated.Value(0)).current;
    const window = Dimensions.get('window');

    return (
        <View style={styles.root}>
            <Button
                title="Animate"
                onPress={() => {
                    Animated.timing(marginLeft, {
                        toValue: window.width - 100,
                        duration: 800,
                        useNativeDriver: false, //是否使用原生驱动，一般false
                        easing: Easing.inOut(Easing.ease)
                    }).start();

                    Animated.timing(traslateY, {
                        toValue: window.height - 159,
                        duration: 800,
                        useNativeDriver: false
                    }).start();
                }}
            />
            <Animated.View style={[styles.subView, {
                marginLeft: marginLeft,
                transform: [
                    {
                        translateY: traslateY
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
        // marginTop: 20
    }
})