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
<Text as='h1'>The</Text>
<Text as='h1'><span>Lighthouse</span></Text>
</Box>
<Box sx={styles.rightContainer}>
<Nav/>


</Box>
 </Box>
    )
}


const styles = {
    container: {
        height: '100vh',
        width: '100%',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: ['column', 'column', 'column', 'row'],
    },
    leftContainer: {
        height: '60vh',
        backgroundColor: 'gray',
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url(/backgroundImg.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 

        h1: {
            margin: '2px',
            color: '#ffff',
            fontFamily: 'VT323',
            fontWeight: 'bold',
            // font-family: 'Press Start 2P',
            fontSize: ['55px'],
            mt: [
                '450px',

            ],
            ml: ['10px']
            

        },
        span: {
            position: 'relative',
            top: ['55px'],
            right: ['25px']
        }
      

    },
    rightContainer: {

    },

}



export default index
