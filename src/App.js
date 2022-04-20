import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { SnackbarProvider } from 'notistack'
import { get } from 'lodash'

import LandingPage from './view/landing/LandingPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={5}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        preventDuplicate
      >
        <>
          <Switch>
            <Route
              exact
              from="/"
              render={(props) => <LandingPage {...props} />}
            />
          </Switch>
        </>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

const mapStateToProps = (state) => ({
  isLoggedIn: get(state, 'userData.isLoggedIn'),
})

App.propTypes = {}
App.defaultProps = {}

export default connect(mapStateToProps, {})(App)
