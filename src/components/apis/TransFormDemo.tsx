import React from "react";
import { View, StyleSheet } from "react-native";

export default (): JSX.Element => {

    return (
        <View style={styles.root}>
            <View style={styles.subView}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeaea'
    },
    subView: {
        width: 100,
        height: 100,
        backgroundColor: '#e19e9e',
        // 需要注意顺序问题
        transform: [
            {
                translateX: 100,
            },
            {
                translateY: 150,
            },
            {
                scale: 1.2
            },
            {
                scaleX: 1.5
            },
            {
                scaleY: 2
            },
            // {
            //     rotateX: '45deg'
            // },
            // {
            //     rotateY: '45deg'
            // },
            // {
            //     rotateZ: '45deg'
            // },
            {
                // rotate === rotateZ
                rotate: '20deg'
            }
        ]
    }
});