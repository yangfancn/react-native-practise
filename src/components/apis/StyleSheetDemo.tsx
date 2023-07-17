import React from "react";
import { View, Text, StyleSheet } from "react-native";


const renderText = (): JSX.Element => {
    const textStyles = StyleSheet.create({
        text: {

        }
    })
    return (
        <Text style={textStyles.text}></Text>
    )
}

export default (): JSX.Element => {

    return (
        <View style={styles3}>
            <View style={[styles.test, StyleSheet.absoluteFill]}></View>
            <View style={styles.line}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    test: {
        backgroundColor: "#ffc0cb7c",
        ...StyleSheet.absoluteFillObject
    },
    line: {
        width: '100%',
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'red',
        marginTop: 30
    }
})



const styles2 = {
    width: 100,
    height: 100,
    backgroundColor: 'red'
}

const styles1 = {
    width: 200,
    height: 100,
    backgroundColor: 'green'
}

//合并样式 同 [styles2, styles1], 但compose性能更高
const styles3 = StyleSheet.compose(styles2, styles1);

//合并成一个对象
const styles4 = StyleSheet.flatten([styles1, styles2]);

//绝对填充，即绝对定位上下作用全是 0
const styles5 = StyleSheet.absoluteFill;

//“发丝宽度”
// console.log(StyleSheet.hairlineWidth)