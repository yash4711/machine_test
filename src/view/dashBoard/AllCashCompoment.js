import * as React from 'react'

import Box from '@mui/material/Box'

import { connect } from 'react-redux'
import { Card, Divider, Grid } from '@mui/material'
import CardHeader from '@mui/material/CardHeader'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { styled, alpha } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol'

const cashData = [
  { name: 'Main', id: 1, value: '2345 34', amount: 139 },
  { name: 'Primary', id: 2, value: '9876 27', amount: 264 },
  { name: 'BNP', id: 3, value: '2345 34', amount: 139 },
]

const CashMenu = styled((props) => (
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
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
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

function AllCashComponent() {
  const [action, setAction] = React.useState(null)
  const openCashMenu = Boolean(action)

  const handleCloseCashMenu = () => {
    setAction(null)
  }
  return (
    <Box>
      <Card sx={{ width: '500px', height: '250px', borderRadius: '15px' }}>
        <CardHeader
          titleTypographyProps={{ fontWeight: '600' }}
          action={
            <IconButton
              id="cash-customized-button"
              aria-controls={open ? 'cash-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={(event) => {
                if (!action) {
                  setAction(event.currentTarget)
                } else {
                  setAction(null)
                }
              }}
              aria-label="settings"
            >
              {!action ? <MenuIcon /> : <CloseIcon />}
            </IconButton>
          }
          title="All Cash"
        />
        <CashMenu
          id="cash-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'cash-customized-button',
          }}
          anchorEl={action}
          open={openCashMenu}
          onClose={handleCloseCashMenu}
        >
          <MenuItem onClick={handleCloseCashMenu} disableRipple>
            <Typography sx={{ marginLeft: '5px' }}>Add Account</Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseCashMenu} disableRipple>
            <Typography sx={{ marginLeft: '5px' }}>Create Account</Typography>
          </MenuItem>
        </CashMenu>
        <CardContent sx={{ paddingTop: '0px' }}>
          <Grid container>
            <Grid xs={12} item>
              <Typography
                sx={{ fontWeight: '600' }}
                display="flex"
                alignItems="center"
                variant="h3"
              >
                972
                <EuroSymbolIcon
                  sx={{ color: '#655093', width: '45px', height: '45px' }}
                />
              </Typography>
            </Grid>
            <Box width="100%" mt={5}>
              {cashData.map((data, index) => {
                return (
                  <Box width="100%" key={data.id}>
                    <Grid
                      mb={2}
                      mt={2}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      flexWrap="nowrap"
                      container
                      xs={12}
                      item
                    >
                      <Grid item>
                        <Typography display="flex" alignItems="center">
                          {`${data.name} - ${data.value}`}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography display="flex" alignItems="center">
                          {data.amount}
                          <EuroSymbolIcon
                            sx={{
                              width: '20px',
                              height: '20px',
                            }}
                          />
                        </Typography>
                      </Grid>
                    </Grid>
                    {cashData.length - 1 !== index && <Divider width="100%" />}
                  </Box>
                )
              })}
            </Box>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}

const mapStateToProps = () => ({})

AllCashComponent.propTypes = {}
AllCashComponent.defaultProps = {}
export default connect(mapStateToProps, {})(AllCashComponent)
