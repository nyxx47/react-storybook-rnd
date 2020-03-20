import React from 'react'
import {connect} from 'react-redux'
import {close, isChecked} from '../../store/modules/paymentConfirmation'

import Flatlist from '../../components/flatlists'
import Button from '../../components/buttons'
import View from '../../components/views'
import Text from '../../components/texts'
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
                 <Flatlist title="Pilin Metode Pembayaran Anda"/>
             </View>
             <View flexValue="1" direction="column">
                <View width="100%" padding="5px 20px 5px 20px" justify="space-between">
                    <Button onClick={() => this.props.isChecked({
                        id: "01",
                        name: "QR Payment",
                    })} variant="secondary" width="45%" height="50px" border="primary">
                    QR Payment
                    </Button>
                    <Button onClick={() => this.props.isChecked({
                        id: "02",
                        name: "Debit/Credit",
                    })}variant="secondary" width="45%" height="50px" border="primary">
                    Debit/Credit
                    </Button>
                </View>
                <View width="100%" padding="5px 20px 5px 20px" justify="space-between">
                    <Button variant="secondary" width="45%" height="50px" border="primary">
                    Payment Point
                    </Button>
                    <Button variant="secondary" width="45%" height="50px" border="primary">
                    Pede
                    </Button>
                </View>
                <View width="100%" padding="5px 20px 5px 20px" justify="space-between">
                    <Button variant="secondary" width="45%" height="50px" border="primary">
                    JakOne
                    </Button>
                    <Button variant="secondary" width="45%" height="50px" border="primary">
                    YAP!
                    </Button>
                </View>
             </View>
             <View padding="20px">
                 <Text>28/02/2020 - 18:30:20</Text>
             </View>
             
            </>
         )
    }
}

const mapDispatchToProps = dispatch => {
    return {
       close: () => dispatch(close()),
       isChecked: payload => dispatch(isChecked(payload))
    }
 }

export default connect(null,mapDispatchToProps)(Options)