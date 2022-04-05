import React from 'react'

// Components
import { Box, Text} from '@chakra-ui/react';
import Image from 'next/image';
import Nav from '../../../components/containers/Home/Nav/index';
import Header from '../Home/header';
import Footer from '../Footer/index';


// Assets 
import pixelBg from '../../../Assets/Images/pixelBg.png';
import {HiOutlineArrowSmDown as DownArrow} from 'react-icons/hi';

function index() {
    return (
        <>
 <Box sx={styles.container}>
<Box sx={styles.leftContainer} bg={pixelBg}>
<Box sx={styles.textContainer}>
<Text as='h1' sx={styles.theContainer}>The</Text>
<Text as='h1'><span>Lighthouse</span></Text>
</Box>
</Box>
<Box sx={styles.arrowContainer} display='flex' alignItems='center' justifyContent='center' mt='25px'>
    <DownArrow color='white' fontSize='30px' style={{display: ['none']}} />
</Box>
<Box sx={styles.rightContainer}>
<Header/>
<Nav/>
</Box>
 </Box>
 
 </>
    )
}

const styles = {
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: ['column', 'column', 'row', 'row'],
        overflowX: 'hidden',
        justifyContent: 'center',
        alignItems: ['center','start']
    },
    leftContainer: {
        height: ['100vh'],
        width: '700px',
        backgroundColor: 'gray',
        textAlign: 'center', 
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: ['url(/mobileBg.png)','url(/mobileBg.png)', 'url(/backgroundImg.png)'],
        backgroundRepeat: 'no-repeat',
        backgroundSize: [null, null, 'cover'],
        backgroundColor: 'black',
        backgroundPosition: ['top'],
        mt: ['50px', '50px', '0px'],

      span: {
          ml: ['35px'],
          position: 'relative',
          bottom: ['32px'],
          
      },
    },
    textContainer: {
        fontFamily: 'VT323',
        color: 'white',
        fontSize: ['60px', '60px', '90px','130px'],
        fontWeight: 'bold',
        mt: ['270px', '270px', '0px'],
        ml:['0px', '0px','25px', '50px'],
        position: [null, null,null, 'relative'],
        left: ['35px', '130px'],
        
        
    },
    theContainer: {
        mr: ['193px', '193px', '350px','480px'],
        mt:[null, null,null,],
        position: [null, null, 'relative', 'relative'],
        top: [null,'20px', null, '50px' ]
    },


    rightContainer: {
        height: '100vh',
        color: 'white',
        width: '100%',
        mt: ['100px', '100px', '300px'],
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column'

    },
 

}



export default index
