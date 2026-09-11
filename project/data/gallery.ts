export type GalleryCategory =
  | 'Gurukul'
  | 'Students'
  | 'Spiritual Events'
  | 'Seva';

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  caption: string;
};

export const galleryCategories: Array<'All' | GalleryCategory> = [
  'All',
  'Gurukul',
  'Students',
  'Spiritual Events',
  'Seva',
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: '/gurukul1.jpeg',
    alt: 'Gurukul students meditating together',
    category: 'Gurukul',
    caption: 'A Moment of Meditation',
  },

  {
    id: 'g2',
    src: '/gurukul1.jpeg',
    alt: 'Gurukul students during spiritual practice',
    category: 'Spiritual Events',
    caption: 'Learning Through Spiritual Practice',
  },

  {
    id: 'g3',
    src: '/gurukul2.jpeg',
    alt: 'Gurukul students studying together',
    category: 'Students',
    caption: 'Learning & संस्कार',
  },
];