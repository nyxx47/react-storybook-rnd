import React from 'react'
import { Container, View, Text, Lottie } from "../../components";
import * as NotFoundLottiefile from '../../assets/lottiefiles/404.json';

const NotFound = () => {

    return (
        <Container
            isEqualWidth="100%" 
            isEqualHeight="100vh" 
            display="flex" 
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            backgroundColor="#ffffff"
            >
            <View> 
                <Lottie path={NotFoundLottiefile.default} height={500} width={500} 
                />
            </View>
            <View>
                <Text size="10em">NOTHING TO SEE HERE!</Text>
            </View>
        </Container>
    )
}

export default NotFound