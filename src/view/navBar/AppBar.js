import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import SearchIcon from '@mui/icons-material/Search'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import LogoutIcon from '@mui/icons-material/Logout'
import SettingsIcon from '@mui/icons-material/Settings'
import logo from '../../assets/images/logo.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { styled, alpha } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import profileLogo from '../../assets/images/profileLogo.png'

import InputAdornment from '@mui/material/InputAdornment'

import { connect } from 'react-redux'
import Grid from '@mui/material/Grid'

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: '15px',
    marginTop: theme.spacing(1),
    minWidth: 180,
    backgroundColor: '#faf8fe',
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}))

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{
          boxShadow:
            '0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 10px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%)',
          backgroundColor: '#ffffff',
          borderRadius: '0px 0px 25px 25px',
          padding: '0px 30px',
        }}
        color="background"
        position="static"
      >
        <Toolbar style={{ margin: '5px 0px' }}>
          <Grid container>
            <Grid
              item
              container
              spacing={14}
              xs={8}
              sx={{
                alignItems: 'center',
                flexGrow: 1,
              }}
            >
              <Grid item md={3}>
                <Grid
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  container
                >
                  <Grid display="flex" justifyContent="flex-start" xs={6} item>
                    <Typography sx={{ fontWeight: '800' }} variant="h4">
                      Logo
                    </Typography>
                  </Grid>
                  <Grid display="flex" justifyContent="flex-end" xs={6} item>
                    <img
                      style={{
                        backgroundColor: 'rgb(144, 122, 214)',
                        borderRadius: '15px',
                        padding: '7px',
                        width: '50px',
                        height: '50px',
                      }}
                      src={logo}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={8}>
                <TextField
                  id="outlined-search"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  color="secondary"
                  placeholder="Search"
                  type="search"
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              spacing={5}
              xs={4}
              sx={{
                alignItems: 'center',
                flexGrow: 1,
              }}
            >
              <Grid item>
                <img
                  style={{
                    width: '50px',
                    height: '50px',
                    border: '2px solid',
                    borderRadius: '5px',
                    padding: '8px',
                    borderColor: '#907ad6',
                  }}
                  src={profileLogo}
                ></img>
              </Grid>
              <Grid item>
                <Button
                  id="demo-customized-button"
                  aria-controls={open ? 'demo-customized-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  disableElevation
                  onClick={handleClick}
                  sx={{ fontWeight: 600, fontSize: '18px' }}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Quantum Dynamics
                </Button>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <SettingsIcon sx={{ color: '#907ad6 !important' }} />
                    <Typography sx={{ marginLeft: '5px' }}>Settings</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <LogoutIcon sx={{ color: '#907ad6 !important' }} />
                    <Typography sx={{ marginLeft: '5px' }}>LogOut</Typography>
                  </MenuItem>
                </StyledMenu>
              </Grid>
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
