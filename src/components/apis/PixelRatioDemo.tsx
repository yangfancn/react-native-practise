import React from "react";
import { View, PixelRatio, StyleSheet } from "react-native";

export default (): JSX.Element => {
    // 获取屏幕像素密度
    // console.log(PixelRatio.get());
    // 获取字体缩放比例
    // console.log(PixelRatio.getFontScale());
    // 获取真实像素大小 = size * PixelRatio.get()
    // console.log(PixelRatio.getPixelSizeForLayoutSize(200));
    // 对于小数，自动四舍五入
    console.log(PixelRatio.roundToNearestPixel(20));

    return (
        <View style={styles.root}>
            <View style={styles.subView}></View>
            <View style={styles.subView}></View>
            <View style={styles.subView}></View>
            <View style={styles.subView}></View>
            <View style={styles.subView}></View>
            <View style={styles.subView}></View>
            <View style={styles.subView}></View>
            <View style={styles.subView}></View>
            <View style={styles.subView}></View>
            <View style={styles.subView}></View>
            <View style={styles.subView}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        backgroundColor: 'red'
    },
    subView: {
        width: '100%',
        backgroundColor: 'green',
        height: PixelRatio.roundToNearestPixel(32.1)
    }
});