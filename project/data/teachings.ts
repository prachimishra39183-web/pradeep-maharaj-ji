// ============================================================
// TEACHINGS
// ============================================================
// Edit descriptions for each teaching category.
// Do not present placeholder content as verified direct
// quotations from the saint.
// ============================================================

export type Teaching = {
  id: string;
  category: string;
  title: string;
  description: string;
};

export const teachings: Teaching[] = [
  {
    id: 'dharma',
    category: 'Dharma',
    title: 'The Path of Righteousness',
    description:
      'Discover the importance of dharma — living in alignment with truth, duty and moral purpose in every aspect of life.',
  },
  {
    id: 'bhakti',
    category: 'Bhakti',
    title: 'Devotion of the Heart',
    description:
      'Explore the path of bhakti — unconditional love and devotion that opens the heart to the divine presence within and around us.',
  },
  {
    id: 'seva',
    category: 'Seva',
    title: 'Selfless Service',
    description:
      'Understand seva as a spiritual practice — serving others without expectation of reward, as an expression of compassion and devotion.',
  },
  {
    id: 'discipline',
    category: 'Discipline',
    title: 'The Power of Discipline',
    description:
      'Learn how discipline shapes character, strengthens the mind, and creates the foundation for a meaningful spiritual life.',
  },
  {
    id: 'gurukul-education',
    category: 'Gurukul Education',
    title: 'Knowledge with Sanskar',
    description:
      'Discover the Gurukul approach to education — where learning is rooted in knowledge, character, discipline and spiritual growth.',
  },
  {
    id: 'spiritual-knowledge',
    category: 'Spiritual Knowledge',
    title: 'Wisdom of the Scriptures',
    description:
      'Explore the timeless wisdom found in sacred texts and spiritual discourses that illuminate the path of self-discovery.',
  },
  {
    id: 'compassion',
    category: 'Compassion',
    title: 'The Heart of Kindness',
    description:
      'Embrace compassion as a guiding principle — extending kindness to all living beings and cultivating empathy in daily life.',
  },
  {
    id: 'self-realization',
    category: 'Self-Realization',
    title: 'Knowing the Self',
    description:
      'Journey toward self-realization — understanding one\'s true nature beyond the physical, mental and emotional layers of existence.',
  },
];
