import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//screen
import SelectLanguage from "../screen/SelectLanguage";
import TermsOfService from "../screen/TermsOfService";
import Login from "../screen/Login";
import RequestOtp from "../screen/RequestOtp";
import ConfirmOtp from "../screen/ConfirmOtp";
import CreatePinCode from "../screen/CreatePinCode";
import SetFingerPrint from "../screen/SetFingerPrint";
import EnterPinCode from "../screen/EnterPinCode";
const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
                <Stack.Screen options={{ headerShown: false }} name="SelectLanguage" component={SelectLanguage} />
                <Stack.Screen options={{ headerShown: false }} name="TermsOfService" component={TermsOfService} />
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false }} name="RequestOtp" component={RequestOtp} />
                <Stack.Screen options={{ headerShown: false }} name="ConfirmOtp" component={ConfirmOtp} />
                <Stack.Screen options={{ headerShown: false }} name="CreatePinCode" component={CreatePinCode} />
                <Stack.Screen options={{ headerShown: false }} name="SetFingerPrint" component={SetFingerPrint} />
                <Stack.Screen options={{ headerShown: false }} name="EnterPinCode" component={EnterPinCode} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;