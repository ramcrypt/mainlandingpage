import { Box, Button,IconButton, Typography } from '@mui/material';
import FooterIcon from './components/denlo.svg';
import React from 'react';
import EastIcon from '@mui/icons-material/East';
import footbo from "./components/footbo.svg";
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
export default function Navm() {
  return (
    <>

      <Box  p="28px" backgroundColor="#000000">
        <Box
          width="95%"
          margin="auto"
          display="flex"
          justifyContent="space-between"
        >
          {/* <Box width="clamp(20%, 30%, 70%)"> */}
          <Box
            sx={{
              pt:2.7,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '18px',
            }}
          >
            <figure>
              <img src={FooterIcon} alt="icon for footer"  style={{paddingBottom:0}}/>
            </figure>

          </Box>
          {/* </Box> */}

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '0',
              gap: '33px',
              '& .MuiTypography-root': {
                color: '#D8D8D8',
                '&:hover': {
                  color: '#E2FF6F',
                  cursor: 'pointer',
                },
              },
              '& .MuiTypography-root:first-of-type': {
                     color: '#E2FF6F',
    },
            }}
          >
            <Typography sx={{}}>Home</Typography>
            <Typography>About Us</Typography>
            <Typography>Community</Typography>
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
                Blog
              </a>
            </Typography>
            <Typography>FAQs</Typography>
            <Typography>Support</Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
               flexDirection: 'row',
             justifyContent: 'center',
             alignItems: 'center',
             padding: '10px',
             gap: '10px',

            }}
          >
          <div style={{display:'flex',flexDirection:'row'}}>
          <Button
            sx={{

              color: "#000000",
              display: "flex",
              fontFamily: "DM Sans",
              fontStyle: "normal",
              fontWeight: 700,
              mr:6,
              mt:0.2,
              fontSize: "clamp(1px, 1vw + 1vh, 24px)",
             lineHeight: "clamp(12px, 18px, 24px)",
              padding: "12px 24px",

              "&:hover": {
                background: "#E2FF6F"
              },
              height: 43,
              background: "#E2FF6F"
            }}
            href="https://app.density.exchange/"
          >
            Trade Now
              <EastIcon color="#1f1f24" />
          </Button>
          <IconButton
            sx={{

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
</div>
          </Box>
        </Box>

      </Box>
    </>
  );
}
