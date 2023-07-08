import React, { useState } from "react";
import { View, Text, Modal, StyleSheet, Button, TouchableOpacity, Image } from "react-native";
import SectionListDemo from "./SectionListDemo";
import CloseImage from '../assets/images/icon_close_modal.png';
import { filter } from "lodash";

export default (): JSX.Element => {
    const [visible, setVisibile] = useState<boolean>(false);
    const headerIcon = (
        <TouchableOpacity
            style={styles.closeIcon}
            onPress={() => setVisibile(false)}
        >
            <Image
                source={CloseImage}
                style={styles.close}
            />
        </TouchableOpacity>
    );
    return (
        <View style={styles.root}>
            <Modal
                visible={visible}
                onRequestClose={() => setVisibile(false)} //android
                transparent={true} //空白处透明
                statusBarTranslucent={true} //覆盖导航栏
                animationType="slide"
                onShow={(event) => { console.log('show') }}
                onDismiss={() => {console.log('dismiss')}} //现版本存在Bug,
            >
                <View style={styles.blank}></View>
                <View>
                    <SectionListDemo headerIcon={headerIcon} />
                </View>
            </Modal>
            <View style={styles.buttonBox}>
                <Button
                    title="Open Modal"
                    onPress={() => {
                        setVisibile(true);
                    }}
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
    modalConten: {
        // width: '100%',
        // height: '100%',
        backgroundColor: '#f7d6d6'
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
    blank: {
        width: '100%',
        height: '10%',
        backgroundColor: '#6c696955',
    },
    buttonBox: {
        width: 160,
        marginTop: 20
    }
})