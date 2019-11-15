import React,{ useState } from 'React';
import { View, Text, StyleSheet, Button} from 'react-native';

const style = StyleSheet.create({
    spacing: {
        padding: 20
    }
});

const StateManagement = () => {
    const [counter, data] = useState(0);
    return (
        <View style={style.spacing}>
            <Button style={style.spacing}
            title="Increase" onPress = {()=> {
                // counter++;
                data(counter + 1);
            }}/>
            <Button style={style.spacing}
            title="Decrease" onPress = { ()=> {
                // counter--;
                data(counter - 1);
            }}/>
            <Text>Current count:</Text>
            <Text>{counter}</Text>
        </View>
    )
}

export default StateManagement;
