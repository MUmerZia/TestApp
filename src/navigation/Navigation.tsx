import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'  
import { StatusBar } from 'react-native'
import { useAppSelector } from '../store/hooks' 
import { UserStack } from './Stack'

const Navigation = () => {
    const [splashVisible, setSplashVisible] = useState(true);
    // const token = useAppSelector(state => state.userSlice.token);
 

    return (
        <NavigationContainer>  
                        <React.Fragment>
                            <StatusBar translucent  barStyle={'dark-content'} backgroundColor={'transparent'} /> 
                            <UserStack />
                        </React.Fragment> 
        </NavigationContainer>
    )
}
export default Navigation
