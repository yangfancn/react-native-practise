import React, {useEffect} from "react";
import { View, BackHandler, Button } from "react-native";
import { useBackHandler } from "@react-native-community/hooks";

export default (): JSX.Element => {
    //只针对安卓
    // const backRorAndroid = (): boolean => {
    //     //... 业务逻辑
    //     // true 屏蔽返回键
    //     return true;
    // };
    
    // useEffect(() => {
    //     BackHandler.addEventListener('hardwareBackPress', backRorAndroid)
    //     return () => {
    //         BackHandler.removeEventListener('hardwareBackPress', () => null);
    //     };
    // }, []);

    // 社区 hooks 写法
    useBackHandler(() => {
        // 逻辑
        // ...
        return true;
    });
    return (
        <View>
            <Button
                title="Exit App"
                onPress={() => {
                    BackHandler.exitApp();
                }}
            />
        </View>
    );
}