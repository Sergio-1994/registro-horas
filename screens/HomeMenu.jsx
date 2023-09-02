import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {React, useState} from 'react';
import RegistroHorario from './RegistroHorario'
import News from './News'
import Profile from './Profile'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();


function Home(){
    return(
        
        
        <Tab.Navigator 
            screenOptions={({route})=>({
                headerShown: false,

                tabBarIcon: ({focused,color,size})=>{
                    let iconName = ''
                    switch(route.name){
                        case 'Timer':
                            iconName = 'time-outline'
                            break
                        case 'News':
                            iconName = 'newspaper-outline'
                            break
                        case 'Profile':
                            iconName = 'person-outline'
                            break
                        
                    }

                    return <Icon name={iconName} size = {30} color ={color}/>
                }                
            })} 
            >    
            <Tab.Screen name="Timer" component={RegistroHorario}/>
            <Tab.Screen name="News" component={News}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
        
    )

}


export default Home