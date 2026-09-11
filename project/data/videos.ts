// YouTube Katha and discourse library.

export type VideoCategory =
  | 'Shrimad Bhagwat Katha'
  | 'Shiv Puran'
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
  'Shiv Puran',
  'Other',
];

const videoEntries = [
//https://www.youtube.com/watch?v=IlbkHALD_Mo&list=PLe3tbmB58zhw&index=1&pp=iAQB
  // ============================================================
  // SHRIMAD BHAGWAT KATHA - 6 VIDEOS
  // ============================================================
['v1', 'Pradeep Maharaj Ji — Katha Darshan 01', 'a0aVvlO_pbg', 'Shrimad Bhagwat Katha', false],
  ['v2', 'Pradeep Maharaj Ji — Katha Darshan 02', 'suT9xFW1zpU', 'Shrimad Bhagwat Katha', true],
  ['v3', 'Pradeep Maharaj Ji — Katha Darshan 03', 's2LrShv8VV4', 'Shrimad Bhagwat Katha', false],
  ['v4', 'Pradeep Maharaj Ji — Katha Darshan 04', 'RFrAz66zGjY', 'Shrimad Bhagwat Katha', false],
  ['v5', 'Pradeep Maharaj Ji — Katha Darshan 05', 'WjM9K-MqRsI', 'Shrimad Bhagwat Katha', false],
  ['v6', 'Pradeep Maharaj Ji — Katha Darshan 06', 'IlbkHALD_Mo', 'Shrimad Bhagwat Katha', false],
 

  // ============================================================
  // SHRIMAD BHAGWAT MAHA PURAN - 6 VIDEOS
  // ============================================================
  //https://www.youtube.com/watch?v=BGyxRBSyBCM&list=PLuAu0U4lHurFd9hXLmvu_IOAMo3BDGq11&index=10&pp=iAQB

 
  // ============================================================
  // SHIV PURAN - 6 VIDEOS
  // ============================================================

  ['v13', 'Pradeep Maharaj Ji — Shiv Puran 01', '6k9_CpSPNxk', 'Shiv Puran', false],
  ['v14', 'Pradeep Maharaj Ji — Shiv Puran 02', 'g-bc61ZcrSM', 'Shiv Puran', false],
  ['v15', 'Pradeep Maharaj Ji — Shiv Puran 03', 'MPz6a-29GZ4', 'Shiv Puran', false],
  ['v16', 'Pradeep Maharaj Ji — Shiv Puran 04', 'TwcnPozIKao', 'Shiv Puran', false],
  ['v17', 'Pradeep Maharaj Ji — Shiv Puran 05', 'Nx9Yuyt2evY', 'Shiv Puran', false],
  ['v18', 'Pradeep Maharaj Ji — Shiv Puran 06', 'BGyxRBSyBCM', 'Shiv Puran', false],

  // ============================================================
  // SPIRITUAL DISCOURSE - 6 VIDEOS
  // ============================================================
//https://www.youtube.com/watch?v=5lZ6gLBzUlM
  // ============================================================
  // OTHER - 6 VIDEOS
  // ============================================================

  ['v31', 'Pradeep Maharaj Ji — Krishna Bhajan 01', 'gqpM7MT6o_k', 'Other', false],
  ['v32', 'Pradeep Maharaj Ji — Bholeji Bhajan 02', 'oxY1b7PqYT0', 'Other', false],
  ['v33', 'Pradeep Maharaj Ji — Bhakti Sandhya 03', '6ocwjo4WqpU', 'Other', false],
  ['v34', 'Pradeep Maharaj Ji — Bhakti Sandhya 04', 'BY4aR_Je0v8', 'Other', false],
  ['v35', 'Pradeep Maharaj Ji — Bhakti Sandhya 05', '2ihITnJRFVs', 'Other', false],
  ['v36', 'Pradeep Maharaj Ji — Bhakti Sandhya 06', '5lZ6gLBzUlM', 'Other', false],

] as const;

export const videos: Video[] = videoEntries.map(([id, title, videoId, category, featured]) => ({
  id,
  title,
  youtubeUrl: `https://youtu.be/${videoId}`,
  videoId,
  description: 'Watch Pradeep Maharaj Ji share spiritual wisdom, devotion and timeless guidance.',
  category,
  date: 'Watch on YouTube',
  location: 'Jan Kalyan Gurukul Seva Sanstha',
  thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
  ...(featured ? { featured: true } : {}),
}));
