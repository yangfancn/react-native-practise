import React from "react";
import { View, Text, StyleSheet } from 'react-native';


export default (): JSX.Element => {

    return (
        <View style={styles.root}>
            <Text
                style={styles.text}
                numberOfLines={1} //显示多少行
                ellipsizeMode="tail" //default
                selectable={true} //是否可选
                selectionColor={'#89eb89'} //选中颜色
                onPress={() => {
                    console.log('press');
                    
                }}
                onLongPress={() => {
                    console.log('long press');
                    
                }}
                allowFontScaling={true} //允许系统缩放
            >Hello World!  <Text style={styles.user}>Yang fan</Text></Text>

        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeaea',
        padding: 12,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: '#000000',
        // fontWeight: 'bold',
        fontFamily: 'Merriweather-Bold',
        width: 300,
        height: 50,
        backgroundColor: '#d0d0d0',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 5
    },
    user: {
        // 不指定的属性继承外围的 Text 样式
        fontSize: 18, 
        fontFamily: 'Merriweather-BoldItalic',
        color: '#9f6d08',
        // marginLeft: 16, //嵌套文字 margin,padding 无效
        textDecorationStyle: 'solid', //andorid 只支持 solid
        textDecorationLine: 'underline',
        textShadowColor: '#ed9821',
        textShadowRadius: 3,
        textShadowOffset: {width: 2, height: 3},
    }
})