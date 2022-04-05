
import Image from 'next/image'

//Assets
import PixelChar from '../../../public/pixelChar.png';
import PixelHeart from '../../../public/pixelheart.png'
// Components
import React from 'react'

import {Box, Text} from '@chakra-ui/react';

function index() {
    return (
     <Box sx={styles.container}>
<Image src={PixelChar} height='50px' width='50px'/>

<Box sx={styles.comingSoon}>
<Text as='h2'>Coming Soon <Image src={PixelHeart} height='20px' width='20px'/></Text>
</Box>

<Box sx={styles.bottom}>
Copyright @2021 The LightHouse Project. All Rights Reserved.
</Box>
     </Box>
    )
}

const styles = {
    container: {
height: '200',
color: 'white',
textAlign: 'center',
position: 'initial',
background: 'black',
mt: '50px'
    },
    comingSoon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '30px',
        fontFamily: 'VT323',
    },
    bottom: {
        mt:'50px',
        color: '#585353',
        fontFamily: 'VT323',

    }
}

export default index
