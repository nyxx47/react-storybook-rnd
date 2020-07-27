import React, { useEffect } from 'react';
import {useSelector} from 'react-redux'
import Cards from '../../assets/images/cards.svg'

import { Container, View, Image } from "../../components";

import Master from './master.js'
import Options from './options.js'


const App = () => {
   const isStatus = useSelector( state => state.payments.isStatus)

   useEffect(() => {
      console.log("ENV ", process.env.REACT_APP_TITLE)
   })

   return(
      <Container 
      isEqualWidth="100%" 
      isEqualHeight="100vh" 
      display="flex" 
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      >
         <View 
            width="50%"
            isEqualWidth="90%"
            isEqualHeight="90vh"
            height="60vh" 
            backgroundColor="#ffffff" 
            isBoxShadow="10px 20px 50px rgba(149, 163, 180, 0.1)"
            radius="20px"
            overflow="hidden"
            isEqualDirection="column"
            
            > 
               <View width="50%" overflow="hidden" isEqualWidth="100%" isEqualHeight="20vh" backgroundColor="#001CF9" position="relative">
                  <Image width="100%" src={Cards} position="absolute" isEqualtop="10px" isEqualleft="-40px" left="-50px" top="100px" />
               </View>
               <View width="50%" isEqualWidth="100%" flexValue="1" direction="column" >
                  { isStatus 
                   ? <Master/>
                   : <Options/>   
                  }
               </View>
         </View>
      </Container>
   );
}

export default App;