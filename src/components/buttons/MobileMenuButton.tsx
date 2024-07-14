'use client'

import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useMobileMenuStore } from '@/lib/store/zustand'
import Grid from '@mui/material/Grid'
import CircleIcon from '@mui/icons-material/Circle'
import Box from '@mui/material/Box'

export default function MobileMenuButton() {
  const { toggleMenu } = useMobileMenuStore()
  return (
    <IconButton
      color='inherit'
      aria-label='open drawer'
      edge='start'
      onClick={() => toggleMenu(true)}
      sx={{ display: { md: 'none' }, color: 'black' }}
    >
      {/* <MenuIcon fontSize='large' /> */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {Array.from({ length: 3 }).map((_, i) => (
          <Box key={i} sx={{ display: 'flex' }}>
            {Array.from({ length: 3 }).map((_, i) => (
              <CircleIcon key={i} sx={{ fontSize: 14, color: '#FF5B00' }} />
            ))}
          </Box>
        ))}
      </Box>
    </IconButton>
  )
}
