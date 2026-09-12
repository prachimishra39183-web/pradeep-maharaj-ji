// Uploaded images provided for the site.

const logoImage = '/logo.jpeg';
const navImageOne = '/nav1.jpeg';
const navImageTwo = '/nav2.jpeg';
const navImageThree = '/nav3.jpeg';
const navImageFour = '/nav4.jpeg';
const navImageFive = '/nav5.jpeg';
const navImageSix = '/nav6.jpeg';
const navImageSeven = '/nav7.jpeg';
const navImageEight = '/nav8.jpeg';
const navImageNine = '/nav9.jpeg';
const navImageTen = '/nav10.jpeg';
const gurukulImage = '/gurukul.jpeg';
const gurukulImage1 = '/gurukul1.jpeg';
const gurukulImage2 = '/gurukul2.jpeg';

export const siteImages = {
  heroSlides: [
    { src: navImageOne, alt: 'Shri Pradeep Maharaj Ji walking with devotees during a spiritual gathering' },
    { src: navImageTwo, alt: 'Shri Pradeep Maharaj Ji during a spiritual discourse' },
    { src: navImageThree, alt: 'Shri Pradeep Maharaj Ji smiling during a spiritual gathering' },
    { src: navImageFour, alt: 'Devotees gathered at a Jan Kalyan Gurukul event' },
    { src: navImageFive, alt: 'Shri Pradeep Maharaj Ji speaking at a spiritual program' },
    { src: navImageSix, alt: 'Shri Pradeep Maharaj Ji sharing spiritual wisdom' },
     { src: navImageSeven, alt: 'Devotees gathered at a Jan Kalyan Gurukul event' },
    { src: navImageEight, alt: 'Shri Pradeep Maharaj Ji speaking at a spiritual program' },
    { src: navImageNine, alt: 'Shri Pradeep Maharaj Ji sharing spiritual wisdom' },
    { src: navImageTen, alt: 'Shri Pradeep Maharaj Ji during a spiritual gathering' },
  ],
  logo: { src: logoImage, alt: 'Pradeep Maharaj Ji portrait and spiritual emblem' },
  hero: { src: navImageOne, alt: 'Pradeep Maharaj Ji walking with devotees during a spiritual gathering' },
  saintPortrait: { src: navImageTwo, alt: 'Portrait of Pradeep Maharaj Ji during a spiritual discourse' },
  saintSecondary: { src: navImageThree, alt: 'Shri Pradeep Maharaj Ji smiling during a spiritual gathering' },
  saintTertiary: { src: navImageOne, alt: 'Shri Pradeep Maharaj Ji walking among devotees' },
  saintQuaternary: { src: navImageTwo, alt: ' Shri Pradeep Maharaj Ji in traditional white attire' },
  saintByRiver: { src: navImageThree, alt: 'Portrait of Shri Pradeep Maharaj Ji' },
  templeDome: { src: navImageFour, alt: 'Jan Kalyan Gurukul spiritual gathering decorated in saffron' },
  templeColorful: { src: navImageFour, alt: 'Community gathering at Jan Kalyan Gurukul Seva Sanstha' },
  templeInterior: { src: navImageFour, alt: 'Spiritual gathering with devotees and organizers' },
  templeOilLamp: { src: navImageOne, alt: 'Shri Pradeep Maharaj Ji walking with the spiritual community' },
  templeCarvings: { src: navImageFour, alt: 'Community members gathered for a spiritual program' },
  templeExterior: { src: navImageFour, alt: 'Saffron-decorated spiritual event space' },
  templeSculptures: { src: navImageFour, alt: 'Devotees gathered at a Jan Kalyan Gurukul event' },
  priestRitual: { src: navImageFour, alt: 'Community gathering at a spiritual event' },
  fireRitual: { src: navImageFour, alt: 'Spiritual program with Shri Pradeep Maharaj Ji and devotees' },
  fireCeremony: { src: navImageOne, alt: 'Devotees walking together with Shri Pradeep Maharaj Ji' },
  fireNight: { src: navImageFour, alt: 'Community members gathered during a spiritual program' },
  devoteesFire: { src: navImageOne, alt: 'Devotees accompanying Shri Pradeep Maharaj Ji' },
  priestsCeremony: { src: navImageFour, alt: 'Organizers and devotees gathered at a spiritual event' },
  diyaGlow: { src: navImageFour, alt: 'Warmly decorated spiritual event venue' },
  diyaClay: { src: navImageFour, alt: 'Saffron and white decorations at a spiritual gathering' },
  diyaOilLamp: { src: navImageFour, alt: 'Spiritual event decoration in warm saffron tones' },
  diyaWarm: { src: navImageFour, alt: 'Warm atmosphere at a Jan Kalyan Gurukul gathering' },
  diyaMarigold: { src: navImageFour, alt: 'Saffron-decorated community celebration' },
  candlesRow: { src: navImageFour, alt: 'Spiritual community gathered beneath event decorations' },
  studentsClassroom: { src: gurukulImage, alt: 'Children studying together at Jan Kalyan Gurukul' },
  studentsListening: { src: gurukulImage1, alt: 'Children listening and learning at the Gurukul' },
  studentsLearning: { src: gurukulImage2, alt: 'Children studying at Jan Kalyan Gurukul' },
  studentsSlates: { src: gurukulImage, alt: 'Children learning together at the Gurukul' },
  studentsStudy: { src: gurukulImage, alt: 'Students focused on their studies at Jan Kalyan Gurukul' },
  studentsGathering: { src: gurukulImage2, alt: 'Gurukul students gathered for learning' },
  studentsClassroom2: { src: gurukulImage, alt: 'Children studying together at Jan Kalyan Gurukul' },
  meditation: { src: navImageThree, alt: 'Pradeep Maharaj Ji in a contemplative moment' },
  yogaSunrise: { src: navImageThree, alt: 'Portrait of Pradeep Maharaj Ji' },
  menPraying: { src: navImageFour, alt: 'Devotees gathered for a spiritual program' },
  womenRituals: { src: navImageFour, alt: 'Community members gathered at a spiritual event' },
  templeOffering: { src: navImageFour, alt: 'Decorated venue for a Jan Kalyan Gurukul program' },
  goddessStatues: { src: navImageFour, alt: 'Saffron-decorated spiritual event venue' },
  deitiesBW: { src: navImageFour, alt: 'Community gathering at a spiritual program' },
  sacredFootprints: { src: navImageFour, alt: 'Spiritual event venue with saffron decorations' },
  finalCta: { src: navImageOne, alt: 'Pradeep Maharaj Ji walking with devotees' },
} as const;

export type SiteImage = { src: string; alt: string };
