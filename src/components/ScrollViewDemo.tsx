import React, {useState, useEffect, MutableRefObject, useRef} from "react";
import { ScrollView, View, Text, StyleSheet, TextInput, Button } from "react-native";
import { range } from 'lodash';


export default (): JSX.Element => {
    const [scrollEnable, setScrollEnable] = useState<boolean>(true);

    const scrollRef: MutableRefObject<any> = useRef<ScrollView | null>(null);

    useEffect(() => {
        setTimeout(() => {
            // setScrollEnable(false);
            // scrollRef.current.scrollTo({ x: 500, animated: true });
            scrollRef.current.scrollToEnd({ animated: true });
        }, 3000)
    }, []);

    return (
        <ScrollView
            style={styles.root}
            contentContainerStyle={styles.container}
            keyboardDismissMode="none" //拖拽时键盘动作 none, on-drag, interactive(ios)
            keyboardShouldPersistTaps="handled" //点击时键盘动作 never, always, handled(有其他点击组件时不会收起键盘)
            onMomentumScrollBegin={event => { }} //从手指抬起才开始
            onMomentumScrollEnd={event => { }}
            // onScroll={event => { console.log(event.nativeEvent.contentOffset) }}
            scrollEventThrottle={16} //ios 必须
            overScrollMode="always" //never always
            // pagingEnabled={true} //分页滚动
            // horizontal={true} //横向滚动
            scrollEnabled={scrollEnable}
            contentOffset={{ x: 0, y: 200 }} //初始滚动距离
            showsVerticalScrollIndicator={true} //是否展示纵向滚动条
            showsHorizontalScrollIndicator={false} //是否展示横向滚动条
            stickyHeaderIndices={[1]} //吸顶元素
            ref={scrollRef}
        >
            <TextInput
                // autoFocus={true}
                style={styles.input}
            />
            <Button title="123" />
            {range(0, 50).map((item, index) => {
                return (
                    <Text style={styles.text} key={`item-${index}`}>
                        {`item-${item}`}
                    </Text>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeaea'
    },
    text: {
        width: '100%',
        height: 42,
        textAlignVertical: 'center',
        color: '#333333'
    },
    container: {
        paddingHorizontal: 12,
    },
    input: {
        backgroundColor: '#ddd',
        width: '100%',
        height: 48
    }
})