import * as React from 'react'

import Box from '@mui/material/Box'

import { connect } from 'react-redux'
import { Card, Grid, Button } from '@mui/material'
import CardHeader from '@mui/material/CardHeader'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
// import InputAdornment from '@mui/material/InputAdornment'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import Bank from '@mui/icons-material/AccountBalance'
import Select from '@mui/material/Select'
import CardContent from '@mui/material/CardContent'
import EnhancedTableHead from '../../helpers/Components/Table'
// import EuroSymbolIcon from '@mui/icons-material/EuroSymbol'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

const headCells = [
  {
    id: 'beneficiary',
    numeric: false,
    disablePadding: true,
    label: 'Beneficiary',
    align: 'left',
  },
  {
    id: 'account',
    numeric: false,
    disablePadding: false,
    label: 'Account',
    align: 'center',
  },
  {
    id: 'date',
    numeric: false,
    disablePadding: false,
    label: 'Date',
    align: 'center',
  },
  {
    id: 'nextTransfer',
    numeric: false,
    disablePadding: false,
    label: 'Next Transfer',
    align: 'center',
  },
  {
    id: 'amount',
    numeric: true,
    disablePadding: false,
    label: 'Amount',
    align: 'right',
  },
]
const headCells1 = [
  {
    id: 'beneficiary',
    numeric: false,
    disablePadding: true,
    label: 'Beneficiary',
    align: 'left',
  },
  {
    id: 'account',
    numeric: false,
    disablePadding: false,
    label: 'Account',
    align: 'center',
  },
  {
    id: 'nextTransfer',
    numeric: false,
    disablePadding: false,
    label: 'Next Transfer',
    align: 'center',
  },
  {
    id: 'amount',
    numeric: true,
    disablePadding: false,
    label: 'Amount',
    align: 'right',
  },
]

function createData(beneficiary, account, date, nextTransfer, amount, id) {
  return {
    beneficiary,
    account,
    date,
    nextTransfer,
    amount,
    id,
  }
}

function createData1(beneficiary, account, nextTransfer, amount, id) {
  return {
    beneficiary,
    account,

    nextTransfer,
    amount,
    id,
  }
}

const rows1 = [
  createData1(
    'Scott Roberts',
    'BNP-3322 95',

    '14 March 2022',
    17000,
    'FRO6 0000 0000 0000 0950 000'
  ),

  createData1(
    'Christopher Garcia',
    'Bansira-Main-3322 95',

    '30 March 2022',
    12000,
    'FRO6 0000 0000 0000 0950 000'
  ),

  createData1(
    'Anthony Carter',
    'Bansira-3322',

    '13 March 2022',
    25000,
    'FRO6 0000 0000 0000 0950 000'
  ),
  createData1(
    'Deborah Gray',
    'Bansira-Primary-3322 95',

    '3 March 2022',
    10000,
    'FRO6 0000 0000 0000 0950 000'
  ),
  createData1(
    'Jennifer Hobbs',
    'Bansira-Main-3322 95',

    '10 March 2022',
    8000,
    'FRO6 0000 0000 0000 0950 000'
  ),
]

const rows = [
  createData(
    'Deborah Gray',
    'Bansira-Primary-3322 95',
    '3 Feb 2022',
    '3 March 2022',
    10000,
    'FRO6 0000 0000 0000 0950 000'
  ),
  createData(
    'Christopher Garcia',
    'Bansira-Main-3322 95',
    '25 Feb 2022',
    '30 March 2022',
    12000,
    'FRO6 0000 0000 0000 0950 000'
  ),
  createData(
    'Scott Roberts',
    'BNP-3322 95',
    '5 Feb 2022',
    '14 March 2022',
    17000,
    'FRO6 0000 0000 0000 0950 000'
  ),
  createData(
    'Anthony Carter',
    'Bansira-3322',
    '3 Feb 2022',
    '13 March 2022',
    25000,
    'FRO6 0000 0000 0000 0950 000'
  ),
  createData(
    'Jennifer Hobbs',
    'Bansira-Main-3322 95',
    '7 Feb 2022',
    '10 March 2022',
    8000,
    'FRO6 0000 0000 0000 0950 000'
  ),
]

function TransfersCompoment() {
  const [bankSelected, setBankSelected] = React.useState(10)
  const [hours, setHours] = React.useState(24)
  const [listName, setListName] = React.useState('Executed')

  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('amount  ')
  // const [selected, setSelected] = React.useState([])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  // const handleClick = (event, name) => {
  //   const selectedIndex = selected.indexOf(name)
  //   let newSelected = []

  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, name)
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1))
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1))
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1)
  //     )
  //   }

  //   setSelected(newSelected)
  // }

  // function descendingComparator(a, b, orderBy) {
  //   if (b[orderBy] < a[orderBy]) {
  //     return -1
  //   }
  //   if (b[orderBy] > a[orderBy]) {
  //     return 1
  //   }
  //   return 0
  // }

  // function getComparator(order, orderBy) {
  //   return order === 'desc'
  //     ? (a, b) => descendingComparator(a, b, orderBy)
  //     : (a, b) => -descendingComparator(a, b, orderBy)
  // }
  // console.log(rows)

  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  // function stableSort(array, comparator) {
  //   const stabilizedThis = array.map((el, index) => [el, index])
  //   stabilizedThis.sort((a, b) => {
  //     const order = comparator(a[0], b[0])
  //     if (order !== 0) {
  //       return order
  //     }
  //     return a[1] - b[1]
  //   })
  //   return stabilizedThis.map((el) => el[0])
  // }

  return (
    <Box>
      <Card sx={{ width: '750px', height: '400px', borderRadius: '15px' }}>
        <CardHeader
          titleTypographyProps={{ fontWeight: '600' }}
          action={
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              flexWrap="nowrap"
            >
              <Select
                id="bank"
                value={bankSelected}
                onChange={(e) => {
                  setBankSelected(e.target.value)
                }}
                sx={{
                  borderRadius: '5px',
                  width: '270px',
                  height: '30px',
                }}
              >
                <MenuItem value={10}>
                  <Bank
                    sx={{
                      width: '15px',
                      height: '15px',
                      marginRight: '5px',
                      marginBottom: '-1px',
                    }}
                  />
                  Bansira - Primary - 3322 95
                </MenuItem>
                <MenuItem value={20}>
                  <Bank
                    sx={{
                      width: '15px',
                      height: '15px',
                      marginRight: '5px',
                      marginBottom: '-1px',
                    }}
                  />
                  Bansira -Main - 4456 56
                </MenuItem>
                <MenuItem value={30}>
                  <Bank
                    sx={{
                      width: '15px',
                      height: '15px',
                      marginRight: '5px',
                      marginBottom: '-1px',
                    }}
                  />
                  BNP - 4456 95
                </MenuItem>
              </Select>
              <Select
                id="hours"
                value={hours}
                onChange={(e) => {
                  setHours(e.target.value)
                }}
                sx={{
                  borderRadius: '5px',
                  width: '100px',
                  marginLeft: '10px',
                  height: '30px',
                }}
              >
                {[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                  19, 20, 21, 22, 23, 24,
                ].map((time) => {
                  return (
                    <MenuItem key={time} value={time}>
                      <AccessTimeIcon
                        sx={{
                          width: '15px',
                          height: '15px',
                          marginRight: '5px',
                          marginBottom: '-1px',
                        }}
                      />
                      {time}
                    </MenuItem>
                  )
                })}
              </Select>
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            </Box>
          }
          title="Transfers"
        />
        <CardContent sx={{ paddingTop: '0px' }}>
          <Box width="100%" mt={5}>
            <Box>
              <Grid spacing={10} container>
                <Grid item>
                  <Button
                    sx={{
                      padding: '5px 15px',
                      borderRadius: '5px',
                      backgroundColor:
                        listName === 'Executed' ? '#907ad6' : '#c6bfd8',
                    }}
                    onClick={() => {
                      setListName('Executed')
                    }}
                    variant="contained"
                  >
                    Executed
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    sx={{
                      padding: '5px 15px',
                      borderRadius: '5px',
                      backgroundColor:
                        listName === 'Running' ? '#907ad6' : '#c6bfd8',
                    }}
                    onClick={() => {
                      setListName('Running')
                    }}
                    variant="contained"
                  >
                    Running
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <TableContainer>
              <Table
                sx={{ minWidth: 750, maxHeight: 100 }}
                aria-labelledby="tableTitle"
                size={'small'}
              >
                <EnhancedTableHead
                  numSelected={[].length}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                  headCells={listName === 'Executed' ? headCells : headCells1}
                />
                <TableBody>
                  {(listName === 'Executed' ? rows : rows1).map(
                    (row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`

                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.amount}
                        >
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            padding="none"
                          >
                            {row.beneficiary}
                            <br />
                            <span
                              style={{
                                fontSize: '10px',
                                color: '#cfc8de',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {row.id}
                            </span>
                          </TableCell>
                          <TableCell align="center">{row.account}</TableCell>
                          {listName === 'Executed' && (
                            <TableCell align="center">{row.date}</TableCell>
                          )}
                          <TableCell align="center">
                            {row.nextTransfer}
                          </TableCell>
                          <TableCell align="right">
                            {`- ${row.amount}`}
                            {/* <EuroSymbolIcon
                              sx={{ width: '10px', height: '10px' }}
                            /> */}
                          </TableCell>
                        </TableRow>
                      )
                    }
                  )}{' '}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

const mapStateToProps = () => ({})

TransfersCompoment.propTypes = {}
TransfersCompoment.defaultProps = {}
export default connect(mapStateToProps, {})(TransfersCompoment)
