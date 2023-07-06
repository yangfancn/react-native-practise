import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
    name: string,
    age: number,
    sex: string,
    children: JSX.Element
};

export default (props: Props): JSX.Element => {
    const { name, age, sex } = props;

    return (
        <View style={styles.root}>
            <Text style={[styles.text, styles.textBold, styles.textBlue]}>
                {`姓名：${name}`}
            </Text>
            <Text style={styles.text}>
                {`年龄：${age}`}
            </Text>
            <Text style={styles.text}>
                {`性别：${sex}`}
            </Text>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        flexDirection: "column"
    },
    text: {
        fontSize: 20,
        color: '#1c1a1a',
        marginVertical: 12
    },
    textBold: {
        fontWeight: 'bold'
    },
    textBlue: {
        color: '#1796df'
    }
})