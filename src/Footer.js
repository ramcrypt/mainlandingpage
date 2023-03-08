import { Box, IconButton, Typography } from '@mui/material';
import FooterIcon from './components/denlo.svg';
import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import footbo from "./components/footbo.svg";
export default function Footer() {
  return (
    <>

      <Box mt='10%' p="40px" backgroundColor="#000000">
        <Box
          width="95%"
          margin="auto"
          display="flex"
          justifyContent="space-between"
        >
          {/* <Box width="clamp(20%, 30%, 70%)"> */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '18px',
            }}
          >
            <figure>
              <img src={FooterIcon} alt="icon for footer"  style={{paddingBottom:0}}/>
            </figure>
            <Box
              sx={{
                '& .MuiTypography-root': {
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '30px',
                  color: '#E2FF6F',
                },
              }}
            >
              <Typography>+91 9035092634</Typography>
              <Typography>hello@density.exchange</Typography>
            </Box>
          </Box>
          {/* </Box> */}

          <Box
            sx={{
                  gap: '1.2vw',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '& .MuiTypography-root': {
                color: '#E2FF6F',
                '&:hover': {
                  color: '#E2FF6F',
                  cursor: 'pointer',
                },
              },
            }}
          >
            <Typography sx={{fontSize:'1vw'}}>Home</Typography>
            <Typography sx={{
              fontSize:'1vw',
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
            }}>  <a
                href="https://shorthaired-twist-38b.notion.site/T-Cs-for-the-Density-Futures-trading-Competition-0704be0da1d446f2a34cdc83fea81468"
                target="_blank"
                rel="noreferrer"
                className="blog-link"
              >
                Community
              </a></Typography>
            <Typography sx={{fontSize:'1vw'}}>About Us</Typography>
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
                fontSize:'1vw'
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
          </Box>

          <Box
            sx={{
              width: 'clamp(20%, 25%, 30%)',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <IconButton>
              <FacebookIcon
                sx={{ maxWidth: '100%', height: 'auto', color: '#E2FF6F' }}
              />
            </IconButton>
            <IconButton>
              <TwitterIcon sx={{ color: '#E2FF6F' }} />
            </IconButton>
            <IconButton>
              <InstagramIcon sx={{ color: '#E2FF6F' }} />
            </IconButton>
            <IconButton>
              <LinkedInIcon sx={{ color: '#E2FF6F' }} />
            </IconButton>
            <a
              href="https://api.whatsapp.com/send?phone=919035092634&text=Hi!%20I%27m%20interested%20in%20Density"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton>
                <WhatsAppIcon sx={{ color: '#E2FF6F' }} />
              </IconButton>
            </a>
            <a
              href="https://t.me/+cmwN5TlBccs4YWU1"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton varient="filled">
                <TelegramIcon sx={{ color: '#E2FF6F' }} />
              </IconButton>
            </a>
          </Box>
        </Box>
        <Box style={{width:'140%',marginLeft:'2%'}}>  <figure>
            <img src={footbo} alt="icon for footer"  style={{paddingBottom:0,width:'90vw'}}/>
          </figure></Box>
      </Box>
    </>
  );
}
