import React, {useRef} from "react";
import { View, Button, Animated, StyleSheet, Easing, Dimensions } from "react-native";

export default (): JSX.Element => {
    const marginLeft = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.root}>
            <Button
                title="Animate"
                onPress={() => {
                    Animated.timing(marginLeft, {
                        toValue: Dimensions.get('window').width - 100,
                        duration: 300,
                        useNativeDriver: false, //是否使用原生驱动，一般false
                        easing: Easing.inOut(Easing.ease)
                    }).start();
                }}
            />
            <Animated.View style={[styles.subView, {
                marginLeft: marginLeft
            }]}></Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#efefef'
    },
    subView: {
        width: 100,
        height: 100,
        backgroundColor: "#00c8ff",
        marginTop: 20
    }
})