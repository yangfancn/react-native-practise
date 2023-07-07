import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export default (): JSX.Element => {
    // 无法指定样式
    return <View style={styles.root}>
        <Button
            title="Button"
            color={'#24ae24'}
            onPress={event => { }}
            disabled={true}
        />
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
})