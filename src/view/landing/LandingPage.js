import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

import background from '../../assets/svg/background.svg'
import bitcoin from '../../assets/svg/bitcoin.svg'
import bitcoinLogoBg from '../../assets/svg/bitcoinLogoBg.svg'

import instagram from '../../assets/svg/instagram.svg'
import facebook from '../../assets/svg/facebook.svg'
import twitter from '../../assets/svg/twitter.svg'
import stepper from '../../assets/svg/stepper.svg'
import button from '../../assets/svg/button.svg'
import line from '../../assets/svg/line.svg'
import footorbg from '../../assets/svg/footorbg.svg'
import footerConnectionImg from '../../assets/svg/footerConnectionImg.svg'

import globe from '../../assets/svg/globe.svg'
import AppBar from '../navBar/AppBar'
import box from '../../assets/svg/box.svg'

// import PropTypes from "prop-types";

const LandingPage = () => {
  return (
    <Box
      style={{
        // width: '2222px',
        // height: '965',
        backgroundImage: `url(${background})`,

        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }}
      width="100%"
    >
      <AppBar />
      <Box
        sx={{
          padding: '30px 0px 0px 0px',
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: { lg: 'row', xl: 'row', md: 'column' },
        }}
        height="64vh"
      >
        <Box>
          <Grid
            display="flex"
            justifyContent="center"
            flexDirection="column"
            container
            spacing={80}
          >
            <Grid
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              item
            >
              <Typography sx={{ fontSize: '14px', inlineSize: 'max-content' }}>
                PK194-ABI
              </Typography>
              <Typography sx={{ fontSize: '14px', inlineSize: 'max-content' }}>
                San Francisco
              </Typography>
              <img style={{ width: '24px', height: '24px' }} src={box} />
            </Grid>
            <Grid
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              item
            >
              <img style={{ width: '4px', height: '148px' }} src={stepper} />
            </Grid>
          </Grid>
        </Box>
        <Box style={{ marginTop: '50px', marginRight: '-168px' }}>
          <Grid display="flex" flexDirection="column" container>
            <Grid item>
              <Typography
                sx={{
                  fontSize: '49px',
                  fontWeight: 900,
                  inlineSize: 'max-content',
                }}
              >
                MERKLABS BLOCKCHAIN
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  fontSize: '49px',
                  fontWeight: 900,
                  inlineSize: 'max-content',
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'nowrap',
                }}
              >
                DEVELOPMENT AND
                <img
                  style={{ width: '46px', height: '46px', marginLeft: '22px' }}
                  src={box}
                />
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  fontSize: '49px',
                  fontWeight: 900,
                  inlineSize: 'max-content',
                }}
              >
                SECURITY SOLUTIONS
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ fontWeight: 900 }}>
                We provide blockchain development services and also assure
                <br /> you comprehensive security in blockchain development
              </Typography>
            </Grid>
            <Grid sx={{ mt: 20 }} item>
              <button
                style={{
                  color: 'rgba(255, 255, 255, 0)',
                  background: 'rgba(255, 255, 255, 0)',
                  border: 'none',
                  display: 'inline-flex',
                  position: 'relative',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img src={button} />
                <Typography sx={{ position: 'absolute' }}>
                  Explore More
                </Typography>
              </button>
            </Grid>
          </Grid>
        </Box>
        <Box
          style={{
            backgroundImage: `url(${bitcoinLogoBg})`,
            backgroundSize: '788px 738px',
            width: '788px',
            height: '738px',
            position: 'relative',
            marginTop: '-55px',
          }}
        >
          <Box style={{ position: 'absolute', right: '140px', top: '122px' }}>
            <Grid
              // style={{ position: 'absolute', right: '150px', top: '254px' }}
              display="flex"
              justifyContent="center"
              container
            >
              <Grid
                display="flex"
                justifyContent="center"
                alignItems="center"
                style={{
                  backgroundImage: `url(${globe})`,
                  backgroundSize: '348.05px 348.05px',
                  width: '348.05px',
                  height: '348.05px',
                }}
                item
              >
                {/* <img
                style={{ width: '348.05px', height: '348.05px' }}
                src={globe}
              /> */}
                <img
                  style={{ width: '106.28px', height: '141.54px' }}
                  src={bitcoin}
                />
              </Grid>
            </Grid>
          </Box>
          <Box style={{ top: '200px', position: 'absolute', right: '35px' }}>
            <Grid
              display="flex"
              justifyContent="center"
              flexDirection="column"
              spacing={16}
              alignItems="center"
              container
            >
              <Grid
                // display="flex"
                // justifyContent="center"
                // flexDirection="column"
                // alignItems="center"
                item
              >
                <img style={{ width: '32px', height: '32px' }} src={facebook} />
              </Grid>
              <Grid item>
                <img
                  style={{ width: '32px', height: '32px' }}
                  src={instagram}
                />
              </Grid>
              <Grid item>
                <img style={{ width: '32px', height: '32px' }} src={twitter} />
              </Grid>
              <Grid item>
                <img
                  style={{
                    width: '4px',
                    height: '142px',
                    // border: '2px solid #FFFFFF',
                    // transform: 'rotate(90deg)',
                  }}
                  src={line}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box
        width="100%"
        height="231.28px"
        sx={{
          backgroundImage: `url(${footorbg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          backgroundPosition: 'bottom',
        }}
      >
        <img
          style={{
            margin: 'auto',
            position: 'absolute',
            left: '0',
            right: '0',
          }}
          src={footerConnectionImg}
        />
      </Box>
    </Box>
  )
}

LandingPage.propTypes = {}
LandingPage.defaultProps = {}
export default LandingPage
