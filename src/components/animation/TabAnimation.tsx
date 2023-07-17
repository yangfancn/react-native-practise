import React, { useEffect, useRef, useState } from "react";
import { View, Image, Text, Animated, StyleSheet, ImageSourcePropType, Pressable, Easing } from "react-native";

import IconHome from '../../assets/images/icon_home.png';
import IconGift from '../../assets/images/icon_gift.png';
import IconMine from '../../assets/images/icon_mine.png';
import IconShow from '../../assets/images/icon_show.png';

interface Tab {
    icon: ImageSourcePropType,
    text: string,
    active: boolean,
    width: Animated.Value,
    opacity: Animated.Value
}

export default (): JSX.Element => {
    const defaultStyles = {
        width: 46,
        opacity: .6
    };

    const [tabs, setTabs] = useState<Tab[]>([
        {
            icon: IconHome,
            text: '首页推荐',
            active: false,
            width: useRef(new Animated.Value(defaultStyles.width)).current,
            opacity: useRef(new Animated.Value(defaultStyles.opacity)).current
        },
        {
            icon: IconShow,
            text: '热门直播',
            active: false,
            width: useRef(new Animated.Value(defaultStyles.width)).current,
            opacity: useRef(new Animated.Value(defaultStyles.opacity)).current
        },
        {
            icon: IconGift,
            text: '我的礼物',
            active: false,
            width: useRef(new Animated.Value(defaultStyles.width)).current,
            opacity: useRef(new Animated.Value(defaultStyles.opacity)).current
        },
        {
            icon: IconMine,
            text: '个人中心',
            active: false,
            width: useRef(new Animated.Value(defaultStyles.width)).current,
            opacity: useRef(new Animated.Value(defaultStyles.opacity)).current
        },
    ]);

    useEffect(() => {
        tabs.map(item => {
            Animated.timing(item.width, {
                toValue: item.active ? 142 : defaultStyles.width,
                duration: item.active ? 400 : 200,
                useNativeDriver: false,
                easing: item.active ? Easing.elastic(3) : Easing.ease
            }).start();
            Animated.timing(item.opacity, {
                toValue: item.active ? 1 : defaultStyles.opacity,
                duration: item.active ? 400 : 200,
                useNativeDriver: false
            }).start();
        })
    }, tabs);

    return (
        <View style={styles.root}>
            <View style={styles.tabs}>
                {tabs.map((item, index) => (
                    <Animated.View
                        key={`tab-${index}`}
                        style={[styles.tab, {
                            width: item.width,
                            opacity: item.opacity
                        }]}
                    >
                        <Pressable
                            style={styles.pressable}
                            onPress={() => {
                                // console.log('on press')
                                const newTabs = tabs.map((_item, _index) => {
                                    return _index === index
                                        ? { ..._item, ...{ active: true } }
                                        : { ..._item, ...{ active: false } };
                                });
                                setTabs(newTabs);
                            }}
                            disabled={false}
                        >
                            <Image
                                source={item.icon}
                                style={styles.tabIcon}
                            />
                            <Text style={styles.tabText}>{item.text}</Text>
                            <View style={styles.tabStatus}></View>
                        </Pressable>
                    </Animated.View>
                ))}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeaea',
        position: 'relative',
    },
    tabs: {
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: [
            {
                translateY: -120
            }
        ]
    },
    tab: {
        backgroundColor: '#00c8ff',
        // width: 46,
        opacity: .8,
        borderTopEndRadius: 24,
        borderBottomEndRadius: 24,
        marginVertical: 10,
        overflow: 'hidden'
    },
    pressable: {
        width: 142,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    tabIcon: {
        width: 24,
        height: 24,
        resizeMode: 'cover',
        tintColor: '#ffffff',
    },
    tabText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#ffffff',
        marginHorizontal: 14
    },
    tabStatus: {
        width: 8,
        height: 8,
        backgroundColor: '#86f486',
        borderRadius: 4,
        marginRight: 10
    }

})