import React from 'React';
import { Text, StyleSheet,View } from 'react-native';

const ComponentsScreen = () => {
    const staticText = 'Swapnil';
    return (
            <View>
        <Text style={styles.text}>Getting started with react Native!</Text>
        <Text>My name is {staticText}</Text>
            </View>
        );
    };

const styles = StyleSheet.create({
    text: {
        fontSize: 45
    }
});

export default ComponentsScreen;