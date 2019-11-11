import React from 'React';
import { View , Text, StyleSheet } from 'react-native';
import ChildComponent from '../Components/ChildComponent';

const ParentComponent = () => {
    return (
        <View>
            <ChildComponent/>
            <ChildComponent/>
        </View>
     )
};


export default ParentComponent;