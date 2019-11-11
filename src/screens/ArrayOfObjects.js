import React from 'React';
import { Text , View, StyleSheet, FlatList }  from 'react-native';


const ArrayOfObjects = () => {
    const array_names = 
    [
        {name: 'swapnil'},
        {name: 'swapnil123'},
        {name: 'swapnil1'},
        {name: 'swapnil12'}
    ];
    const apply_style = StyleSheet.create({
        orderItem: {
            marginVertical:50
        }
    })

    const newStyle = StyleSheet.create({
        data: {
            padding:1,
            marginHorizontal:3
        }
    });

    return (
            <FlatList 
            horizontal 
            style={newStyle.data}
            showsHorizontalScrollIndicator = {false}
                data ={array_names} 
                    keyExtractor = {(allKeys)=> allKeys.name}
                        renderItem = 
                            { ({item})=> 
                                {
                                    console.log(item,'check all render item data');
                                    return <Text style = {apply_style.orderItem}>{item.name}</Text>
                                }
                            }>
            </FlatList>
    );
}


export default ArrayOfObjects;