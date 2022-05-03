import { Box } from '@mui/material'
import React from 'react'
import SideBar from '../sideBar/SideBar'
import AllCashComponent from './AllCashCompoment'
import CardsCompoment from './CardsCompoment'
import InvoicesCompoment from './InvoicesCompoment'
import TransfersCompoment from './TransfersCompoment'

import AppBar from '../navBar/AppBar'

// import PropTypes from "prop-types";

const LandingPage = () => {
  return (
    <Box
      style={{
        // width: '2222px',
        // height: '965',
        backgroundColor: '#efedf2',

        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }}
      width="100%"
    >
      <AppBar />
      <Box
        sx={{
          padding: '15px 10px 15px 10px',
          display: 'flex',

          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <SideBar />
        <Box>
          <AllCashComponent />
          <CardsCompoment />
        </Box>
        <Box>
          <TransfersCompoment />
          <InvoicesCompoment />
        </Box>
      </Box>
    </Box>
  )
}

LandingPage.propTypes = {}
LandingPage.defaultProps = {}
export default LandingPage
