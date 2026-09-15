// ============================================================
// GURUKUL INFORMATION
// ============================================================

export const gurukulData = {
  organization: 'Jan Kalyan Gurukul Seva Sansthan',

  

  

  sections: [
    {
      id: 'about',
      label: 'About the Gurukul',
      title: 'More Than Education',
      description:
        'The Gurukul brings together knowledge, संस्कार, discipline and spiritual growth, creating a space where learning becomes a journey of character and purpose.',
    },

    {
      id: 'vision',
      label: 'Vision',
      title: 'A Vision for Better Living',
      description:
        'To nurture individuals with knowledge, strong values, discipline and a spirit of service.',
    },

    {
      id: 'mission',
      label: 'Mission',
      title: 'Learning with Purpose',
      description:
        'To create an environment where education inspires character, responsibility, humility and meaningful living.',
    },

    {
      id: 'education',
      label: 'Education & Sanskar',
      title: 'Knowledge with Values',
      description:
        'Education here goes beyond books — connecting learning with संस्कार, respect, responsibility and good conduct.',
    },

    {
      id: 'daily-life',
      label: 'Daily Life',
      title: 'Every Day is a Lesson',
      description:
        'Daily life encourages learning, discipline, reflection and personal growth through meaningful experiences.',
    },

    {
      id: 'spiritual-learning',
      label: 'Spiritual Learning',
      title: 'Learning from Within',
      description:
        'Spiritual learning encourages devotion, reflection and a deeper understanding of values, wisdom and self-awareness.',
    },

    {
      id: 'discipline',
      label: 'Discipline',
      title: 'Discipline Builds Character',
      description:
        'Discipline teaches consistency, responsibility and self-control — values that become part of everyday life.',
    },

    {
      id: 'student-life',
      label: 'Student Life',
      title: 'Growing Together',
      description:
        'Student life is a journey of knowledge, friendship, responsibility and character building.',
    },

    {
      id: 'seva',
      label: 'Seva',
      title: 'The Spirit of Seva',
      description:
        'Seva teaches that true learning finds meaning when knowledge is shared through compassion, humility and service.',
    },

    {
      id: 'future-vision',
      label: 'Future Vision',
      title: 'Carrying Values Forward',
      description:
        'To carry the timeless values of knowledge, संस्कार and seva into a changing world with purpose and confidence.',
    },
  ],

  photoStory: {
    title: 'Life at the Gurukul',

    captions: [
      'Moments of Meditation',
      'Learning Through Discipline',
      'Spiritual Practice',
      'Study & Knowledge',
      'Life at the Gurukul',
      'Growing Through Sanskar',
    ],
  },
} as const;

export type GurukulSection = {
  id: string;
  label: string;
  title: string;
  description: string;
};