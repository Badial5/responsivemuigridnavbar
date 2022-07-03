import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import MenuSharpIcon  from '@mui/icons-material/MenuSharp';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const DrawerComp = ({links }) => {
    //State
    const [open, setOpen] = useState(false)
  return (
    <>
        <Drawer PaperProps={{
            style: {background:'rgba(0,212,255,1)'
        }}}
         open={open} onChange={()=>setOpen(false)} >
           <List>
                {links.map((link, index) => (
                    <ListItemButton onClick={() => setOpen(false) }
                     key={index} divider >
                    <ListItemIcon>
                        <ListItemText sx={{color: 'white'}} >
                            {link}
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                ) )}
           </List>
        </Drawer>

        <IconButton sx={{marginLeft: 'auto', color: 'white'}}
         onClick={() => setOpen(!open)} >
                <MenuSharpIcon>

                </MenuSharpIcon>
            </IconButton>
    </>
  )
}

export default DrawerComp
