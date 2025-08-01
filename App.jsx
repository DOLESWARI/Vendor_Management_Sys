import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Toggle from '../screens/Toggle_page';
import Signin from '../screens/Signin';
import Login from '../screens/Login';
import UserPage from '../screens/UserPage';
import AdminPage from '../screens/AdminPage';
import ViewItem from '../screens/ViewItem';
import AddItem from '../screens/AddItem';
import EditItem from '../screens/EditItem';
import AddProductForm from '../screens/AddProductForm';
import EditProductForm from '../screens/EditProductForm';
import AdminViewPage from '../screens/AdminViewPage';
import AdminEditPage from '../screens/AdminEditPage';
import AdminEditProductForm from '../screens/AdminEditProductForm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Toggle" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Toggle" component={Toggle} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="UserPage" component={UserPage} />
        <Stack.Screen name="AdminPage" component={AdminPage} />
        <Stack.Screen name="ViewItem" component={ViewItem} />
        <Stack.Screen name="AddItem" component={AddItem} />
        <Stack.Screen name="EditItem" component={EditItem} />
        <Stack.Screen name="AddProductForm" component={AddProductForm} />
        <Stack.Screen name="EditProductForm" component={EditProductForm} />
        <Stack.Screen name="AdminViewPage" component={AdminViewPage} />
        <Stack.Screen name="AdminEditPage" component={AdminEditPage} />
        <Stack.Screen name="AdminEditProductForm" component={AdminEditProductForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
