import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

export default (): JSX.Element => {
    // 可点击的 View
    return <View style={styles.root}>
        <TouchableOpacity
            style={styles.touch}
            activeOpacity={.7} //点击时不透明度，默认 .5
            // onPress={event => {

            // }}
            // onLongPress={event => {
            //     console.log('long press');
            // }}
            // delayLongPress={1500} //触发长按的时间
            onPressIn={event => { }} //按下
            onPressOut={event => { }} //松开 pressIn -> pressOut -> press; pressIn -> longPress -> pressout
        >
            <Text style={styles.text}>点击</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeaea'
    },
    touch: {
        width: 100,
        height: 40,
        backgroundColor: "yellow",
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
    }
});