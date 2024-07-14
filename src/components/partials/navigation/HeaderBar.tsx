import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MobileMenuButton from '@/components/buttons/MobileMenuButton'
import Link from '@mui/material/Link'
import NextLink from 'next/link'
import Box from '@mui/material/Box'
import CircleIcon from '@mui/icons-material/Circle'
import { navLinks } from '@/lib/links/navigation'
import DesktopLinks from './links/DesktopLinks'
import Image from 'next/image'
import BlyzeBlack from '@/assets/images/blyze_black.png'

export default function HeaderBar() {
  return (
    <AppBar
      position='absolute'
      sx={{
        maxWidth: 1920,
        left: 0,
        right: 0,
        mx: 'auto',
        px: { xs: 0, md: 2 },
        pt: { xs: 1, md: 3 },
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: { md: 'rgba(255, 255, 255, 0.8)' },
          borderRadius: 2,
        }}
      >
        <NextLink href='/'>
          <Image src={BlyzeBlack} alt='Logo Black' height={71} width={100} />
        </NextLink>
        <MobileMenuButton />
        <DesktopLinks />
      </Toolbar>
    </AppBar>
  )
}
