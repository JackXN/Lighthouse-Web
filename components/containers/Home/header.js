import React from 'react';
import {Box, StylesProvider, Text} from '@chakra-ui/react';

function header() {
    return (
      <Box sx={styles.container}>
          <Text as='h3'>Written By Ruben Chavez</Text>
          <Text as='h3'>Developed By Jack Rigan</Text>
      </Box>
    )
}


const styles = {
    container: {
        display: ['none', 'none', 'none', 'flex'],
        position: 'relative',
        bottom: ['250px'],
        flexDirection:'column',
        fontFamily: 'VT323',
        fontSize: '18px',
        color: '#585353'
    }
}

export default header
