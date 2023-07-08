import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

export default (): JSX.Element => {
    const [switchValue, setSwitchValue] = useState<boolean>(true)

    return (
        <View style={styles.root}>
            <Switch
                value={switchValue}
                onValueChange={value => {
                    setSwitchValue(value);
                }}
                // disabled={true}
                trackColor={{ true: '#05b3c0', false: '#888888' }} //背景颜色
                thumbColor={switchValue ? '#05b3c0' : '#888888'} //按钮颜色
                style={styles.switch}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeaea',
        justifyContent: 'center',
        alignItems: 'center'
    },
    switch: {
        transform: [
            { scaleX: 1.5 },
            { scaleY: 1.5 }
        ]
    }
})