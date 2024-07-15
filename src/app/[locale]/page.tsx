import PageLayout from '@/components/layouts/PageLayout'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import NextLink from 'next/link'

export default function Home() {
  return (
    <PageLayout title='Home Page'>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Typography variant='h5' component='h2' fontWeight='600'>
          Was ist Blyze?
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography>
            Das junge Entwicklerteam, das Gamification-Lösungen für Gen Z macht.
          </Typography>
          <Typography>
            Von der Fahrschule bis zur Steuererklärung, Gamification macht alles
            interessanter und steigert die Lernkurve. Wir als Blyze haben uns
            genau dies zur Aufgabe gemacht. Die langweiligsten Themen wandeln
            wir in interaktive Lernspiele, damit die junge geenration Freude am
            erwachsen werden bekommt.
          </Typography>
          <Button
            // color='blyzeOrange'
            sx={{ backgroundColor: '#FF5B00', color: '#FFFFFF' }}
            variant='contained'
            href='/contact'
            LinkComponent={NextLink}
          >
            Kontakt
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Typography variant='h5' component='h2' fontWeight='600'>
          Unsere Projekte
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant='h6'>3D-Theorie CH-Edition</Typography>
          <Typography>
            Auswendiglernen machen die meisten, aber verstehen tun nur die
            wenigsten. Wenn es jedoch um die Autotheorieprüfung geht, kann es
            schnell gefährlich werden. Deshalb haben wir im Rahmen einer
            Studentenarbeit das Konzept für 3D-Theorie erstellt. Die einzige
            interaktive Autotheorie-Lernapp.
          </Typography>
          <Button
            // color='blyzeOrange'
            sx={{ backgroundColor: '#FF5B00', color: '#FFFFFF' }}
            variant='contained'
            href='https://theorie.blyze.ch'
            LinkComponent={NextLink}
          >
            Ansehen
          </Button>
        </Box>
      </Box>
    </PageLayout>
  )
}
