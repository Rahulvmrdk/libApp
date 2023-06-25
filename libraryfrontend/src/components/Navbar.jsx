import { AppBar, Box, Button, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
  
    <Box sx={{ display: 'flex' }}>
        <CssBaseline/>
        <AppBar component='nav'>
            <Toolbar>
                
                
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                
                sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h4'>Library App</Typography>
          <Box sx={{marginLeft:'auto'}}>
            <Button variant='contained' ><Link to={'/'}style={{textDecoration:'none',color:'white'}}>View Books</Link></Button>&nbsp;&nbsp;
            <Button variant='contained'><Link to={'/add'} style={{textDecoration:'none',color:'white'}}>Add Books</Link></Button>
          </Box>
                
            </Toolbar>
        </AppBar>


    </Box>
  )
}

export default Navbar