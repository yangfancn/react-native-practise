import React from "react";
import { View, Text } from "react-native";

interface Props {
    name: string,
    age: number,
    status: boolean
}

interface States {
    address: string
}

class ClassView extends React.Component<Props, States> {

    constructor(props: Props) {
        super(props);
        this.state = {
            address: "广东省深圳市"
        };
    }

    render(): JSX.Element {
        const address = this.state.address;
        return (
            <View>
                <Text style={{ backgroundColor: "orange" }}>{JSON.stringify(this.props)}</Text>
                <Text style={{ backgroundColor: "black" }}>{address}</Text>
            </View>
        )
    }

    componentDidMount(): void {
        setTimeout(() => {
            this.setState ({
                address: "广东省广州市"
            })
        }, 3000)
    }

}

export default ClassView;