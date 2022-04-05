import React from 'react'


// Components
import {Box, UnorderedList, ListItem, Text, Link} from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react'

function index() {
    return (
    <Box sx={styles.container}>     
    <UnorderedList sx={styles.listContainer}>
        <ListItem sx={styles.listItem}>
            <Link to='/events'>Events</Link>
        </ListItem>
        <Divider width='20px' alignSelf='center' color='yellow'/>
        <ListItem sx={styles.listItem}>
            <Link to='/roadmap'>Gallery</Link>
        </ListItem>
        <Divider width='20px' alignSelf='center' color='yellow'/>
        <ListItem sx={styles.listItem}>
            <Link to='/readmore'>Read More</Link>
        </ListItem>
    </UnorderedList>
    </Box>
    )
}



const styles = {
    container: {
        height: '100vh',
    },
    listContainer: {
        mt: [null, null, '80px', null,'165px'],
        listStyle:'none',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    },
    listItem: {
        margin: ['20px'],
        fontFamily: 'VT323',
        fontSize: ['25px', '25px', '25px', '30px'],

    }
}

export default index
