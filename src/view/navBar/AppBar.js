import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import LinkedInIcon from '../../assets/svg/linkedin.svg'
import InstagramIcon from '../../assets/svg/instagram.svg'
import TwitterIcon from '../../assets/svg/twitter.svg'

import { styled } from '@mui/material/styles'

import FacebookIcon from '../../assets/svg/facebook.svg'
import headerbg from '../../assets/svg/headerbg.svg'

import InfoIcon from '@mui/icons-material/Info'
import { connect } from 'react-redux'
import Grid from '@mui/material/Grid'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import { Button, Divider } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import List from '@mui/material/List'
import LiveHelpIcon from '@mui/icons-material/LiveHelp'
// import useMediaQuery from '@mui/material/useMediaQuery'
import { useHistory } from 'react-router-dom'
import ListItem from '@mui/material/ListItem'
import Drawer from '@mui/material/Drawer'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

function NavBar() {
  const [state, setState] = React.useState({
    left: false,
  })
  let history = useHistory()

  // const windowWidth = useMediaQuery('(min-width:600px)')

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }))

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Grid container>
        <Grid
          justifyContent={'center'}
          alignItems={'center'}
          sx={{ display: 'flex' }}
          xs={7}
          item
        >
          <Typography
            sx={{
              fontFamily: "'Poppins'",
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '37px',
            }}
          >
            Merka
          </Typography>
        </Grid>
        <Grid style={{ position: 'absolute', right: '0px' }} xs={5} item>
          <DrawerHeader>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </DrawerHeader>
        </Grid>
      </Grid>
      <Divider />
      <List>
        <ListItem style={{ cursor: 'pointer' }}>
          <ListItemIcon>
            <HomeIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            onClick={() => {
              history.push('/')
            }}
            primary={'Home'}
          />
        </ListItem>

        <ListItem style={{ cursor: 'pointer' }}>
          <ListItemIcon>
            <InfoIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            onClick={() => {
              history.push('/')
            }}
            primary={'Projects'}
          />
        </ListItem>
        <ListItem style={{ cursor: 'pointer' }}>
          <ListItemIcon>
            <LiveHelpIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            onClick={() => {
              history.push('/')
            }}
            primary={'Service'}
          />
        </ListItem>
        <ListItem style={{ cursor: 'pointer' }}>
          <ListItemIcon>
            <LiveHelpIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            onClick={() => {
              history.push('/')
            }}
            primary={'Blog'}
          />
        </ListItem>
      </List>
      <Divider />
      <Box
        style={{
          width: '100%',
          padding: '5px 10px',
          position: 'absolute',
          bottom: '0px',
        }}
        sx={{ display: { xs: 'flex', md: 'none' } }}
      >
        <Grid
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'nowrap',
          }}
          container
        >
          <Grid spacing={1} xs={6} alignItems="center" container noWrap item>
            <Grid style={{ display: 'flex', alignItems: 'center' }} item>
              <AlternateEmailIcon sx={{ width: '10px' }} />
            </Grid>
            <Grid item>
              <Typography sx={{ color: '#3C424F', fontSize: '10px' }}>
                info@email.com
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={'flex-end'}
            alignItems="center"
            spacing={6}
            xs={6}
            noWrap
            item
          >
            <Grid item>
              <img
                src={LinkedInIcon}
                style={{ display: 'flex', alignItems: 'center' }}
                color="primary"
              />
            </Grid>
            <Grid item>
              <img
                src={InstagramIcon}
                style={{ display: 'flex', alignItems: 'center' }}
                color="primary"
              />
            </Grid>
            <Grid item>
              <img
                src={TwitterIcon}
                style={{ display: 'flex', alignItems: 'center' }}
                color="primary"
              />
            </Grid>
            <Grid item>
              <img
                src={FacebookIcon}
                style={{ display: 'flex', alignItems: 'center' }}
                color="primary"
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{
          boxShadow:
            '0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 10px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%)',
          backgroundColor: 'rgb(255 255 255 / 0%)',
          padding: '0px 30px',
          backgroundImage: `url(${headerbg})`,
          backgroundSize: '100%',
        }}
        color="background"
        position="static"
      >
        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          {list('left')}
        </Drawer>

        <Toolbar style={{ margin: '5px 0px' }}>
          <Grid sx={{ mt: 15 }} container>
            <Grid item xs={12} sx={{ display: { xs: 'flex', md: 'none' } }}>
              <div>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={
                    state.left
                      ? toggleDrawer('left', false)
                      : toggleDrawer('left', true)
                  }
                >
                  <MenuIcon />
                </IconButton>
              </div>
            </Grid>
            <Grid
              item
              container
              md={12}
              sx={{
                alignItems: 'center',
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <Grid md={8} style={{ position: 'absolute', left: '152px' }}>
                <Typography
                  sx={{
                    fontFamily: "'Poppins'",
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '37px',
                  }}
                >
                  Merka
                </Typography>
              </Grid>
              <div style={{ position: 'relative', margin: 'auto' }}>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    flexDirection: 'row',
                    alignContent: 'center',
                    justifyContent: 'flex-start',
                    textAlign: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    onClick={() => {
                      history.push('/')
                    }}
                    sx={{
                      my: 2,
                      color: '#ffffff',
                      display: 'block',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      fontSize: '19px',
                      textTransform: 'none',
                    }}
                  >
                    Home
                  </Button>
                  <Button
                    sx={{
                      my: 2,
                      color: '#ffffff',
                      display: 'block',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      fontSize: '19px',
                      textTransform: 'none',
                    }}
                  >
                    Projects
                  </Button>
                  <Button
                    sx={{
                      my: 2,
                      color: '#ffffff',
                      display: 'block',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      fontSize: '19px',
                      textTransform: 'none',
                    }}
                  >
                    Service
                  </Button>
                  <Button
                    sx={{
                      my: 2,
                      color: '#ffffff',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      fontSize: '19px',
                      display: 'block',
                      textTransform: 'none',
                    }}
                  >
                    Blog
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

const mapStateToProps = () => ({})

NavBar.propTypes = {}
NavBar.defaultProps = {}
export default connect(mapStateToProps, {})(NavBar)
