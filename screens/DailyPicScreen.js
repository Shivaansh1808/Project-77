import * as React from 'react';
import { Text, View } from 'react-native';

export default class DailyPicScreen extends React.Component {
    render() {
        return(
            <View 
                style = {{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Daily Pic Screen</Text>
            </View>
        )
    }
}