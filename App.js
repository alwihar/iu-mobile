import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Pages/Home';
import Details from "./Pages/Details";

const Stack = createStackNavigator();

const App = () => {

  const [data, setData] = useState({
      API_URL: '',
      Token: '',
      View_ID: ''
  });


  const handleChange = (name, e) => {
      setData({
          ...data,
          [name]: e.nativeEvent.text
      });
  };

  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home">
                {props => <Home
                    {...props}
                    handleChange={handleChange}
                    data={data}
                />}
            </Stack.Screen>
            <Stack.Screen name="Details">
                {props => <Details
                    {...props}
                    data={data}
                />}
            </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;

