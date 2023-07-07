import React from "react";
import { View, TouchableWithoutFeedback, StyleSheet, Text } from "react-native";

export default (): JSX.Element => {
    // 没有点击效果，只支持一个子节点， 不支持样式（）
    return <View style={styles.root}>
        <TouchableWithoutFeedback
            onPress={event => {}}    
        >
            <View style={styles.touchView}>
                <Text style={styles.text}>Button</Text>
            </View>
        </TouchableWithoutFeedback>
    </View>
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeaea'
    },
    touchView: {
        width: 100,
        height: 40,
        backgroundColor: "#c8b80d",
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000'
    }
});