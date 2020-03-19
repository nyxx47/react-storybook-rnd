import React from 'react'
import View from '../views'

import StyledFlatlist from './flatlist.styles.jsx'
import Text from '../texts'

const Flatlist = ({title, subtitle}) => {

    return (
        <StyledFlatlist>
            <View>
                <Text>
                    {title}
                </Text>
            </View>
            <View>
                <Text>
                    {subtitle}
                </Text>
                
            </View>
        </StyledFlatlist>
    )
}

export default Flatlist