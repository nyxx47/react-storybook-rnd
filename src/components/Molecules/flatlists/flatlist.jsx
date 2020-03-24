import React from 'react'
import View from '../../atoms/views'

import StyledFlatlist from './flatlist.styles.jsx'
import Text from '../../atoms/texts'
import { string } from 'prop-types'

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

Flatlist.propTypes = {
    title: string,
    subtitle: string
}

export default Flatlist