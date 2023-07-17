import React from "react";
import { View, PermissionsAndroid, Button } from "react-native";

// 针对 android，一些特殊权限需要在使用时请求权限
export default (): JSX.Element => {
    // 所有的 permission
    // console.log(PermissionsAndroid.PERMISSIONS);
    // 请求多个权限
    // PermissionsAndroid.requestMultiple([]);
    return (
        <View>
            <Button
                title="Request Media Permission"
                onPress={() => {
                    // 检查权限, 需要加入到 AppManifest.xml
                    const writePermission = 'android.permission.ACCESS_MEDIA_LOCATION';
                    PermissionsAndroid.check(writePermission).then(result => {
                        console.log(result);
                        if (!result) {
                            // 请求权限
                            PermissionsAndroid.request(writePermission, {
                                title: "需要访问您的本地媒体",
                                message: "我们需要访问您的本地媒体文件！",
                                buttonPositive: "同意"
                            }).then(stauts => {
                                if (stauts === 'granted') {
                                    //同意
                                } else {

                                }
                                console.log(stauts);
                            })
                        }
                    })
                }}
            />
        </View>
    );
}