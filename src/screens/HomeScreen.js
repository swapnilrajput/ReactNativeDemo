import React from 'react';
import { Text, StyleSheet, View ,Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  const style = StyleSheet.create({
    spacing: {
      paddingBottom: 30
    }
  })
  return (
    <View>
      <Text style={styles.text}>HomeScreen Changes</Text>
      <Button 
      style = {style.spacing}
        onPress = {()=> navigation.navigate('ArrayOfObjects')}
          title="Go to Components"/>
      <Button 
        onPress = {()=> navigation.navigate('Component')}
          title="Changes"/>
      <Button 
        onPress = {()=> navigation.navigate('ParentComponent')}
          title="ParentChild"/>
      <TouchableOpacity 
        onPress= {(press)=> 
          console.log('list pressed')}>
        <Text>Go to list demo</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
