import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.getschwiftyy.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date('2026-05-23'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date('2026-05-23'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/work`,
      lastModified: new Date('2026-05-23'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date('2026-05-23'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]
}
