import React from "react";
import { View, TouchableHighlight, StyleSheet, Text } from "react-native";

export default (): JSX.Element => {
    // 有且只能有一个子节点, 必须复写 onPress 事件, 其他事件与TouchableOpacity 相同
    return <View style={styles.root}>
        <TouchableHighlight
            style={styles.touch}
            onPress={event => { }}
            underlayColor={'#eae17d'} //高亮颜色
            activeOpacity={.8}
        >
            <Text style={styles.text}>Button</Text>
        </TouchableHighlight>
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
        backgroundColor: "#c8b80d",
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
    }
});