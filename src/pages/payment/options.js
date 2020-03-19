import React from 'react'
import {connect} from 'react-redux'
import {close} from '../../store/modules/paymentConfirmation'

import Flatlist from '../../components/flatlists'
import Button from '../../components/buttons'
import View from '../../components/views'
import Image from '../../components/images'
import {Backpress} from '../../assets/icons'

class Options extends React.Component{

    render(){
        return (
            <>
             <View width="100%" padding="20px">
                 <Backpress 
                    onClick={() => this.props.close()}
                    width="2.5em" 
                    height="2.5em"/>
             </View>
             <View margin="20px 0px 20px 0px">
                 <Flatlist title="Total Amount" subtitle="Rp. 50.000,00"/>
             </View>
             <View width="100%" padding="20px">
                 <Button 
                 icon="arrowForward" 
                 variant="secondary" 
                 width="100%" 
                 height="50px" 
                 border="primary"
                 iconPosition="absolute"
                 iconRight="10px">
                 Pilih Metode Pembayaran
                 </Button>
             </View>
            </>
         )
    }
}

const mapDispatchToProps = dispatch => {
    return {
       close: () => dispatch(close())
    }
 }

export default connect(null,mapDispatchToProps)(Options)