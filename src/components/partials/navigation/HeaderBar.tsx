'use client'

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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { usePathname } from 'next/navigation'

export default function HeaderBar() {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: pathname === '/de' || pathname === '/en' ? '100vh' : '10vh',
        overflow: 'hidden',
      }}
    >
      {(pathname === '/de' || pathname === '/en') && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: 'translate(-50%, -50%)',
              zIndex: -1,
            }}
          >
            <source src='/hero-video.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>

          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#ffffff',
              textAlign: 'center',
              zIndex: 1,
            }}
          >
            <Typography variant='h2' sx={{ fontWeight: 'bold', mb: 2 }}>
              Bereichere dein Leben mit mehr Abwechslung durch Gamification
            </Typography>
          </Box>

          {/* Bottom Text and Chevron */}
          <Box
            sx={{
              position: 'absolute',
              bottom: '5%',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#ffffff',
              textAlign: 'center',
              zIndex: 1,
            }}
          >
            <Typography variant='h6' sx={{ mb: 1 }}>
              Scroll um mehr zu entdecken
            </Typography>
            <ExpandMoreIcon sx={{ fontSize: '2rem' }} />
          </Box>
        </>
      )}

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
    </Box>
  )
}
