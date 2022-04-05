import React from 'react'

// Components
import { Box, Text} from '@chakra-ui/react';
import Image from 'next/image';
import Nav from '../../../components/containers/Home/Nav/index';


// Assets 
import pixelBg from '../../../Assets/Images/pixelBg.png';
import {HiOutlineArrowSmDown as DownArrow} from 'react-icons/hi';

function index() {
    return (
 <Box sx={styles.container}>
<Box sx={styles.leftContainer} bg={pixelBg}>
    <Box sx={styles.textContainer}>
<Text as='h1' sx={styles.theContainer}>The</Text>
<Text as='h1'><span>Lighthouse</span></Text>
</Box>
</Box>
<Box sx={styles.arrowContainer} display='flex' alignItems='center' justifyContent='center' mt='25px'>
    <DownArrow color='white' fontSize='30px' />
</Box>
<Box sx={styles.rightContainer}>
<Nav/>
</Box>
 </Box>
    )
}

const styles = {
    container: {
        height: '200vh',
        width: '100%',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: ['column', 'column', 'column', 'row'],
    },
    leftContainer: {
        height: '200vh',
        backgroundColor: 'gray',
        textAlign: 'center', 
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: ['url(/mobileBg.png)','url(/backgroundImg.png)'],
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
        backgroundPosition: 'top',
        mt: '50px',

      span: {
          ml: ['35px'],
          position: 'relative',
          bottom: ['32px']
      }

    },
    textContainer: {
        fontFamily: 'VT323',
        color: 'white',
        fontSize: ['60px'],
        fontWeight: 'bold',
        mt: ['270px'],
        
    },
    theContainer: {
        mr: ['193px']
    },


    rightContainer: {
        height: '100%',
        color: 'white',
        mt: ['100px'],
        background: 'black',
    },

}



export default index
