// ============================================================
// EVENTS DATA
// ============================================================
// Add, edit, or remove events here.
// ============================================================

export type Event = {
  id: string;
  date: string;
  endDate?: string;
  name: string;
  type: string;
  location: string;
  
  directionsUrl?: string;
};

export const events: Event[] = [
  {
    id: 'e1',
    date: '25 May',
    endDate: '31 May',
    name: 'Shrimad Bhagwat Maha Puran',
    type: 'Katha',
    location: 'Lakhimpur, Uttar Pradesh',
  
  },
  {
    id: 'e2',
    date: '1 June',
    endDate: '7 June',
    name: 'Shrimad Bhagwat Maha Puran',
    type: 'Katha',
    location: 'Naimisharanya, Uttar Pradesh',

  },
  {
    id: 'e3',
    date: '22 July',
    endDate: '28 July',
    name: 'Shrimad Bhagwat Maha Puran',
    type: 'Katha',
    location: 'Navi Nagar, Uttar Pradesh',
    
  },
  {
    id: 'e4',
    date: '28 August',
    endDate: '3 September',
    name: 'Shrimad Bhagwat Katha',
    type: 'Katha',
    location: 'Jalandhar, Punjab',
    
  },
  {
    id: 'e5',
    date: '5 September',
    endDate: '11 September',
    name: 'Shrimad Bhagwat Maha Puran',
    type: 'Katha',
    location: 'Sitapur',
    
  },
  {
    id: 'e6',
    date: '11 October',
    endDate: '20 October',
    name: 'Shiv Puran',
    type: 'Katha',
    location: 'Sankatadevi Mandir, Lakhimpur',
    
  },
  {
    id: 'e7',
    date: '18 November',
    endDate: '24 November',
    name: 'Shrimad Bhagwat Katha',
    type: 'Katha',
    location: 'Kanpur, Uttar Pradesh',
    
  },
];
