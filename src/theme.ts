'use client'
import { Inter, Lato, Roboto, Alegreya } from 'next/font/google'
import { PaletteColorOptions, createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface PaletteOptions {
    blyzeOrange?: PaletteColorOptions
  }
}

const alegreya = Alegreya({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const baseTheme = createTheme()

const theme = createTheme({
  palette: {
    // primary: {
    //   main: '#111',
    // },
    blyzeOrange: {
      main: '#FF5B00',
      dark: '#FF4B00',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h4: {
      fontWeight: 500,
      [baseTheme.breakpoints.down('md')]: {
        fontSize: '1.5rem',
      },
    },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
    subtitle1: {
      fontWeight: 500,
      // [baseTheme.breakpoints.down('md')]: {
      //   fontSize: '1.25rem',
      // },
    },
    caption: {
      // [baseTheme.breakpoints.down('md')]: {
      //   fontSize: '1rem',
      // },
    },
    body2: {
      // [baseTheme.breakpoints.down('md')]: {
      //   fontSize: '1rem',
      // },
    },
  },
})

// theme.typography.h4 = {
//   fontSize: '2.125rem',
//   fontWeight: 500,
//   [theme.breakpoints.down('md')]: {
//     fontSize: '1.5rem',
//   },
// }

export default theme
