import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screen
import AuthLoading from "../screen/AuthLoading";
import SelectLanguage from "../screen/SelectLanguage";
const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
                <Stack.Screen options={{ headerShown: false }} name="AuthLoad" component={AuthLoading} />
                <Stack.Screen options={{ headerShown: false }} name="SelectLanguage" component={SelectLanguage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;