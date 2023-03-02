import { Box, IconButton, Typography } from '@mui/material';
import FooterIcon from './components/denlo.svg';
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
      {/* <Box
        sx={{
          width: '100%',
          height: '306.31px',
          background: '#000000',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '18px',
            position: 'absolute',
            width: '288.85px',
            height: '121.61px',
            left: '114.86px',
            top: '77px',
            bottom: '107.7px',
            right: '1036.29px',
          }}
        >
          <figure>
            <img src={FooterIcon} alt="icon for footer" />
          </figure>
          <Box
            sx={{
              '& .MuiTypography-root': {
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '30px',
                color: '#FFFFFF',
              },
            }}
          >
            <Typography>+91 9035092634</Typography>
            <Typography>hello@density.exchange</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '40px',
            paddign: '0px',
            position: 'absolute',
            left: '530px',
            top: '84.99px',
            right: '473px',
            bottom: '203.32px',
            '& .MuiTypography-root': {
              color: '#FFFFFF',
            },
          }}
        >
          <Typography>Home</Typography>
          <Typography>About Us</Typography>
          <Typography>Competition</Typography>
          <Typography>Blogs</Typography>
        </Box>
      </Box> */}

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
              width: 'clamp(20%, 25%, 30%)',
              display: 'flex',
              justifyContent: 'space-between',
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
            <Typography>Home</Typography>
            <Typography>About Us</Typography>
            <Typography>Competition</Typography>
            <Typography>Blogs</Typography>
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
              <IconButton>
                <TelegramIcon sx={{ color: '#E2FF6F' }} />
              </IconButton>
            </a>
          </Box>
        </Box>
        <Box style={{width:'140%',marginLeft:'2%'}}>  <figure>
            <img src={footbo} alt="icon for footer"  style={{paddingBottom:0}}/>
          </figure></Box>
      </Box>
    </>
  );
}
