import React, { useRef, useState } from "react";
import { View, Text, Modal, StyleSheet, Button, TouchableOpacity, Image, Animated, Dimensions } from "react-native";
import SectionListDemo from "./SectionListDemo";
import CloseImage from '../assets/images/icon_close_modal.png';
import { filter } from "lodash";

const { height: WINDOW_HEIGHT } = Dimensions.get('window');

export default (): JSX.Element => {
    const [visible, setVisibile] = useState<boolean>(false);
    
    const marginTop = useRef(new Animated.Value(WINDOW_HEIGHT)).current;

    const headerIcon = (
        <TouchableOpacity
            style={styles.closeIcon}
            onPress={() => close()}
        >
            <Image
                source={CloseImage}
                style={styles.close}
            />
        </TouchableOpacity>
    );

    const open = () => {
        setVisibile(true);
        Animated.timing(marginTop, {
            toValue: 0,
            duration: 600,
            useNativeDriver: false,
        }).start();
    };

    const close = () => {
        Animated.timing(marginTop, {
            toValue: WINDOW_HEIGHT,
            duration: 600,
            useNativeDriver: false,
        }).start(() => {
            setVisibile(false);
        });
    };

    return (
        <View style={styles.root}>
            <Modal
                visible={visible}
                onRequestClose={() => close()} //android
                transparent={true} //空白处透明
                statusBarTranslucent={true} //覆盖导航栏
                animationType="fade"
                // onShow={(event) => { console.log('show') }}
                // onDismiss={() => {console.log('dismiss')}} //现版本存在Bug,
            >
                <View style={styles.modalContainer}>
                    <Animated.View style={[styles.sectionList, {
                        marginTop
                    }]}>
                        <SectionListDemo headerIcon={headerIcon} />
                    </Animated.View>
                </View>
            </Modal>
            <View style={styles.buttonBox}>
                <Button
                    title="Open Modal"
                    onPress={() => open()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeaea',
        alignItems: 'center',
    },
    modalContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#00000053'
    },
    closeIcon: {
        position: 'absolute',
        right: 12,
        top: 18
    },
    close: {
        width: 20,
        height: 20,
    },
    sectionList: {
        paddingTop: '20%'
    },
    buttonBox: {
        width: 160,
        marginTop: 20
    }
})