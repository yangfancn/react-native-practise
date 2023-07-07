import React, { ReactElement } from "react";
import { Text, FlatList, StyleSheet, ListRenderItem } from "react-native";
import { range } from "lodash";

export default (): JSX.Element => {
    const renderItem: ListRenderItem<number> = ({item, index}) => {
        return (
            <Text style={styles.text}>{item}</Text>
        );
    }
    // 高性能列表渲染
    return (
        <FlatList
            style={styles.root}
            data={range(0, 2000)}
            renderItem={renderItem}
            keyExtractor={(_, index) => `index-${index}`}
            contentContainerStyle={styles.container}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            onScroll={event => { console.log(event.nativeEvent.contentOffset.y) }}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="handled"
            // horizontal={true}
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
        fontSize: 14
    },
    container: {
        paddingHorizontal: 12,
        paddingTop: 12,
        backgroundColor: '#f5f5f5',
    }
})