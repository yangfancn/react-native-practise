import React, {useRef, useEffect} from "react";
import {
    ListRenderItem,
    SectionList,
    SectionListData,
    SectionListRenderItem,
    StyleSheet,
    Text,
    View
} from "react-native";
import { range } from "lodash";

interface Props {
    headerIcon?: JSX.Element
}

export default (props: Props): JSX.Element => {

    const sections: SectionListData<any>[] = [
        {
            type: 'A',
            data: range(0, 50)
        },
        {
            type: 'B',
            data: range(0, 50)
        },
        {
            type: 'C',
            data: range(0, 50)
        }
    ]

    const rederItem: SectionListRenderItem<any> = ({ item, index, section }) => {
        return (<Text style={styles.text}>{`${item}-${section.type}`}</Text>)
    }

    const Header = (
        <View style={styles.header}>
            {props.headerIcon}
            <Text style={styles.headerText}>
                Header
            </Text>
        </View>
    );
    const Footer = (<Text style={styles.footer}>Footer</Text>);
    const sectionHeader = (info: any) => {
        return <Text style={styles.sectionHeader}>{info.section.type}</Text>
    };
    const Separator = () => (<View style={styles.separator}></View>);

    const sectionListRef = useRef<SectionList | null>(null);

    useEffect(() => {
        setTimeout(() => {
            // sectionListRef.current?.scrollToLocation({
            //     sectionIndex: 1,
            //     itemIndex: 3, // 包括sectionHeader
            //     viewPosition: 0, //0-1
            //     animated: true
            // })
        }, 2000)
    }, []);

    return (
        <SectionList
            ref={sectionListRef}
            style={styles.root}
            sections={sections}
            renderItem={rederItem}
            keyExtractor={(item, index) => `${item}-${index}`}
            contentContainerStyle={styles.container}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            // onScroll={event => { console.log(event.nativeEvent.contentOffset.y) }}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="handled"
            ListHeaderComponent={Header}
            ListFooterComponent={Footer}
            renderSectionHeader={sectionHeader}
            ItemSeparatorComponent={Separator}
            stickySectionHeadersEnabled={true}
        />
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeaea'
    },
    container: {
        // paddingHorizontal: 12,
        // paddingTop: 12,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#ddd',
        height: 56,
        width: '100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {

    },
    footer: {
        backgroundColor: '#a5a5a5',
        color: '#333333',
        textAlign: 'center'
    },
    sectionHeader: {
        backgroundColor: '#c0b029',
        paddingLeft: 10,
        fontWeight: "600",
        height: 42,
        textAlignVertical: 'center'
    },
    text: {
        height: 36,
        textAlignVertical: 'center',
        paddingHorizontal: 12,
        fontSize: 12
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    }
});