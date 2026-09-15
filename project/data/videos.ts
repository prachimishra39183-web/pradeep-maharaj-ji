// YouTube Katha and discourse library.

export type VideoCategory =
  | 'Shrimad Bhagwat Katha'
  | 'Shiv Maha Puran'
  | 'Ram Katha'
  | 'Other';

export type Video = {
  id: string;
  title: string;
  youtubeUrl: string;
  videoId: string;
  description: string;
  category: VideoCategory;
  date: string;
  location: string;
  thumbnail: string;
  featured?: boolean;
};

export const videoCategories: Array<'All' | VideoCategory> = [
  'All',
  'Shrimad Bhagwat Katha',
  'Shiv Maha Puran',
  'Ram Katha',
  'Other',
];

const videoEntries = [
//https://www.youtube.com/watch?v=IlbkHALD_Mo&list=PLe3tbmB58zhw&index=1&pp=iAQB
  // ============================================================
  // SHRIMAD BHAGWAT KATHA - 6 VIDEOS
  // ============================================================
['v1', ' Shri Pradeep Maharaj Ji — Katha Darshan 01', 'a0aVvlO_pbg', 'Shrimad Bhagwat Katha', false],
  ['v2', 'Shri Pradeep Maharaj Ji — Katha Darshan 02', 'suT9xFW1zpU', 'Shrimad Bhagwat Katha', true],
  ['v3', 'Shri Pradeep Maharaj Ji — Katha Darshan 03', 's2LrShv8VV4', 'Shrimad Bhagwat Katha', false],
  ['v4', 'Shri Pradeep Maharaj Ji — Katha Darshan 04', 'RFrAz66zGjY', 'Shrimad Bhagwat Katha', false],
  ['v5', 'Shri Pradeep Maharaj Ji — Katha Darshan 05', 'WjM9K-MqRsI', 'Shrimad Bhagwat Katha', false],
  ['v6', 'Shri Pradeep Maharaj Ji — Katha Darshan 06', 'IlbkHALD_Mo', 'Shrimad Bhagwat Katha', false],
 

  // ============================================================
  // SHRIMAD BHAGWAT MAHA PURAN - 6 VIDEOS
  // ============================================================
  //https://www.youtube.com/watch?v=BGyxRBSyBCM&list=PLuAu0U4lHurFd9hXLmvu_IOAMo3BDGq11&index=10&pp=iAQB

 
  // ============================================================
  // SHIV PURAN - 6 VIDEOS
  // ============================================================
  //https://www.youtube.com/watch?v=cwME_ckA8T0&list=PLuAu0U4lHurHqcDaUmAIX8eNJLrKfqY6P&index=1&pp=iAQB0gcJCSQMAYcqIYzv

  ['v13', 'Shri Pradeep Maharaj Ji — Shiv Puran 01', 'mQrnbun6WWU', 'Shiv Maha Puran', false],
  ['v14', 'Shri Pradeep Maharaj Ji — Shiv Puran 02', 'eaKxaoIwrJI', 'Shiv Maha Puran', false],
  ['v15', 'Shri Pradeep Maharaj Ji — Shiv Puran 03', 'YcMafsYrxEs', 'Shiv Maha Puran', false],
  ['v16', 'Shri Pradeep Maharaj Ji — Shiv Puran 04', 'ZDawvIF_ntI', 'Shiv Maha Puran', false],
  ['v17', 'Shri Pradeep Maharaj Ji — Shiv Puran 05', '7emUI9dAN8U', 'Shiv Maha Puran', false],
  ['v18', 'Shri Pradeep Maharaj Ji — Shiv Puran 06', 'cwME_ckA8T0', 'Shiv Maha Puran', false],

  // ============================================================
  // SPIRITUAL DISCOURSE - 6 VIDEOS
  // ============================================================
//https://www.youtube.com/watch?v=5lZ6gLBzUlM
  // ============================================================
  // OTHER - 6 VIDEOS
  // ============================================================

  ['v31', 'Shri Pradeep Maharaj Ji — Krishna Bhajan 01', '6k9_CpSPNxk', 'Other', false],
  ['v32', ' Shri Pradeep Maharaj Ji — Bholeji Bhajan 02', 'oxY1b7PqYT0', 'Other', false],
  ['v33', 'Shri Pradeep Maharaj Ji — Bhakti Sandhya 03', '6ocwjo4WqpU', 'Other', false],
  ['v34', 'Shri Pradeep Maharaj Ji — Bhakti Sandhya 04', 'BY4aR_Je0v8', 'Other', false],
  ['v35', 'Shri Pradeep Maharaj Ji — Bhakti Sandhya 05', '2ihITnJRFVs', 'Other', false],
  ['v36', 'Shri Pradeep Maharaj Ji — Bhakti Sandhya 06', '5lZ6gLBzUlM', 'Other', false],

//https://www.youtube.com/watch?v=6k9_CpSPNxk&t=6s&pp=0gcJCf4LAYcqIYzv
  ['v37', 'Shri Pradeep Maharaj Ji — Ram Katha 01', '6k9_CpSPNxk', 'Ram Katha', false],
  ['v38', ' Shri Pradeep Maharaj Ji — Ram Katha 02', 'MPz6a-29GZ4', 'Ram Katha', false],
  ['v39', 'Shri Pradeep Maharaj Ji — Ram Katha 03', 'TwcnPozIKao', 'Ram Katha', false],
  ['v40', 'Shri Pradeep Maharaj Ji — Ram Katha 04', 'Nx9Yuyt2evY', 'Ram Katha', false],
  ['v41', 'Shri Pradeep Maharaj Ji — Ram Katha 05', 'g-bc61ZcrSM', 'Ram Katha', false],
  ['v42', 'Shri Pradeep Maharaj Ji — Ram Katha 06', 'fYfPyLQdy60', 'Ram Katha', false],

] as const;

export const videos: Video[] = videoEntries.map(([id, title, videoId, category, featured]) => ({
  id,
  title,
  youtubeUrl: `https://youtu.be/${videoId}`,
  videoId,
  description: 'Watch Shri Pradeep Maharaj Ji share spiritual wisdom, devotion and timeless guidance.',
  category,
  date: 'Watch on YouTube',
  location: 'Jan Kalyan Gurukul Seva Sansthan',
  thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
  ...(featured ? { featured: true } : {}),
}));
