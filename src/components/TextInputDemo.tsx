import React, { MutableRefObject, useEffect, useRef } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default (): JSX.Element => {
    const inputRef: MutableRefObject<any> = useRef<TextInput | null>(null);

    // useEffect(() => {
        
    // }, [])

    return (
        <View style={styles.root}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
                ref={inputRef}
                // autoFocus={true}
                blurOnSubmit={true}
                caretHidden={false} //隐藏光标
                // defaultValue="请输入姓名"
                // editable={false}
                keyboardType="default" //双平台支持 default number-pad decimal-pad numerric email-address phone-pad
                returnKeyType="next" //键盘确认按钮样式 done go next send search
                // maxLength={5}
                // multiline={true} //多行输入
                // numberOfLines={2} //显示几行
                // onFocus={(event) => {
                //     console.log('focus', event.nativeEvent);
                // }}
                // onBlur={(event) => {

                // }}
                // onChange={(event) => {
                    
                // }}
                // onChangeText={text => {

                // }}
                // selection={{ start: 0, end: 3 }} //默认选中
                selectionColor={'#19939e'}
                selectTextOnFocus={true} //点击时选中所有
                secureTextEntry={true} //密码输入，不能和 multiline 同时使用
                style={styles.input} />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeaea',
    },
    input: {
        width: '100%',
        height: 46,
        backgroundColor: '#dddddd',
        color: '#888888',
        fontSize: 14,
        // textAlignVertical: 'top'
    },
    label: {
        color: '#333333'
    }
})