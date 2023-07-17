import React from "react";
import { View, Button, Linking } from "react-native";

export default (): JSX.Element => {
    
    return (
        <View>
            <Button
                title={'button'}
                onPress={() => {
                    //系统默认浏览器打开
                    let url = 'https://www.baidu.com';
                    // 安卓此功能需要 queries 权限
                    /**
                     * <queries>
                     *   <intent>
                     *      <action android:name="android.intent.action.VIEW" />
                     *       <data android:scheme="http"/>
                     *  </intent>
                     *  ...
                     * </queries>
                     */


                    // Linking.canOpenURL(url).then(status => {
                    //     console.log(status);
                        
                    //     if (status) {
                    //         Linking.openURL(url);
                    //     }
                    // });
                    
                    // 打开地图
                    // Linking.openURL('geo:37.2122, 12.222');

                    // 拨打电话
                    // Linking.openURL('tel:10086');

                    // 发送短信
                    // Linking.openURL('smsto:10086');

                    // 发送邮件
                    // Linking.openURL('mailto:244190857@qq.com');

                    // 第三方 schema
                    
                    // 跳转应用设置
                    // Linking.openSettings();

                    // android 隐式跳转
                    // Linking.sendIntent('', [])

                    // 获取应用是通过哪个 url 打开的
                    // console.log(Linking.getInitialURL())；
                }}
            />
        </View>
    )
}