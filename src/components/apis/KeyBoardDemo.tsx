import React, {useEffect} from "react";
import { View, Keyboard, TextInput, Button } from "react-native";

export default (): JSX.Element => {
    useEffect(() => {
        const didShow = Keyboard.addListener('keyboardDidShow', (event) => {
            console.log(event)
        });

        const didMiss = Keyboard.addListener('keyboardDidHide', (event) => {
            console.log(event);
        })
        
        return () => {
            didShow.remove();
        }
    });

    return (
        <View>
            <TextInput style={{ 
                width: '100%',
                height: 30,
                backgroundColor: '#ddd',
                borderColor: 'blue',
                borderWidth: 1,
                borderStyle: 'solid'
            }} />
            <Button
                title="hide keyboard"
                onPress={() => {
                    Keyboard.dismiss();
                }}
            />
        </View>
    );
}