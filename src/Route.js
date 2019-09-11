import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import ForgotPassword from './components/auth/ForgotPassword'
import Home from './components/Home'

const AppNavigator = createStackNavigator(
    {
        Login: Login,
        Register: Register,
        ForgotPassword: ForgotPassword,
        Home: Home,
    },
    {

        initialRouteName: 'Login',
        headerMode: 'none',
    }
)

export default createAppContainer(AppNavigator)