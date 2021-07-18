import * as React from 'react';
import { Text, View } from 'react-native';

export default class StarMapScreen extends React.Component {
    render() {
        return(
            <View 
                style = {{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Star Map Screen</Text>
            </View>
        )
    }
}