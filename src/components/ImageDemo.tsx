import React, { MutableRefObject, useEffect, useRef } from "react";
import { View, Image, StyleSheet } from "react-native";

import fegImage from '../assets/images/feg.png';
import wordImage from '../assets/images/world.png';

const imgUri = 'https://cdn.pixabay.com/photo/2023/05/15/09/18/iceberg-7994536_1280.jpg';

export default (): JSX.Element => {
    const imgRef: MutableRefObject<any> = useRef<Image>(null);
    useEffect(() => {
        Image.getSize(imgUri, (width, height) => {
            console.log(width, height);
        }, error => {
            console.log(error);
        })
        //图片预加载，提前下载到磁盘，下次直接使用
        Image.prefetch(imgUri).then((status: boolean) => {
            console.log(status);
        }).catch(error => {
            console.log(error)
        })
    }, [])
    return (
        <View style={styles.root}>
            <Image style={styles.avatar} source={fegImage} />
            <View style={styles.imgBox}>
                <Image
                    ref={imgRef}
                    style={styles.img}
                    source={{
                        uri: imgUri
                    }}
                    // onLoad={(image) => {
                    //     console.log('load', image.nativeEvent);
                    // }}
                    // onError={(error) => {
                    //     console.log('load error', error.nativeEvent);
                    // }}
                    // onLoadStart={() => {
                    //     console.log('load start');
                    // }}
                    // onLoadEnd={() => {
                    //     console.log('load end');
                    // }}
                    defaultSource={fegImage} //占位图片，debug环境下无法使用
                    // blurRadius={2} //模糊效果
                    fadeDuration={200} //显示过渡效果
                />
            </View>
            <Image style={styles.icon} source={wordImage} />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeaea',
        alignItems: 'center',
        padding: 12
    },
    avatar: {
        width: 80,
        height: 80,
        objectFit: 'contain',
    },
    imgBox: {
        borderRadius: 5,
        overflow: 'hidden',
        marginVertical: 20,
    },
    img: {
        width: 300,
        height: 200,
        // borderRadius: 5,
        backgroundColor: '#e3a145',
        resizeMode: 'contain',
    },
    icon: {
        width: 40,
        height: 40,
        tintColor: '#dbac10', //png 着色，对不透明通道进行着色
    }
})