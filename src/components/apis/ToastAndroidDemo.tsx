import React from "react";
import { View, ToastAndroid, Button } from "react-native";

export default (): JSX.Element => {

    return (
        <View>
            <Button
                title="Toast"
                onPress={() => {
                    ToastAndroid.show('this is a message', ToastAndroid.SHORT);
                    // ToastAndroid.show('this is a message', ToastAndroid.LONG);
                    // ToastAndroid.show('this is a message', 3000);

                    // 指定位置, android30 以后无法使用
                    // ToastAndroid.showWithGravity("This is a message", 3000, ToastAndroid.CENTER);
                    // ToastAndroid.showWithGravityAndOffset("This is a message", 3000, ToastAndroid.CENTER, 100, 100);
                }}
            />
        </View>
    );
}