import React from "react";
import { View, Pressable, StyleSheet, Text } from "react-native";

export default (): JSX.Element => {
    // 点击事件和TouchableOpcity一样
    // 带状态的样式，带状态的子节点
    return <View style={styles.root}>
        <Pressable
            style={state => [styles.button, state.pressed && styles.buttonPressed]}
        >
            {state => (
                <Text
                    style={state.pressed ? [styles.text, styles.textPressed] : styles.text}
                >Button</Text>
            )
            }
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeaea',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 100,
        height: 48,
        backgroundColor: '#d0880b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonPressed: {
        backgroundColor: '#eb4646',
    },
    text: {
        color: 'white',
        fontSize: 14
    },
    textPressed: {
        color: '#333333'
    }
})