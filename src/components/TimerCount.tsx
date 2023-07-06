import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';

export default (): JSX.Element => {
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(data => {
                return data + 1;
            });
        }, 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <View style={styles.root}>
            <Text style={styles.title}>RN计数器</Text>
            <Text style={styles.count}>{count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#d9d9d9',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    count: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#0f698f'
    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        color: "#333",
        marginBottom: 36
    }
})