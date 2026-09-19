import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://shripradeepmaharaj.in',
      lastModified: new Date(),
    },
    {
      url: 'https://shripradeepmaharaj.in/about',
      lastModified: new Date(),
    },
    {
      url: 'https://shripradeepmaharaj.in/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://shripradeepmaharaj.in/events',
      lastModified: new Date(),
    },
    {
      url: 'https://shripradeepmaharaj.in/gallery',
      lastModified: new Date(),
    },
    {
      url: 'https://shripradeepmaharaj.in/gurukul',
      lastModified: new Date(),
    },
    {
      url: 'https://shripradeepmaharaj.in/seva',
      lastModified: new Date(),
    },
    {
      url: 'https://shripradeepmaharaj.in/videos',
      lastModified: new Date(),
    },
  ]
}