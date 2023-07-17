import React, { useState } from "react";
import { View, Button, Animated, StyleSheet, Easing, Dimensions, LayoutAnimation, Image, Text } from "react-native";

import IceImage from '../../assets/images/iceberg.jpg';

export default (): JSX.Element => {
    const [showView, setShowView] = useState<boolean>(false);
    const [layoutReverse, setLayoutReverse] = useState<boolean>(false);
    return (
        <View style={styles.root}>
            <Button
                title="Animate"
                onPress={() => {
                    //简写
                    // LayoutAnimation.spring();
                    // LayoutAnimation.linear();
                    LayoutAnimation.easeInEaseOut();
                    // LayoutAnimation.configureNext(
                    //     // LayoutAnimation.Presets.linear,
                    //     LayoutAnimation.Presets.spring,
                    //     // LayoutAnimation.Presets.easeInEaseOut,
                    //     () => {
                    //         //动画结束
                    //     },
                    //     () => {
                    //         //动画异常
                    //     }
                    // );
                    setShowView(showView ? false : true);

                    setLayoutReverse(layoutReverse ? false : true);
                }}
            />
            {showView && <View style={styles.subView}></View>}
            <View
                style={[styles.subView2, {
                    flexDirection: layoutReverse ? 'row-reverse' : 'row'
                }]}
            >
                <Image source={IceImage} style={styles.image} />
                <Text style={styles.text}>This is a ice mountain!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#efefef',
        justifyContent: 'center',
        alignItems: 'center',
    },
    subView: {
        width: 100,
        height: 100,
        backgroundColor: "#00c8ff",
        marginTop: 20,
        borderRadius: 5,
    },
    subView2: {
        width: '100%',
        height: 100,
        backgroundColor: '#ddddddA0',
        marginTop: 20,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width: 120,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 12,
    },
    text: {
        fontSize: 16,
        color: '#333333',
        fontWeight: '600',
        marginHorizontal: 20
    }
})