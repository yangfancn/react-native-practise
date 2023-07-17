import React from "react";
import { View, Text, StyleSheet, Button, Alert, AlertButton } from "react-native";

export default (): JSX.Element => {

    return (
        <View>
            <Button
                title={'Button'}
                onPress={() => {
                    // Alert.alert('title', 'Hello World', [
                    //     {
                    //         text: "取消", 
                    //         onPress: () => {

                    //         }
                    //     }, {
                    //         text: "确定",
                    //         onPress: () => {

                    //         }
                    //     }
                    // ]);
                    // alert(123);

                    //log 分级
                    // console.log('normal log');
                    // console.info('info');
                    // console.warn('warning'); //会在开发阶段的应用中显示
                    // console.error('error'); //会在开发阶段的应用中显示
                    // console.debug('debug');

                    // log 占位符 %s: 字符串; %d: 数字; %o: Object
                    // console.log("Name: %s; Age: %d; Data: %o", 'yangfan', 27, {a: 1, b: 2})

                    // log 样式, 开发控制台无效果
                    // console.log('%cis a red large log', 'color:red;fontSize: x-large');

                    // table 开发控制台无效果
                    // const users = [
                    //     {name: "zhangsan", 'age': 12},
                    //     {name: "lisi", 'age': 15},
                    //     {name: "wangwu", 'age': 16}
                    // ];
                    // console.table(users);

                    //分组日志
                    console.group();
                    console.log('item 1');
                    console.log('item 2');
                    console.log('item 3');
                    console.log('item 4');
                    //嵌套分组
                    console.group();
                    console.log('item 4-1');
                    console.log('item 4-2');
                    console.groupEnd();
                    console.groupEnd();
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});