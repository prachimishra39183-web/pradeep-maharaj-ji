// ============================================================
// SITE-WIDE CONFIGURATION
// ============================================================
// Edit organization name, saint name, contact info, and
// social media links here.
// ============================================================

export const siteConfig = {

  

  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Katha / Videos', href: '/videos' },
    { label: 'Events', href: '/events' },
    { label: 'Gurukul', href: '/gurukul' },
    { label: 'Contact', href: '/contact' },
  ],

  contact: {
    address: '[Add Address]',
    phone: '[Add Phone]',
    email: '[Add Email]',
    instagram: '[Add Instagram]',
    facebook: '[Add Facebook]',
    youtube: '[Add YouTube]',
  },

  footerDescription: 'Spreading wisdom, devotion, education and seva.',
  copyright: `© ${new Date().getFullYear()} Jan Kalyan Gurukul Seva Sanstha. All Rights Reserved.`,
} as const;
