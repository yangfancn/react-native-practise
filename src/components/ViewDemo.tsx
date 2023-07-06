import React, { useEffect, useRef, MutableRefObject } from "react";
import { View, StyleSheet, LayoutChangeEvent } from "react-native";

export default (): JSX.Element => {
    const viewRef: MutableRefObject<any> = useRef<View | null>(null);

    useEffect(() => {
        setTimeout(() => {
            viewRef.current?.setNativeProps({
                style: { backgroundColor: 'blue', width: 300 }
            })
        }, 2000)
    }, [])
    return (
        <View style={styles.root}>
            <View
                ref={viewRef}
                style={styles.subView}
                onLayout={(event: LayoutChangeEvent) => {
                    console.log(event.nativeEvent);
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#eaeaea',
        width: '100%',
    },
    subView: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        marginLeft: 30,
        marginTop: 50
    }
});