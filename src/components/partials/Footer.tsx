import Box from '@mui/material/Box'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Link from '@mui/material/Link'
import NextLink from 'next/link'
import { footerPrimaryLinks, footerSecondaryLinks } from '@/lib/links/footer'
import Typography from '@mui/material/Typography'
import BlyzeBlack from '@/assets/images/blyze_black.png'
import Image from 'next/image'
import Divider from '@mui/material/Divider'

export default function Footer() {
  return (
    <Box component='footer'>
      <Divider variant='fullWidth' sx={{ bgcolor: 'black', mx: 4, mb: 2 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          bgcolor: 'theorieBlue.main',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          px: 6,
          pt: 2,
          pb: 4,
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexGrow: 1,
              gap: 1,
            }}
          >
            {footerPrimaryLinks.map((el, index) => (
              <Link
                component={NextLink}
                href={el.href}
                key={index}
                sx={{ color: 'black', textDecoration: 'none' }}
              >
                <Typography variant='h4' component='span'>
                  {el.label}
                </Typography>
              </Link>
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              alignItems: 'flex-end',
              justifyContent: 'center',
              flexGrow: 1,
            }}
          >
            {footerSecondaryLinks.map((el, index) => (
              <Link
                component={NextLink}
                key={index}
                href={el.href}
                sx={{ color: 'black', textDecoration: 'none' }}
              >
                <Typography variant='body1' component='span'>
                  {el.label}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'white',
            mt: 2,
          }}
        >
          {/* <Typography fontWeight={300}>
            &copy;{` ${new Date().getFullYear()} 3D-Theorie`}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
            <Typography fontWeight={300}>Ein Product von</Typography>
            <Typography fontWeight={600}>&nbsp;Blyze Zürich</Typography>
          </Box> */}
          <NextLink href='/'>
            <Image src={BlyzeBlack} alt='Logo Black' height={71} width={100} />
          </NextLink>
        </Box>
      </Box>
    </Box>
  )
}
