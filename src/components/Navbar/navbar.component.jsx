import React from 'react'
import { AppBar, Grid, Toolbar, Typography, useTheme,
useMediaQuery } from '@mui/material'
import StoreSharpIcon from '@mui/icons-material/StoreSharp';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DrawerComp from '../Drawer/drawer.component';


import { useState } from 'react';

const Navbar = ({links}) => {
    //State
    const [value, setValue] = useState();

    //Theme
    const theme = useTheme();
    //media query breakpoints
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar sx={{backgroundImage:'linear-gradient(90deg, rgba(22,10,236,1) 19%, rgba(0,212,255,1) 97%);'}} >
        <Toolbar>


         { isMatch ? <> 
            <Typography>
                        <StoreSharpIcon />
                    </Typography> 
         <DrawerComp links={links} /> </> 
         
         :
         
         <Grid sx={{placeItems: 'center'}} container>
            
                <Grid item xs={2} >
                    <Typography>
                        <StoreSharpIcon />
                    </Typography> 
                </Grid>

                <Grid item xs={6}>
                    <Tabs TabIndicatorProps={{style: {background:'rgba(0,212,255,1)'}}}
                    textColor='inherit'
                     value={value}
                     onChange={(e, val) => setValue(val) }
                     >
                        {links.map((link, index) => (
                            <Tab key={index} label={link} />
                        ))}
                    </Tabs>

                </Grid>

                <Grid item xs={1} />

                <Grid item xs={3}>
                    <Box display='flex' >
                        <Button variant="contained"
                        sx={{marginLeft: 'auto', background: 'rgba(22,10,236,1)' }}
                        >
                            Login
                        </Button>

                        <Button sx={{marginLeft: 1, background:'rgba(22,10,236,1)'}}
                         variant="contained" >
                            SignUp
                        </Button>
                    </Box>
                </Grid>
                
            </Grid>

            
        }
            
        </Toolbar>
    </AppBar>
  )
}

export default Navbar 
