import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ArrayOfObjects from './src/screens/ArrayOfObjects';
import GoalExercise from './src/screens/GoalExercise';
import ParentComponent from './src/screens/ParentComponent';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component :ComponentsScreen,
    ArrayOfObjects : ArrayOfObjects,
    GoalExercise: GoalExercise,
    ParentComponent : ParentComponent
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
