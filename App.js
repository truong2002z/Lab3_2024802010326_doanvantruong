
import "react-native-get-random-values";
import {v4} from "uuid"
import { useEffect,useState } from 'react';
import {fetchContacts} from "./utility/api"
import Contacts from './Screens/Contacts';
import Profile from './Screens/Profile'
import Favorites from "./Screens/Favorites";
import React from "react";
import User from "./Screens/User";
import Options from "./Screens/Options";
import BottomNavigation from "./Screens/BottomNavigation";


const App=()=>{
  
  useEffect(()=>{
    fetchContacts().then(data=>console.log(data))
  },[])
  return(
    <BottomNavigation/>
  )
}
export default App;
