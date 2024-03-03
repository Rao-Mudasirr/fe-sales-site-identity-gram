import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  MenuItem,
  Menu,
  Typography,
  useTheme,
  Box,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { pages } from '@constants';
import Link from 'next/link';
import { IdentityGramLogo } from '@images';

export const UserDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(Array(pages.length).fill(null));
  const theme = useTheme();

  const PageClickHandler = (index: any) => (event: any) => {
    // update PageClickHandler to receive index as a parameter
    setAnchorEl(
      anchorEl.map((el, i) => (i === index ? event.currentTarget : el)),
    ); // update the corresponding anchor element based on the index
    // console.log(index)
  };

  const CloseHandler = (index: any) => () => {
    // update CloseHandler to receive index as a parameter
    setAnchorEl(anchorEl.map((el, i) => (i === index ? null : el))); // update the corresponding anchor element based on the index
  };
  return (
    <React.Fragment>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
          <Link href="/" passHref onClick={() => setOpenDrawer(false)}>
            <Image src={IdentityGramLogo} alt="Logo" />
          </Link>
          <IconButton
            sx={{ color: theme.palette.text.primary }}
            onClick={() => setOpenDrawer(false)}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {pages.map((page, index) => (
            <React.Fragment key={page.id}>
              <ListItemButton
                onClick={(event) => PageClickHandler(index)(event)}
              >
                <ListItemText
                  sx={{ fontSize: '16px', fontWeight: '500', color: '#6E7191' }}
                  primary={page.name}
                />
                <Typography sx={{ mt: 1 }}>
                  <KeyboardArrowDownIcon />
                </Typography>
              </ListItemButton>
              <Menu
                anchorEl={anchorEl[index]}
                open={Boolean(anchorEl[index])}
                onClose={CloseHandler(index)}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  {page.items.map((item: any, index) => (
                    <MenuItem key={item.id} onClick={CloseHandler(index)}>
                      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        {item?.image && (
                          <Box sx={{ marginRight: '16px' }}>
                            <Image
                              src={item?.image}
                              alt={item?.title}
                              width={36}
                              height={36}
                            />
                          </Box>
                        )}
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="body1">{item.title}</Typography>
                          <Typography variant="body2">
                            {item.description}
                          </Typography>
                        </Box>
                      </Box>
                    </MenuItem>
                  ))}
                </Box>
              </Menu>
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: '#645CAA', marginLeft: 'auto' }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        {openDrawer ? (
          <CloseIcon sx={{ color: '#645CAA' }} />
        ) : (
          <MenuIcon sx={{ color: '#645CAA' }} />
        )}
      </IconButton>
    </React.Fragment>
  );
};
