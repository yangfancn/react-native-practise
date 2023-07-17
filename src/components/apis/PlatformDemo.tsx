import React from "react";
import { View, Platform, StyleSheet } from "react-native";

export default (): JSX.Element => {

    // console.log(Platform.OS); //当前平台 android, ios, web
    // console.log(Platform.Version); // android sdk版本，ios 版本
    // console.log(Platform.constants); // 系统信息
    // console.log(Platform.isPad); //ios ipad
    // console.log(Platform.isTV);
    const styles = StyleSheet.create({
        root: {
            width: '100%',
            height: '100%',
            ...Platform.select({
                android: {
                    marginTop: 20
                },
                ios: {
                    marginTop: 0
                },
                default: {
                    marginTop: 10
                }
            })
        }
    })
    console.log(styles)
    return (
        <View>
        </View>
    );
}