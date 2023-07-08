import React, {useState, useEffect} from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    Pressable,
    Modal,
    StyleSheet,
    SectionList,
    SectionListRenderItem
} from "react-native";
//images
import avatarImage from '../assets/images/avatar.png';
import noCollectionImage from '../assets/images/icon_1.png';
import noNotesImage from '../assets/images/icon_2.png';
import noAgreeImage from '../assets/images/icon_3.png';
import iconAddImage from '../assets/images/icon_add.png';
import iconMenuImage from '../assets/images/icon_menu.png';
import iconShareImage from '../assets/images/icon_share.png';
import iconSexFemaleImage from '../assets/images/icon_female.png';
import iconSexMaleImage from '../assets/images/icon_male.png';
import iconSettingImage from '../assets/images/icon_setting.png';
import iconCodeImage from '../assets/images/icon_code.png';
import iconCloseImage from '../assets/images/icon_close_modal.png';
import bgImage from '../assets/images/icon_bg.png';
//data
import { SectionData } from '../constants/Data';

enum ActiveTab {
    Collection,
    Note,
    Agree
}

enum sex {
    Male,
    Female
}

const info = {
    name: 'lililiiil',
    avatar: avatarImage,
    code: '337845818',
    description: null,
    sex: sex.Female,
    subscribeCount: 121,
    fansCount: 3200,
    collectionCount: 1320,
    notes: [],
    collections: [],
    agrees: []
};

export default (): JSX.Element => {
    const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.Note);
    const [modalVisible, setModelVisible] = useState<boolean>(true);
    const renderSection: SectionListRenderItem<any> = ({item}) => {
        return (<Text style={styles.sectionListItem}>{item}</Text>)
    }

    const sectionHeader = (info: any) => {
        return (<Text style={styles.sectionHeader}>{info.section.type}</Text>)
    }

    const separator = () => (<View style={styles.separator}></View>);

    return (
        <View style={styles.root}>
            {/* infos */}
            <ImageBackground
                style={styles.infoCardBg}
                source={bgImage}
                imageStyle={styles.bg}
                resizeMode="cover"
            >
                <View style={styles.infoCard}>
                    <View style={styles.infoPadding}>
                        <View style={styles.infoCardHeader}>
                            <Image source={iconMenuImage} style={styles.infoCardHeaderIcon} />
                            <Image source={iconShareImage} style={styles.infoCardHeaderIcon} />
                        </View>
                        <View style={styles.user}>
                            <View style={styles.avatarContainer}>
                                <Image
                                    source={info.avatar}
                                    style={styles.avatar}
                                    resizeMode="cover"
                                />
                                <Image source={iconAddImage} style={styles.subscribeButton} />
                            </View>
                            <View style={styles.userRightTexts}>
                                <Text style={styles.username}>{info.name}</Text>
                                <View style={styles.code}>
                                    <Text style={styles.codeText}>
                                        {`小红书号：${info.code}`}
                                    </Text>
                                    <Image source={iconCodeImage} style={styles.codeIcon} />
                                </View>

                            </View>
                        </View>
                        <Text style={styles.description}>
                            {info.description ? info.description : '点击关注，填写简介'}
                        </Text>
                        <View style={styles.sexContainer}>
                            <Image
                                source={info.sex === sex.Male ? iconSexMaleImage : iconSexFemaleImage}
                                style={styles.sexIcon}
                            />
                        </View>
                        <View style={styles.infoCardFooter}>
                            <View style={styles.numbers}>
                                <Pressable
                                    style={styles.numberItem}
                                    onPress={() => setModelVisible(true)}
                                >
                                    <Text style={[styles.numberText, styles.fontMerriweatherBold]}>
                                        {info.subscribeCount}
                                    </Text>
                                    <Text style={[styles.numberText, styles.mt5]}>
                                        关注
                                    </Text>
                                </Pressable>
                                <View style={[styles.numberItem, styles.mx20]}>
                                    <Text style={[styles.numberText, styles.fontMerriweatherBold]}>
                                        {info.fansCount}
                                    </Text>
                                    <Text style={[styles.numberText, styles.mt5]}>
                                        粉丝
                                    </Text>
                                </View>
                                <View style={styles.numberItem}>
                                    <Text style={[styles.numberText, styles.fontMerriweatherBold]}>
                                        {info.collectionCount}
                                    </Text>
                                    <Text style={[styles.numberText, styles.mt5]}>
                                        获赞与收藏
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.infoCardFooterRightButtons}>
                                <Pressable style={[styles.infoCardFooterRightButton, styles.mr20]}>
                                    <Text style={styles.infoCardFooterRightButtonText}>编辑资料</Text>
                                </Pressable>
                                <Pressable style={styles.infoCardFooterRightButton}>
                                    <Image
                                        source={iconSettingImage}
                                        style={styles.infoCardFooterRightButtonIcon}
                                    />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    <View style={styles.tabs}>
                        <Pressable
                            style={styles.tabItem}
                            onPress={() => setActiveTab(ActiveTab.Note)}
                        >
                            <Text
                                style={[styles.tabItemText, activeTab === ActiveTab.Note ? styles.textDark : null]}>
                                笔记
                            </Text>
                            {activeTab === ActiveTab.Note && (
                                <View style={styles.tabItemActiveAfter}></View>
                            )}
                        </Pressable>
                        <Pressable
                            style={styles.tabItem}
                            onPress={() => setActiveTab(ActiveTab.Collection)}
                        >
                            <Text
                                style={[styles.tabItemText, activeTab === ActiveTab.Collection ? styles.textDark : null]}>
                                收藏
                            </Text>
                            {activeTab === ActiveTab.Collection && (
                                <View style={styles.tabItemActiveAfter}></View>
                            )}
                        </Pressable>
                        <Pressable
                            style={styles.tabItem}
                            onPress={() => setActiveTab(ActiveTab.Agree)}
                        >
                            <Text
                                style={[styles.tabItemText, activeTab === ActiveTab.Agree ? styles.textDark : null]}>
                                赞过
                            </Text>
                            {activeTab === ActiveTab.Agree && (
                                <View style={styles.tabItemActiveAfter}></View>
                            )}
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.tabContent}>
                {!info.notes.length && activeTab === ActiveTab.Note && (
                    <View style={styles.empty}>
                        <Image source={noNotesImage} style={styles.emptyIcon} />
                        <Text style={styles.emptyText}>用一句话，分享今天的快乐吧~</Text>
                        <Pressable style={styles.emptyButton}>
                            <Text style={styles.emptyButtonText}>去分享</Text>
                        </Pressable>
                    </View>
                )}
                {!info.collections.length && activeTab === ActiveTab.Collection && (
                    <View style={styles.empty}>
                        <Image source={noCollectionImage} style={styles.emptyIcon} />
                        <Text style={styles.emptyText}>还没有收藏内容哦~</Text>
                        <Pressable style={styles.emptyButton}>
                            <Text style={styles.emptyButtonText}>去收藏</Text>
                        </Pressable>
                    </View>
                )}
                {!info.agrees.length && activeTab === ActiveTab.Agree && (
                    <View style={styles.empty}>
                        <Image source={noAgreeImage} style={styles.emptyIcon} />
                        <Text style={styles.emptyText}>还没有获得过赞或收藏~</Text>
                        <Pressable style={styles.emptyButton}>
                            <Text style={styles.emptyButtonText}>去创作</Text>
                        </Pressable>
                    </View>
                )}
            </View>
            <Modal
                visible={modalVisible}
                transparent={true}
                statusBarTranslucent={true}
                animationType="slide"
                onRequestClose={() => setModelVisible(false)}
            >
                <View style={styles.modalBlank}></View>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalHeaderText}>我的关注</Text>
                    <Pressable
                        style={styles.modalHeaderIcon}
                        onPress={() => {setModelVisible(false)}}
                    >
                        <Image source={iconCloseImage} style={styles.modalHeaderIconImage} />
                    </Pressable>
                </View>
                <SectionList
                    style={styles.sectionList}
                    sections={SectionData}
                    renderItem={renderSection}
                    renderSectionHeader={sectionHeader}
                    ItemSeparatorComponent={separator}
                    stickySectionHeadersEnabled={true}
                />
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#eaeaea',
    },
    infoCardBg: {
        width: '100%'
    },
    infoPadding: {
        paddingTop: 20,
        paddingHorizontal: 20
    },
    infoCard: {
        width: '100%',
        
    },
    bg: {
        width: '100%'
    },
    infoCardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoCardHeaderIcon: {
        width: 20,
        height: 20
    },
    user: {
        marginTop: 32,
        flexDirection: 'row',
    },
    avatarContainer: {
        position: 'relative',
    },
    subscribeButton: {
        position: 'absolute',
        left: 56,
        top: 56,
        width: 20,
        height: 20
    },
    avatar: {
        width: 78,
        height: 78,
        borderRadius: 39
    },
    userRightTexts: {
        flexGrow: 1,
        paddingLeft: 20,
        justifyContent: 'center'
    },
    username: {
        fontSize: 26,
        color: '#ffffff',
        fontWeight: '600'
    },
    code: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    codeText: {
        fontSize: 12,
        color: '#ffffff'
    },
    codeIcon: {
        width: 12,
        height: 12,
        marginLeft: 10,
        tintColor: '#ffffff'
    },
    description: {
        marginTop: 18,
        color: '#f1f1f2',
        fontSize: 14
    },
    sexContainer: {
        marginVertical: 15,
        backgroundColor: '#ffffff35',
        width: 32,
        height: 20,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sexIcon: {
        width: 10,
        height: 14,
        resizeMode: 'contain'
    },
    infoCardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    numbers: {
        flexDirection: 'row'
    },
    numberItem: {

    },
    numberText: {
        textAlign: 'center',
        color: '#f1f1f2',
    },
    infoCardFooterRightButtons: {
        flexDirection: 'row',
    },
    infoCardFooterRightButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#f1f1f2',
        borderRadius: 30
    },
    infoCardFooterRightButtonText: {
        color: '#ffffff',
        fontSize: 14
    },
    infoCardFooterRightButtonIcon: {
        width: 20,
        height: 20,
        tintColor: '#ffffff',
        resizeMode: 'contain'
    },
    mx20: {
        marginHorizontal: 20
    },
    mr20: {
        marginRight: 20
    },
    fontMerriweatherBold: {
        fontFamily: 'Merriweather-Bold'
    },
    mt10: {
        marginTop: 10
    },
    mt5: {
        marginTop: 5
    },
    textDark: {
        color: "#101010"
    },
    tabs: {
        width: '100%',
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#ffffff',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },
    tabItem: {
        paddingHorizontal: 10,
        height: 20,
        alignItems: 'center',
    },
    tabItemText: {
        color: '#666666',
        fontSize: 14
    },
    tabItemActiveAfter: {
        width: '80%',
        height: 2,
        backgroundColor: 'red',
        marginHorizontal: 'auto',
        marginTop: 2
    },
    tabContent: {
        flexGrow: 1,
    },
    empty: {
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyIcon: {
        width: 200,
        height: 80,
        resizeMode: 'contain',
        tintColor: '#a9a9a9'
    },
    emptyText: {
        marginVertical: 20,
        fontSize: 14,
        color: '#666666'
    },
    emptyButton: {
        width: 'auto',
        // height: 40,
        borderStyle: 'solid',
        borderColor: '#a09d9d',
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 15
    },
    emptyButtonText: {
        color: '#333333'
    },
    modalBlank: {
        // backgroundColor: "#bbbbbb70",
        height: '30%'
    },
    sectionList: {
        backgroundColor: '#efefef'
    },
    sectionListItem: {
        color: '#666666',
        height: 36,
        textAlignVertical: 'center',
        paddingHorizontal: 12
    },
    sectionHeader: {
        paddingHorizontal: 10,
        height: 40,
        backgroundColor: '#dadada',
        textAlignVertical: 'center',
        color: '#333333'
    },
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: '#dddddd'
    },
    modalHeader: {
        width: "100%",
        height: 56,
        backgroundColor: '#efefef',
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        position: 'relative',
        justifyContent: 'center',
        alignItems: "center"
    },
    modalHeaderText: {
        fontSize: 14
    },
    modalHeaderIcon: {
        position: 'absolute',
        right: 12
    },
    modalHeaderIconImage: {
        width: 16,
        height: 16,
    }
})