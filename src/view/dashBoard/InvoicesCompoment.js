import * as React from 'react'

import Box from '@mui/material/Box'

import { connect } from 'react-redux'
import { Card, Grid, Button } from '@mui/material'
import CardHeader from '@mui/material/CardHeader'
// import InputAdornment from '@mui/material/InputAdornment'
import CardContent from '@mui/material/CardContent'
import EnhancedTableHead from '../../helpers/Components/Table'
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

const headCells = [
  {
    id: 'billNumber',
    numeric: false,
    align: 'left',
    disablePadding: true,
    label: 'Bill Number',
  },
  {
    id: 'client',
    numeric: false,
    align: 'center',
    disablePadding: false,
    label: 'Client',
  },
  {
    id: 'date',
    numeric: false,
    align: 'center',
    disablePadding: false,
    label: 'Date',
  },
  {
    id: 'amount',
    align: 'right',
    numeric: true,
    disablePadding: false,
    label: 'Amount',
  },
]
const headCells1 = [
  {
    id: 'billNumber',
    align: 'left',
    numeric: false,
    disablePadding: true,
    label: 'Bill Number',
  },
  {
    id: 'client',
    align: 'center',
    numeric: false,
    disablePadding: false,
    label: 'Client',
  },
  {
    id: 'date',
    numeric: false,
    align: 'center',
    disablePadding: false,
    label: 'Date',
  },
  {
    id: 'amount',
    align: 'right',
    numeric: true,
    disablePadding: false,
    label: 'Amount',
  },
]

function createData(billNumber, client, date, amount) {
  return {
    billNumber,
    client,
    date,
    amount,
  }
}

function createData1(billNumber, client, date, amount) {
  return {
    billNumber,
    client,
    date,
    amount,
  }
}

const rows = [
  createData('20211029-000001', 'Deborah Gray', '3 Feb 2022', 10000),
  createData('20211029-000001', 'Christopher Garcia', '25 Feb 2022', 12000),
  createData('20211029-000001', 'Scott Roberts', '5 Feb 2022', 8000),
  createData('20211029-000001', 'Jennifer Hobbs', '14 March 2022', 50000),
  createData('20211029-000001', 'Anthony Carter', '13 March 2022', 15000),
]
const rows1 = [
  createData1('20211029-000001', 'Christopher Garcia', '25 Feb 2022', 12000),
  createData1('20211029-000001', 'Deborah Gray', '3 Feb 2022', 10000),
  createData1('20211029-000001', 'Jennifer Hobbs', '14 March 2022', 50000),
  createData1('20211029-000001', 'Anthony Carter', '13 March 2022', 15000),
  createData1('20211029-000001', 'Scott Roberts', '5 Feb 2022', 8000),
]

function InvoicesCompoment() {
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
    <Box mt={10}>
      <Card sx={{ width: '750px', height: '400px', borderRadius: '15px' }}>
        <CardHeader
          titleTypographyProps={{ fontWeight: '600' }}
          title="Invoices"
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
                    To be transferred
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
                    Transferred
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
                            {row.billNumber}
                          </TableCell>
                          <TableCell align="center">{row.client}</TableCell>

                          <TableCell align="center">{row.date}</TableCell>

                          <TableCell align="right">
                            {`- ${row.amount}`}
                            <EuroSymbolIcon
                              sx={{ width: '10px', height: '10px' }}
                            />
                          </TableCell>
                        </TableRow>
                      )
                    }
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box mt={5}>
            <Grid spacing={10} container>
              <Grid item>
                <Button
                  sx={{
                    padding: '10px 25px',
                    borderRadius: '25px',
                    '&hover:': {
                      backgroundColor: '#c6bfd8',
                    },
                  }}
                  variant="contained"
                >
                  All Invoices
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

const mapStateToProps = () => ({})

InvoicesCompoment.propTypes = {}
InvoicesCompoment.defaultProps = {}
export default connect(mapStateToProps, {})(InvoicesCompoment)
