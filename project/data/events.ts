export type Event = {
  id: string;
  name: string;
  type: string;
  date: string;
  location: string;
  description?: string;
};

export const events: Event[] = [
  {
    id: 'event-01',
    name: 'Shrimad Bhagwat Maha Puran',
    type: 'Shrimad Bhagwat Maha Puran',
    date: '25–31 May',
    location: 'Lakhimpur, Uttar Pradesh',
    description: 'A sacred gathering of Shrimad Bhagwat Maha Puran.',
  },
  {
    id: 'event-02',
    name: 'Shrimad Bhagwat Maha Puran',
    type: 'Shrimad Bhagwat Maha Puran',
    date: '1–7 June',
    location: 'Naimisharan, Uttar Pradesh',
    description: 'A spiritual gathering at Naimisharan.',
  },
  {
    id: 'event-03',
    name: 'Shrimad Bhagwat Maha Puran',
    type: 'Shrimad Bhagwat Maha Puran',
    date: '22–28 July',
    location: 'Navi Nagar, Uttar Pradesh',
    description: 'A sacred Shrimad Bhagwat Maha Puran gathering.',
  },
  {
    id: 'event-04',
    name: 'Shrimad Bhagwat Katha',
    type: 'Shrimad Bhagwat Katha',
    date: '28 Aug–3 Sept',
    location: 'Jalandhar, Punjab',
    description: 'Shrimad Bhagwat Katha in Jalandhar, Punjab.',
  },
  {
    id: 'event-05',
    name: 'Shrimad Bhagwat Maha Puran',
    type: 'Shrimad Bhagwat Maha Puran',
    date: '5–11 Sept',
    location: 'Sitapur, Uttar Pradesh',
    description: 'A sacred Shrimad Bhagwat Maha Puran gathering in Sitapur.',
  },
  {
    id: 'event-06',
    name: 'Shiv Puran',
    type: 'Shiv Puran',
    date: '11–20 Oct',
    location: 'Sankatadevi Mandir, Lakhimpur, Uttar Pradesh',
    description: 'Upcoming Shiv Puran at Sankatadevi Mandir.',
  },
  {
    id: 'event-07',
    name: 'Shrimad Bhagwat Katha',
    type: 'Shrimad Bhagwat Katha',
    date: '18–24 Nov',
    location: 'Kanpur, Uttar Pradesh',
    description: 'Upcoming Shrimad Bhagwat Katha in Kanpur.',
  },
];