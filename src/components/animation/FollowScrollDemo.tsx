import { range } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { View, ScrollView, StyleSheet, Animated } from "react-native";

const colors = ['blue', 'red', 'yellow', 'green', 'orange'];

const rederList = (prefix: string): JSX.Element => {
    return (
        <>
            {range(0, 100).map(value => {
                return (
                    <View
                        style={[styles.colorView, { backgroundColor: colors[value % 5] }]}
                        key={`${prefix}-${value}`}
                    ></View>
                )
            })}
        </>
    )
}

export default (): JSX.Element => {
    // const [offsetY, setOffsetY] = useState<number>(0);

    // const followRef = useRef<ScrollView>(null);

    // useEffect(() => {
    //     //此方法会有延时
    //     followRef.current?.scrollTo({
    //         y: offsetY
    //     })
    // }, [offsetY])

    const scrollY = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.root}>
            <Animated.View
                style={[styles.scrollView, {
                    transform: [
                        {
                            translateY: Animated.multiply(-1, scrollY)
                        }
                    ]
                }]}
            // ref={followRef}
            >
                {rederList('follow')}
            </Animated.View>

            <Animated.ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                // onScroll={event => {
                //     setOffsetY(event.nativeEvent.contentOffset.y);
                // }}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: { y: scrollY } // setValue()
                            }
                        }
                    ],
                    {
                        useNativeDriver: true //关键点，使用原生
                    }
                )}
            >
                {rederList('orignal')}
            </Animated.ScrollView>
        </View >
    );
}


const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeaea',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    scrollView: {
        flexGrow: 0,
        height: '100%',
        paddingHorizontal: 50
    },
    colorView: {
        width: 50,
        height: 80,
        backgroundColor: '#ddd'
    }
})