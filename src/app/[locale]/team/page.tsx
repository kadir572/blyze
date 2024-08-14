import PageLayout from '@/components/layouts/PageLayout'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import KadirImage from '@/assets/images/kadir.jpg'
import LeroyImage from '@/assets/images/leroy.jpg'
import DarioImage from '@/assets/images/dario.jpg'
import LucaImage from '@/assets/images/luca.jpeg'
import SalvaImage from '@/assets/images/salva.jpeg'
import Image, { StaticImageData } from 'next/image'

const data: {
  image: { src: StaticImageData; alt: string }
  name: string
  position: string
  role: string
}[] = [
  {
    image: { src: KadirImage, alt: 'Kadir Profile Picture' },
    name: 'Kadir',
    position: 'CEO',
    role: 'Fullstack Developer',
  },
  {
    image: { src: LeroyImage, alt: 'Leroy Profile Picture' },
    name: 'Leroy',
    position: 'CO-CEO',
    role: 'Game Developer',
  },
  {
    image: { src: DarioImage, alt: 'Dario Profile Picture' },
    name: 'Dario',
    position: 'Planung',
    role: 'Game Artist',
  },
  {
    image: { src: LucaImage, alt: 'Dario Profile Picture' },
    name: 'Luca',
    position: 'Marketing',
    role: 'UX/UI Designer',
  },
  {
    image: { src: SalvaImage, alt: 'Dario Profile Picture' },
    name: 'Salvatore',
    position: 'Content Creation',
    role: 'Marketing',
  },
]

export default function TeamPage() {
  return (
    <PageLayout title='Unser Team'>
      <Grid container rowGap={8} columnGap={8}>
        {data.map((el, index) => (
          <Grid container md={2} key={index} rowGap={4}>
            <Grid
              item
              xs={6}
              md={12}
              sx={{
                order: { xs: index % 2 === 0 ? 1 : 2, md: 0 },
                display: 'flex',
              }}
            >
              <Image
                src={el.image.src}
                alt={el.image.alt}
                width={500}
                height={500}
              />
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                order: { xs: index % 2 === 0 ? 2 : 1, md: 1 },
                display: 'flex',
                px: 2,
              }}
              alignSelf='center'
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant='h6'>{el.name}</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography>{el.position}</Typography>
                  <Typography>{el.role}</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  )
}
