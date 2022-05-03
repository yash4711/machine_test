import * as React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Quotes from '@mui/icons-material/Calculate'
import Expenses from '@mui/icons-material/AttachMoney'
import Invoices from '@mui/icons-material/Receipt'

import LensSharpIcon from '@mui/icons-material/LensSharp'
import LogoutIcon from '@mui/icons-material/Logout'
import SettingsIcon from '@mui/icons-material/Settings'
import Button from '@mui/material/Button'

import Annotate from '@mui/icons-material/Savings'
import Customers from '@mui/icons-material/Person'
import Home from '@mui/icons-material/Home'
import Bank from '@mui/icons-material/AccountBalance'
import UploadIcon from '../../assets/images/upload.png'
import Accouting from '@mui/icons-material/List'

import { connect } from 'react-redux'
import { Grid, Paper } from '@mui/material'

const menuList = [
  { labelKey: 'Home', icon: '', key: 'home' },
  { labelKey: 'Annotate', icon: '', key: 'annotate' },
  { labelKey: 'Customers', icon: '', key: 'customers' },
  { labelKey: 'Invoices', icon: '', key: 'invoices' },
  { labelKey: 'Expenses', icon: '', key: 'expenses' },
  { labelKey: 'Quotes', icon: '', key: 'quotes' },
  { labelKey: 'Bank', icon: '', key: 'bank' },
  { labelKey: 'Accouting', icon: '', key: 'accouting' },
]

function SideBar() {
  const [selected, setSelected] = React.useState('home')
  return (
    <Box>
      <Paper sx={{ width: '200px', height: '650px', borderRadius: '15px' }}>
        <Grid container>
          {menuList.map((item) => {
            return (
              <Grid
                display="flex"
                flexDirection="row"
                alignItems="center"
                key={item.key}
                onClick={() => {
                  setSelected(item.key)
                }}
                xs={12}
                sx={{
                  height: '45px',
                  padding: '10px',
                  borderTopLeftRadius: item.key === 'home' ? '15px' : '0px',
                  cursor: 'pointer',
                  borderTopRightRadius: item.key === 'home' ? '15px' : '0px',
                  backgroundColor: selected === item.key ? '#f6f3fe' : '',
                  transition: 'background 0.1s',
                  '&:hover': {
                    backgroundColor: '#f6f3fe',
                    borderTopLeftRadius: item.key === 'home' ? '15px' : '0px',
                    borderTopRightRadius: item.key === 'home' ? '15px' : '0px',
                  },
                }}
                item
              >
                {selected === item.key && (
                  <LensSharpIcon
                    style={{
                      width: '5px',
                      color: item.key === selected ? '#907ad6' : '#616368',
                      height: '5px',
                      visibility: 'visible',
                    }}
                  />
                )}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  {item.icon ? (
                    <img
                      style={{
                        position: 'absolute',
                        width: '20px',
                        height: '20px',
                        marginRight: '10px',
                        marginLeft: '15px',
                      }}
                      src={item.icon}
                    />
                  ) : (
                    (item.key === 'invoices' && (
                      <Invoices
                        style={{
                          position: 'absolute',
                          width: '25px',
                          color: item.key === selected ? '#907ad6' : '#616368',
                          height: '25px',
                          marginRight: '10px',
                          marginLeft: '15px',
                        }}
                      />
                    )) ||
                    (item.key === 'quotes' && (
                      <Quotes
                        style={{
                          position: 'absolute',
                          color: item.key === selected ? '#907ad6' : '#616368',
                          width: '25px',
                          height: '25px',
                          marginRight: '10px',
                          marginLeft: '15px',
                        }}
                      />
                    )) ||
                    (item.key === 'expenses' && (
                      <Expenses
                        style={{
                          position: 'absolute',
                          width: '25px',
                          color: item.key === selected ? '#907ad6' : '#616368',
                          height: '25px',
                          marginRight: '10px',
                          marginLeft: '15px',
                        }}
                      />
                    )) ||
                    (item.key === 'annotate' && (
                      <Annotate
                        style={{
                          position: 'absolute',
                          width: '25px',
                          height: '25px',
                          color: item.key === selected ? '#907ad6' : '#616368',
                          marginRight: '10px',
                          marginLeft: '15px',
                        }}
                      />
                    )) ||
                    (item.key === 'customers' && (
                      <Customers
                        style={{
                          position: 'absolute',
                          width: '25px',
                          color: item.key === selected ? '#907ad6' : '#616368',
                          height: '25px',
                          marginRight: '10px',
                          marginLeft: '15px',
                        }}
                      />
                    )) ||
                    (item.key === 'home' && (
                      <Home
                        style={{
                          position: 'absolute',
                          width: '25px',
                          color: item.key === selected ? '#907ad6' : '#616368',
                          height: '25px',
                          marginRight: '10px',
                          marginLeft: '15px',
                        }}
                      />
                    )) ||
                    (item.key === 'bank' && (
                      <Bank
                        style={{
                          position: 'absolute',
                          width: '25px',
                          height: '25px',
                          color: item.key === selected ? '#907ad6' : '#616368',
                          marginRight: '10px',
                          marginLeft: '15px',
                        }}
                      />
                    )) ||
                    (item.key === 'accouting' && (
                      <Accouting
                        style={{
                          position: 'absolute',
                          width: '25px',
                          color: item.key === selected ? '#907ad6' : '#616368',
                          height: '25px',
                          marginRight: '10px',
                          marginLeft: '15px',
                        }}
                      />
                    ))
                  )}
                  <Typography
                    sx={{
                      position: 'absolute',
                      marginLeft: '50px',
                      color: item.key === selected ? '#907ad6' : '#616368',
                    }}
                  >
                    {item.labelKey}
                  </Typography>
                </div>
              </Grid>
            )
          })}
        </Grid>
        <Box mt={25} display="flex" justifyContent="center" alignItems="center">
          <Paper
            htmlFor="file"
            elevation={2}
            sx={{
              maxWidth: '125px',
              padding: '20px',
              borderRadius: '15px',
              position: 'relative',
            }}
            width="125px"
            height="100px"
          >
            <input
              id="file"
              style={{
                position: 'absolute',
                width: '124px',
                borderRadius: '15px',
                opacity: '0',
                left: '0px',
                cursor: 'pointer',
                top: '0px',
                height: '110px',
              }}
              type="file"
            />
            <img src={UploadIcon} />
          </Paper>
        </Box>
        <Box mt={15}>
          <Grid container>
            <Grid ml={8} xs={12} item>
              <Button startIcon={<LogoutIcon />}>LogOut</Button>
            </Grid>
            <Grid ml={8} xs={12} item>
              <Button startIcon={<SettingsIcon />}>Settings</Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  )
}

const mapStateToProps = () => ({})

SideBar.propTypes = {}
SideBar.defaultProps = {}
export default connect(mapStateToProps, {})(SideBar)
