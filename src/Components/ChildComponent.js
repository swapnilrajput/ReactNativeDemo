import React from 'React';
import { View , Text, StyleSheet, Image } from 'react-native';


const ChildComponent = parentData => {
    console.log(parentData,'propes');
    return (
        <View>
        <Image source={parentData.imageSource}/>
        <Text>{parentData.title}</Text>
        <Text>Image Score - {parentData.Score}</Text>
        </View>
    )
}

const style = StyleSheet.create({
        listView: {
            padding: 30
        }
});


export default ChildComponent;