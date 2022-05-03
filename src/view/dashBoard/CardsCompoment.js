import * as React from 'react'

import Box from '@mui/material/Box'

import { connect } from 'react-redux'
import { Card, Grid, Divider } from '@mui/material'
import CardHeader from '@mui/material/CardHeader'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import CardContent from '@mui/material/CardContent'
import { styled, alpha } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol'

import VisibilityIcon from '@mui/icons-material/Visibility'

const cardData = [
  { name: 'One', id: 1, value: '4583', amount: 567, init: 0, limit: 3000 },
  { name: 'Two', id: 2, value: '2477', amount: 2152, init: 0, limit: 3000 },
]

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#655093' : '#308fe8',
  },
}))

const CardMenu = styled((props) => (
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

function CardsCompoment() {
  const [action, setAction] = React.useState(null)
  const openCardMenu = Boolean(action)

  const handleCloseCardMenu = () => {
    setAction(null)
  }

  return (
    <Box mt={10}>
      <Card sx={{ width: '500px', height: '240px', borderRadius: '15px' }}>
        <CardHeader
          titleTypographyProps={{ fontWeight: '600' }}
          action={
            <IconButton
              id="card-customized-button"
              aria-controls={open ? 'card-customized-menu' : undefined}
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
          title="Cards"
        />
        <CardMenu
          id="card-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'card-customized-button',
          }}
          anchorEl={action}
          open={openCardMenu}
          onClose={handleCloseCardMenu}
        >
          <MenuItem onClick={handleCloseCardMenu} disableRipple>
            <Typography sx={{ marginLeft: '5px' }}>Add Card</Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseCardMenu} disableRipple>
            <Typography sx={{ marginLeft: '5px' }}>Create Card</Typography>
          </MenuItem>
        </CardMenu>
        <CardContent sx={{ paddingTop: '0px' }}>
          <Box width="100%" mt={5}>
            {cardData.map((data, index) => {
              return (
                <>
                  <Box width="100%" mb={2} key={data.id}>
                    <Grid
                      mb={2}
                      mt={2}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      flexWrap="nowrap"
                      container
                    >
                      <Grid item>
                        <Typography display="flex" alignItems="center">
                          {`${data.name} - ${data.value}`}
                        </Typography>
                      </Grid>
                      <Grid display="flex" item>
                        <VisibilityIcon
                        // sx={{ color: '#907ad6', width: '45px', height: '45px' }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid sx={{ position: 'relative' }} xs={12} item>
                        <BorderLinearProgress
                          variant="determinate"
                          value={(data.amount / data.limit) * 100}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      mb={2}
                      mt={2}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      flexWrap="nowrap"
                      container
                      sx={{ position: 'relative' }}
                    >
                      <Grid item>
                        <Typography display="flex" alignItems="center">
                          {data.init}
                          <EuroSymbolIcon
                            sx={{
                              width: '15px',
                              height: '15px',
                            }}
                          />
                        </Typography>
                      </Grid>
                      <Grid display="flex" alignItems="center" item>
                        {data.limit}
                        <EuroSymbolIcon
                          sx={{
                            width: '15px',
                            height: '15px',
                          }}
                        />
                      </Grid>
                      <Typography
                        display="flex"
                        alignItems="center"
                        sx={{
                          fontSize: '10px',
                          position: 'absolute',
                          left: `${(data.amount / data.limit) * 100}%`,
                        }}
                      >
                        {data.amount}
                        <EuroSymbolIcon
                          sx={{
                            width: '10px',
                            height: '10px',
                          }}
                        />
                      </Typography>
                    </Grid>
                  </Box>
                  {cardData.length - 1 !== index && (
                    <Divider sx={{ marginBottom: '10px' }} width="100%" />
                  )}
                </>
              )
            })}
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

const mapStateToProps = () => ({})

CardsCompoment.propTypes = {}
CardsCompoment.defaultProps = {}
export default connect(mapStateToProps, {})(CardsCompoment)
