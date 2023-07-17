import React from "react";
import { View, Button, Vibration } from "react-native";

// 需要申请原生权限 android.permission.VIBRATE
export default (): JSX.Element => {

    return (
        <View>
            <Button
                onPress={() => {
                    // Vibration.vibrate();
                    // 指定单次震动持续时间，仅android有效
                    // Vibration.vibrate(400, true);
                    
                    // android 时间模式, 震动200， 暂停300， 震动100，停500
                    Vibration.vibrate([200, 300, 100, 500], true);

                    // IOS 时间模式, 震动持续时间永远是 400， 数组中都是等待时间
                    // Vibration.vibrate([100, 200, 400], true)；

                    // 如果开启了循环，需要手动取消
                    setTimeout(() => {
                        Vibration.cancel();
                    }, 2000);
                }}
                title="Vibration"
            />
        </View>
    );
}