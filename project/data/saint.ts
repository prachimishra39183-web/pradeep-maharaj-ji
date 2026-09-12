// ============================================================
// SAINT INFORMATION
// ============================================================
// Replace placeholder content with authentic biography,
// journey details, and life story of the saint.
// ============================================================

export const saintData = {

  title: 'Spiritual Guide & Founder',
  organization: 'Jan Kalyan Gurukul Seva Sanstha',

  about: {
    label: 'Walking the Path of Dharma',
    heading: 'About the Journey',
    biography:
      ' shri Pradeep Mishra Maharaj Ji’s journey is rooted in devotion, spiritual learning, and selfless service. From an early connection with Sanatan Dharma and sacred scriptures, his path gradually evolved into sharing spiritual wisdom through Kathas and discourses. His vision later expanded towards education, संस्कार, cultural preservation, and seva through Jan Kalyan Gurukul Seva Sanstha. Today, his journey continues with the mission of inspiring people through knowledge, devotion, and service.',
    
  },

  introduction: {
    label: 'The Journey',

    paragraph:
      'Every spiritual journey begins with a search for meaning and unfolds through devotion, discipline, knowledge and service.',
  },

  quote: {
   
    attribution: 'Shri Pradeep Maharaj Ji',
  },

 journey: [
  {
    number: '01',
    title: 'Early Life',
    description:
      'Shri Pradeep Mishra Maharaj Ji was born in Lakhimpur, Uttar Pradesh. From his childhood, he developed a deep interest in spirituality, Indian traditions, and the teachings of Sanatan Dharma.',
    
  },
  {
    number: '02',
    title: 'Spiritual Awakening',
    description:
      'As he grew older, his connection with spirituality became stronger. He devoted himself to learning sacred scriptures, meditation, devotion, and the timeless teachings of Indian spiritual traditions.',
  
  },
  {
    number: '03',
    title: 'Beginning of Katha',
    description:
      'His passion for sharing spiritual knowledge gradually led him towards Katha and spiritual discourses. He began presenting the teachings of the Bhagwat and Puranas in a simple and meaningful way.',
   
  },
  {
    number: '04',
    title: 'Seva & Social Work',
    description:
      'Alongside his spiritual work, Shri Pradeep Mishra Maharaj Ji began focusing on seva and social welfare, supporting educational initiatives, community activities, and efforts dedicated to helping society.',
   
  },
  {
    number: '05',
    title: 'Establishment of Gurukul',
    description:
      'With a vision of combining traditional knowledge, modern education, संस्कार, spirituality, and service, he established Jan Kalyan Gurukul Seva Sanstha to nurture future generations.',

  },
  {
    number: '06',
    title: 'Present Mission',
    description:
      'Today, Shri Pradeep Mishra Maharaj Ji continues his journey through spiritual Kathas, education, cultural preservation, and seva, with the aim of inspiring people through devotion, knowledge, and selfless service.',
    date: 'Present',
  },
],
} as const;

export type JourneyEntry = {
  number: string;
  title: string;
  description: string;
  date: string;
};
