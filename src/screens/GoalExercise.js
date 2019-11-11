import React from 'React';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';

const GoalExercise = () => {
    const flastListItems = [
        {name : 'Friend1', age : 20},
        {name : 'Friend2', age : 45},
        {name : 'Friend3', age : 32},
        {name : 'Friend4', age : 27},
        {name : 'Friend5', age : 53},
        {name : 'Friend6', age : 30},
        {name : 'Friend7', age : 47},
    ];
    const styling = StyleSheet.create({
        fontstyle : {
            fontSize: 30,
            marginVertical : 50,
        }
    });

    const styling_flatlist = StyleSheet.create({
        fontstyle : {
            margin: 1
        }
    });

    return (
        <FlatList 
            keyExtractor = {(allKeys) => allKeys.name}
                data = {flastListItems}
                    renderItem = { ({item})=> 
                        {
                        return (
                            <View style = {styling_flatlist.fontstyle}>
                            <Text style = {styling.fontstyle}>{item.name} - Age {item.age}</Text>
                            </View>
                        )
                        }
                }>
        </FlatList>
    );
};


export default GoalExercise;