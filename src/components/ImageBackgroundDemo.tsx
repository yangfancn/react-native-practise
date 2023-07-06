import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";

import bgImage from "../assets/images/bg_card.png";
import bankIconImage from "../assets/images/icon_bank.png";

export default (): JSX.Element => {

    return (
        <View style={styles.root}>
            <ImageBackground style={styles.back} imageStyle={styles.backImg} source={bgImage}>
                <View style={styles.cont}>
                    <View style={styles.bankName}>
                        <Image style={styles.bankIcon} source={bankIconImage} />
                        <View style={styles.texts}>
                            <Text style={styles.title}>招商银行</Text>
                            <Text style={styles.subTitle}>储蓄卡</Text>
                        </View>
                    </View>
                    <Text style={styles.code}>••••  ••••  ••••  1995</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeaea',
        padding: 10,
    },
    back: {
        width: '100%',
        height: 148,
    },
    backImg: {
        resizeMode: 'cover',
        borderRadius: 12
    },
    cont: {
        width: '100%',
        height: '100%',
        padding: 20,
    },
    bankName: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bankIcon: {
        width: 48,
        height: 48,
    },
    texts: {
        paddingLeft: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        color: '#ffffff'
    },
    subTitle: {
        fontSize: 16,
        color: '#ffffffA0'
    },
    code: {
        fontSize: 28,
        fontWeight: '600',
        color: '#ffffff',
        paddingLeft: 64,
        marginTop: 20,
    }
});