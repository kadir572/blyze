import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://blyze.ch',
      lastModified: new Date(),
      alternates: {
        languages: {
          de: 'https://blyze.ch/de',
          en: 'https://blyze.ch/en',
        },
      },
    },
    {
      url: 'https://blyze.ch/team',
      lastModified: new Date(),
      alternates: {
        languages: {
          de: 'https://blyze.ch/de/team',
          en: 'https://blyze.ch/en/team',
        },
      },
    },
    {
      url: 'https://blyze.ch/contact',
      lastModified: new Date(),
      alternates: {
        languages: {
          de: 'https://blyze.ch/de/contact',
          en: 'https://blyze.ch/en/contact',
        },
      },
    },
    {
      url: 'https://blyze.ch/imprint',
      lastModified: new Date(),
      alternates: {
        languages: {
          de: 'https://blyze.ch/de/imprint',
          en: 'https://blyze.ch/en/imprint',
        },
      },
    },
    {
      url: 'https://blyze.ch/privacy-policy',
      lastModified: new Date(),
      alternates: {
        languages: {
          de: 'https://blyze.ch/de/privacy-policy',
          en: 'https://blyze.ch/en/privacy-policy',
        },
      },
    },
  ]
}
