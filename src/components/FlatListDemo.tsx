import React, { useRef, useEffect } from "react";
import { Text, FlatList, StyleSheet, ListRenderItem, View } from "react-native";
import { range } from "lodash";

export default (): JSX.Element => {
    const renderItem: ListRenderItem<number> = ({item, index}) => {
        return (
            <Text style={styles.text}>{item}</Text>
        );
    }

    const Header = (<Text>Header</Text>);
    const Footer = (<Text>Footer</Text>);
    const Empty = (<Text style={styles.empty}>暂无数据~</Text>)
    const Separator = () => (<View style={styles.separator} />);

    const flatListRef = useRef<FlatList | null>(null);
    useEffect(() => {
        setTimeout(() => {
            // 匹配Index
            // flatListRef.current?.scrollToIndex({
            //     index: 20,
            //     viewPosition: 0, //滚动后 index 元素所在屏幕位置 0~1，0最顶部
            //     animated: true
            // })

            // 匹配Item, 性能差
            // flatListRef.current?.scrollToItem({
            //     item: 45,
            //     viewPosition: 0, //滚动后 index 元素所在屏幕位置 0~1，0最顶部
            //     animated: true
            // })

            // 按距离滚动
            // flatListRef.current?.scrollToOffset({
            //     offset: 100
            // })

            flatListRef.current?.scrollToEnd();
        }, 2000)
    }, [])
    // 高性能列表渲染
    return (
        <FlatList
            ref={flatListRef}
            style={styles.root}
            data={range(0, 150)}
            renderItem={renderItem}
            keyExtractor={(_, index) => `index-${index}`}
            contentContainerStyle={styles.container}
            // showsHorizontalScrollIndicator={false}
            // showsVerticalScrollIndicator={false}
            // // onScroll={event => { console.log(event.nativeEvent.contentOffset.y) }}
            // keyboardDismissMode="on-drag"
            // keyboardShouldPersistTaps="handled"
            // pagingEnabled={true}
            // // horizontal={true}
            ListHeaderComponent={Header}
            ListHeaderComponentStyle={styles.header}
            ListFooterComponent={Footer}
            ListFooterComponentStyle={styles.footer}
            // ListEmptyComponent={Empty}
            ItemSeparatorComponent={Separator}
            // initialNumToRender={20} //初始渲染数量，一般不定义
            // inverted={true} //反向渲染
            // numColumns={2} // 每行多个
            // onViewableItemsChanged={({ viewableItems }) => {}} //获取当前可见的元素
            stickyHeaderIndices={[1]}
        />
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
        marginVertical: 10,
        fontSize: 14,
        // width: '50%'
    },
    container: {
        paddingHorizontal: 12,
        paddingTop: 12,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#ddd',
        paddingVertical: 10
    },
    footer: {
        backgroundColor: '#a5a5a5',
        color: '#333333'
    },
    empty: {
        textAlign: 'center',
        fontSize: 16,
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#919191'
    }
})