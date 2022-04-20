import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const theme = responsiveFontSizes(
  createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontsize: '17px',
            color: '#ffffff',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: '#ffffff',
            backgroundColor: '#f5f5f5',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '10px',
            padding: '10px 25px',
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        cs: 1400,
      },
    },
    spacing: 2,
    typography: {
      fontFamily: ['Montserrat'],
      contrastText: '#000000',
    },
    palette: {
      background: {
        primary: '#FFFFFF',
        secondary: '#F7F8FA',
        contrastText: '#ffffff',
      },
      primary: {
        main: '#ffffff',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#70B754',
        contrastText: '#FFFFFF',
      },
      error: {
        main: '#DB1515',
        contrastText: '#FFFFFF',
      },
      warning: {
        main: '#E0D220',
        contrastText: '#ffffff',
      },
      info: {
        main: '#E7EDF8',
        contrastText: '#000000',
      },
      success: {
        main: '#3f51b5',
        contrastText: '#FFFFFF',
      },
      text: {
        primary: '#616368',
        secondary: '#FFFFFF',
      },
      border: {
        primary: '#707070',
      },
    },
  })
)

export default theme
