import { Box, Button,IconButton, Typography, Slide  } from '@mui/material';
import FooterIcon from './components/denlo.svg';
import React from 'react';
import { useMediaQuery } from '@mui/material';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import EastIcon from '@mui/icons-material/East';
import footbo from "./components/footbo.svg";
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
export default function Navm() {
  const containerRef = useRef(null);
  const [checked, setChecked] = useState(false);
  const isLarge = useMediaQuery('(min-width:924px)');
  return (
    <>

      <Box  p="28px" backgroundColor="#000000"
      sx={{
        '@media (max-width: 700px)': {
           pt:0,
           pr:0,
           pl:'1.75%',
            pb: '0px',

        }
    }}>
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
              gap: '18px','@media (max-width: 700px)': {
                pt:'3.5vw',
                pb:0.5,
                width:'35vw'
            }
            }}
          >
            <figure >
           <img src={FooterIcon} alt="icon for footer"  style={{paddingBottom:0,maxWidth:'100%',
           '@media (max-width: 700px)': {
             width:'50',
             height:"7vw"
         }}}/>
            </figure>

          </Box>
          {/* </Box> */}
   {isLarge?(
     <>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '0',
              gap: '1.6vw',
              '& .MuiTypography-root': {
                color: '#D8D8D8',
                '&:hover': {
                  color: '#E2FF6F',
                  cursor: 'pointer',
                },
              },
            /*  '& .MuiTypography-root:first-of-type': {
                     color: '#E2FF6F',
    },*/
            }}
          >


            <Typography sx={{
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
            }}>  <a
                href="https://shorthaired-twist-38b.notion.site/T-Cs-for-the-Density-Futures-trading-Competition-0704be0da1d446f2a34cdc83fea81468"
                target="_blank"
                rel="noreferrer"
                className="blog-link"
              >
                Community
              </a></Typography>
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
                },fontSize:'1vw'
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
            <Typography sx={{fontSize:'1vw'}}>FAQs</Typography>
              <Typography sx={{fontSize:'1vw'}}>About Us</Typography>
            <Typography sx={{fontSize:'1vw'}}>Support</Typography>
          </Box>

          <Box
            sx={{

              display: 'flex',
               flexDirection: 'row',
             justifyContent: 'center',
             alignItems: 'center',
             padding: '10px',
             gap: '20px',

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
              mr:'3vw',
              mt:0.2,
              fontSize: "1vw",
             lineHeight: "clamp(12px, 18px, 24px)",
              padding: "24px 36px",

              "&:hover": {
                background: "#E2FF6F"
              },
              height: 43,
              background: "#E2FF6F"
            }}
            href="https://app.density.exchange/"
          >
          <Typography sx={{fontWeight:'700'}}>  Trade Now </Typography>
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

</>
):(
  <>
              <IconButton onClick={() => setChecked(true)}   sx={{
                  width:'20vw',

                  '@media (max-width: 700px)': {
                    maxWidth:'60%'
                }
                }}>
                <MenuSharpIcon
                  sx={{
                    fontSize: '40px',
                    color: '#E2FF6F',

                    '@media (max-width: 700px)': {
                      maxWidth:'60%'
                  }
                  }}
                />
              </IconButton>

              {/* Modal */}
              <Slide
                direction="left"
                in={checked}
                container={containerRef.current}
                timeout={650}
              >
                <Box
                  position="fixed"
                  right="0"
                  bottom="0"
                  width="max(365px, 30%)"
                  height="100%"
                  backgroundColor="#ffffff"
                  zIndex='2000'
                >
                  <Box display="flex" justifyContent="flex-end">
                    <IconButton onClick={() => setChecked((prev) => !prev)}>
                      <CloseIcon
                        sx={{
                          color: '#E2FF6F',
                          fontSize: '30px',
                        }}
                      />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      inset:0,
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.5s ease 0s',
                      '& .MuiTypography-root': {
                        fontWeight: 500,
                        fontSize: '18px',
                        lineHeight: '30px',
                        color: '#000000',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '15px',
                      }}
                    >
                    <Button
                      sx={{

                        color: "#000000",
                        display: "flex",
                        fontFamily: "DM Sans",
                        fontStyle: "normal",
                        fontWeight: 700,
                         width:'100%',
                        mt:0.2,
                        fontSize: "1vw",
                       lineHeight: "clamp(12px, 18px, 24px)",
                        padding: "24px 36px",

                        "&:hover": {
                          background: "#E2FF6F"
                        },
                        height: 43,
                        background: "#E2FF6F"
                      }}
                      href="https://app.density.exchange/"
                    >
                    <Typography sx={{fontWeight:'700',ml:3}}>  Trade Now </Typography>
                        <EastIcon color="#1f1f24" />
                    </Button>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        margin: '15px',
                      }}
                    >
                    <Typography sx={{
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
                    }}>  <a
                        href="https://shorthaired-twist-38b.notion.site/T-Cs-for-the-Density-Futures-trading-Competition-0704be0da1d446f2a34cdc83fea81468"
                        target="_blank"
                        rel="noreferrer"
                        className="blog-link"
                      >
                        Community
                      </a></Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        margin: '15px',
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
                        },fontSize:'1vw'
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
                        display: 'flex',
                        justifyContent: 'flex-start',
                        margin: '15px',
                      }}
                    >
                      <Typography>FAQs</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        margin: '15px',
                      }}
                    >
                      <Typography>About Us</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        margin: '15px',
                      }}
                    >
                      <Typography>Support</Typography>
                    </Box>
                  </Box>
                </Box>
              </Slide>
            </>

)}
</Box>
      </Box>
    </>
  );
}
