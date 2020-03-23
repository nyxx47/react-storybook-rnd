import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {open} from '../../store/modules/payments/actions'
import Logo from '../../assets/images/logo.png'

import { Flatlist, Button, View, Image, Text } from "../../components";

const Master = () => {
    const isChecked = useSelector(state => state.payments.isChecked)
    const dispatch = useDispatch()
    
    return (
        <>
            <View>
                <Image src={Logo} width="40px"  margin="15px"/>
            </View>
            <View direction="column" isEqualWidth="100%">
                <Flatlist title="Nama Merchant" subtitle="Elevenia"/>
                <Flatlist title="Order No" subtitle="100234050"/>
                <Flatlist title="Tanggal Transaksi" subtitle="28/02/2020"/>
            </View>
            <View margin="20px 0px 20px 0px">
                <Flatlist title="Total Amount" subtitle="Rp. 50.000,00"/>
            </View>
            <View width="100%" padding="20px">
                <Button
                isFocus
                onClick={() => dispatch(open())}
                icon="arrowForward" 
                variant="secondary" 
                width="100%" 
                height="50px" 
                border="primary"
                iconPosition="absolute"
                iconRight="10px">
                { !isChecked ? 'Pilih Metode Pembayaran' : isChecked.name}
                </Button>
            </View>
            <View width="100%" padding="20px" justify="space-between">
                <Button isFocus width="45%" height="40px" variant="secondary" border="primary">
                    Kembali
                </Button>
                <Button width="45%" height="40px" border="primary">
                    Lanjutkan
                </Button>
            </View>
            <View width="100%" padding="20px">
                <Text size="14" weight="regular">28/02/2020 - 18:30:20</Text>
            </View>
        </>
     )
}

export default Master