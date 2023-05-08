import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import {NavigationContainer} from '@react-navigation/native';
import StackNavs from './navigation/Navigation';


export default function App() {
  return (
    <NavigationContainer style={styles.container}>
  
      <StackNavs />
  
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 50,
  },
});
