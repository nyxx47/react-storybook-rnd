import React from 'react'
import Lottie from 'react-lottie';
import { Container, View, Text } from "../../components";
import * as NotFoundLottiefile from '../../assets/lottiefiles/404.json';

const NotFound = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: NotFoundLottiefile.default
    };
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
                <Lottie 
                    style={{position: 'relative', top:'-50px'}}
                    options={defaultOptions} 
                    height={600} 
                    width={600} 
                />
            </View>
            <View>
                <Text size="10em">NOTHING TO SEE HERE!</Text>
            </View>
        </Container>
    )
}

export default NotFound