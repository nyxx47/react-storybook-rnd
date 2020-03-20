import React, { Component } from 'react';
import {connect} from 'react-redux'
import Cards from '../assets/images/cards.svg'

import Container from '../components/containers'
import View from '../components/views'
import Image from '../components/images'

import Main from './payment/index.js'
import Options from './payment/options.js'


class App extends Component{
   render(){
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
                     { this.props.isStatus 
                      ? <Main/>
                      : <Options/>   
                     }
                  </View>
            </View>
         </Container>
      );
   }
}

const mapStateToProps = state => ({
      isStatus: state.payments.isStatus
})

const mapDispatchToProps = dispatch => {
   return {
      open: () => dispatch(open())
   }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);