import React, { useState } from 'react';
import {
  AppBar,
  Box,
  MenuItem,
  Menu,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import { IdentityGramLogo } from '@images';
import { pages } from '@constants';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { UserDrawer } from '@molecules';
import Link from 'next/link';
import { CustomLink } from '@atoms';

export const UserHeader = () => {
  const [anchorEl, setAnchorEl] = useState(Array(pages.length).fill(null)); // create an array of null values with the same length as pages
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  const handlePageClick = (index: any) => (event: any) => {
    // update handlePageClick to receive index as a parameter
    setAnchorEl(
      anchorEl.map((el, i) => (i === index ? event.currentTarget : el)),
    ); // update the corresponding anchor element based on the index
    // console.log(index)
  };

  const handleClose = (index: any) => () => {
    // update handleClose to receive index as a parameter
    setAnchorEl(anchorEl.map((el, i) => (i === index ? null : el))); // update the corresponding anchor element based on the index
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: '#ffffff', fontFamily: 'Poppins' }}>
        <Toolbar>
          <Box>
            <Link href="/" passHref style={{ textDecoration: 'none' }}>
              <Image
                src={IdentityGramLogo}
                alt="Logo"
                style={{
                  margin: '5px',
                }}
              />
            </Link>
          </Box>

          {isMatch ? (
            <>
              <UserDrawer />
            </>
          ) : (
            <>
              <Box sx={{ marginLeft: 'auto', display: 'flex' }}>
                {pages.map((page, index) => (
                  <React.Fragment key={page.id}>
                    <MenuItem
                      onClick={handlePageClick(page.id)} // pass the index as a parameter to handlePageClick
                      sx={{
                        color: '#6E7191',
                        '&:hover': {
                          backgroundColor: 'transparent',
                          color: '#645CAA',
                        },
                      }}
                    >
                      <Typography variant="h6">{page.name}</Typography>
                      <Typography variant="h6" sx={{ mt: 1 }}>
                        <KeyboardArrowDownIcon />
                      </Typography>
                    </MenuItem>
                    <Menu
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={handleClose(index)}
                      sx={{ mt: 1 }}
                    >
                      {page.items.map((products: any, index) => (
                        <Box
                          sx={{
                            width: '100%',
                            boxSizing: 'border-box',
                            padding: '8px 6px',
                          }}
                        >
                          <MenuItem
                            key={products.id}
                            onClick={handleClose(index)}
                            sx={{
                              padding: '18px 18px',
                              '&:hover': {
                                backgroundColor: '#FAF7FF',
                                borderRadius: '8px',
                              },
                            }}
                          >
                            <Link
                              href={products.link}
                              passHref
                              style={{ textDecoration: 'none' }}
                            >
                              <Box
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                {products.image && (
                                  <Box
                                    sx={{
                                      marginRight: '16px',
                                      marginTop: '5px',
                                    }}
                                  >
                                    <Image
                                      src={products.image}
                                      alt={products.title}
                                      width={36}
                                      height={36}
                                    />
                                  </Box>
                                )}
                                <Box sx={{ flexGrow: 1 }}>
                                  <Typography variant="body1">
                                    {products.title}
                                  </Typography>
                                  <Typography variant="body2">
                                    {products.description}
                                  </Typography>
                                </Box>
                              </Box>
                            </Link>
                          </MenuItem>
                        </Box>
                      ))}
                    </Menu>
                  </React.Fragment>
                ))}
              </Box>

              <Box sx={{ marginLeft: 'auto' }}>
                <CustomLink
                  title="Sign in"
                  link="https://app-dev.identitygram.co.uk/auth/login"
                  color="#645CAA"
                  bgColor="transparent"
                />
              </Box>
              <Box sx={{ marginLeft: '15px' }}>
                <CustomLink
                  title="Watch a Demo"
                  link="/watch-a-demo"
                />
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
