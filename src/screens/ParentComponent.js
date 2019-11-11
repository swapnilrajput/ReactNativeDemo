import React from 'React';
import { View , Text, StyleSheet } from 'react-native';
import ChildComponent from '../Components/ChildComponent';

const ParentComponent = () => {
    return (
        <View>
            <ChildComponent 
                title ="beach" 
                    imageSource={require('../../assets/beach.jpg')}
                        Score ="9"/>
            <ChildComponent 
                title ="forest" 
                    imageSource={require('../../assets/forest.jpg')}
                        Score ="7"/>
            <ChildComponent 
                title ="forest" 
                    imageSource={require('../../assets/mountain.jpg')}
                        Score ="4"/>
        </View >
     )
};


export default ParentComponent;