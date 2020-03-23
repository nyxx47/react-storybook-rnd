import React, { useState } from 'react'
import Logo from '../../assets/images/logo.png'

import { Button, View, Image, InputLabel } from "../../components";

const Master = () => {
    const [user, setUser] = useState('');
    const [promo, setPromo] = useState('');

    const handlerUserID = e => {
        setUser(e.target.value)
    }

    const handlerPromoCode = e => {
        setPromo(e.target.value)
    }
    
    return (
        <>
            <View>
                <Image src={Logo} width="40px"  margin="15px"/>
            </View>
            <View direction="column" flexValue="1" padding="20px"  isEqualWidth="100%">
                <InputLabel 
                title="User ID" 
                type="text" 
                value={user} 
                width="100%" 
                bottom="20px"
                onChange={ handlerUserID }
                />
                <InputLabel 
                title="Promo Code" 
                type="text" 
                width="100%" 
                bottom="20px"
                value={promo} 
                onChange={ handlerPromoCode }
                />
            </View>
            <View width="100%" padding="20px" justify="space-between">
                <Button isFocus width="45%" height="40px" variant="secondary" border="primary">
                    Kembali
                </Button>
                <Button width="45%" height="40px" border="primary">
                    Lanjutkan
                </Button>
            </View>
        </>
     )
}

export default Master