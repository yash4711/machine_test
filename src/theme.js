import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const theme = responsiveFontSizes(
  createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: '#6a607f',
          },
          h1: {
            color: '#655093',
          },
          h2: {
            color: '#655093',
          },
          h3: {
            color: '#655093',
          },
          h4: {
            color: '#655093',
          },
          h5: {
            color: '#655093',
          },
          h6: {
            color: '#655093',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color: '#6b6080',
            borderRadius: '15px',
            height: '45px',
            backgroundColor: '#faf8fe',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '10px',
            textTransform: 'none',
            padding: '10px 15px',
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
      fontFamily: ['Nunito'],
      contrastText: '#000000',
    },
    palette: {
      background: {
        primary: '#655093',
        secondary: '#F7F8FA',
        contrastText: '#ffffff',
      },
      primary: {
        main: '#907ad6',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#faf8fe',
        contrastText: '#c7c0d9',
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
        secondary: '#000000',
      },
      border: {
        primary: '#707070',
      },
    },
  })
)

export default theme
