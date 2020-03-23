import React from 'react'
import {useDispatch} from 'react-redux'
import {close, isChecked} from '../../store/modules/payments/actions'

import { Flatlist, Button, View, Text } from "../../components";
import {Backpress} from '../../assets/icons'

const Options = () => {
    const dispatch = useDispatch()

    return (
        <>
         <View width="100%" padding="20px">
             <Backpress 
                onClick={() => dispatch(close())}
                width="2.5em" 
                height="2.5em"/>
         </View>
         <View margin="20px 0px 20px 0px">
             <Flatlist title="Pilin Metode Pembayaran Anda"/>
         </View>
         <View flexValue="1" direction="column">
            <View width="100%" padding="5px 20px 5px 20px" justify="space-between">
                <Button onClick={() => dispatch(isChecked({
                    id: "01",
                    name: "QR Payment",
                }))} variant="secondary" width="45%" height="50px" border="primary">
                QR Payment
                </Button>
                <Button onClick={() => dispatch(isChecked({
                    id: "02",
                    name: "Debit/Credit",
                }))} variant="secondary" width="45%" height="50px" border="primary">
                Debit/Credit
                </Button>
            </View>
            <View width="100%" padding="5px 20px 5px 20px" justify="space-between">
                <Button onClick={() => dispatch(isChecked({
                    id: "03",
                    name: "Payment Point",
                }))} variant="secondary" width="45%" height="50px" border="primary">
                Payment Point
                </Button>
                <Button onClick={() => dispatch(isChecked({
                    id: "04",
                    name: "Pede",
                }))} variant="secondary" width="45%" height="50px" border="primary">
                Pede
                </Button>
            </View>
            <View width="100%" padding="5px 20px 5px 20px" justify="space-between">
                <Button onClick={() => dispatch(isChecked({
                    id: "05",
                    name: "JakOne",
                }))} variant="secondary" width="45%" height="50px" border="primary">
                JakOne
                </Button>
                <Button onClick={() => dispatch(isChecked({
                    id: "06",
                    name: "YAP!",
                }))} variant="secondary" width="45%" height="50px" border="primary">
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

export default Options