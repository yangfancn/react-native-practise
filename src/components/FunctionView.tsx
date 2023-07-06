import React, { useState, useEffect} from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import InfoCard from './InfoCard';

export default (): JSX.Element => {
    const [levelUp, setLevelUp] = useState<boolean>(false);

    const arr: string[] = ['AAA', 'BBB', 'CCC', 'DDD'];

    useEffect(() => {
        setTimeout(() => {
            setLevelUp(true);
        }, 2000)
    }, []);

    const levelText = () => (
        levelUp
        ? <Text style={{ color: 'green' }}>等级：高级</Text>
        : <Text style={{  color: 'red' }}>等级：低级</Text>
    )

    return (
        <View style={styles.container}>
            <InfoCard name="张三" age={14} sex='男'>
                {levelText()}
            </InfoCard>
            <ScrollView>
                {arr.map((item, index) => <Text style={styles.listText} key={index}>{item}</Text>)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    listText: {
        marginVertical: 30,
        fontSize: 20,
        color: '#834242'
    },
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#eaeaea"
    }
})