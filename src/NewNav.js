import { Box, Button, IconButton, Typography } from '@mui/material';
import densityLogo from './components/Union.svg';
import EastIcon from '@mui/icons-material/East';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import React from 'react';
export default function NewNav() {
  return (
    <>
      <Box
        sx={{
          margin: 'auto',
          width: '100%',
          justifyContent:'center',
          backgroundColor: '#1f1f24',

          top: '0',
          left: '0',
          zIndex: 1000,
        }}
      >
        <Box
          sx={{
            width: '95%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <figure
            style={{
              marginTop:100,
               display:'flex',
              justifyContent:'center',
              width: '20%',
              height: 'auto',
            }}
          >
            <img src={densityLogo} alt="navbar logo" />
          </figure>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '0',
              gap: '33px',
              '& .MuiTypography-root': {
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '18px',
                textAlign: 'center',
                color: '#D8D8D8',
                '&:hover': {
                  cursor: 'pointer',
                  color: '#E2FF6F',
                },
              },
            }}
          >

            <Typography
              sx={{
                '& .blog-link': {
                  textDecoration: 'none',
                  color: 'inherit',
                },
                '& .blog-link:active': {
                  color: 'inherit',
                },
                '& .blog-link:focus': {
                  color: 'inherit',
                },
                '& .blog-link:hover': {
                  color: 'inherit',
                },
              }}
            >
              <a
                href="https://blogs.density.exchange/"
                target="_blank"
                rel="noreferrer"
                className="blog-link"
              >
                Blogs
              </a>
            </Typography>

            <Typography>Community</Typography>
            <Typography>FAQs</Typography>
              <Typography>About Us</Typography>
            <Typography>Support</Typography>
          </Box>

          <Box
            sx={{
              width: '329.93px',
              height: '54px',
              display: 'flex',
              alignItems: 'center',
              // gap: '40px',
              justifyContent: 'space-between',
            }}
          >
            {' '}
            <a
              href="https://app.density.exchange/"
              style={{ textDecoration: 'none' ,marginTop:38}}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                sx={{
                  marginTop:20,
                  width: '160.93px',
                  height: '54px',
                  background: '#E2FF6F',
                  color: '#000000',
                  lineHeight: '18px',
                  borderRadius: '2px',
                  '&:hover': {
                    background: '#E2FF6F',
                    color: '#000000',
                  },
                  fontWeight: '700',
                  fontSize: '16px',
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                TRADE NOW
                <EastIcon color="#1f1f24" />
              </Button>
            </a>
            <IconButton
              sx={{
                marginTop:25,
                width: '129px',
                height: '54px',
                display: 'flex',
                gap: '15px',
                background:
                  'linear-gradient(180deg, #6E762B 0%, rgba(110, 118, 43, 0) 100%)',
                color: '#000000',
                lineHeight: '18px',
                borderRadius: '2px',
              }}
            >
              <AndroidIcon sx={{ color: 'white' }} />
              <AppleIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );}
