import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import CityDetails from './CityDetails';


const Nav = StackNavigator({
  Home: { screen: HomeScreen },
  City: { screen: CityDetails },
});

export default Nav;
