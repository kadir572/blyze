import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const links = [
    {
      url: 'https://blyze.ch',
      lastModified: new Date(),
      // alternates: {
      //   languages: {
      //     de: 'https://blyze.ch/de',
      //     en: 'https://blyze.ch/en',
      //   },
      // },
    },
    {
      url: 'https://blyze.ch/team',
      lastModified: new Date(),
    },
    {
      url: 'https://blyze.ch/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://blyze.ch/imprint',
      lastModified: new Date(),
    },
    {
      url: 'https://blyze.ch/privacy-policy',
      lastModified: new Date(),
    },
  ]
  return links
}
