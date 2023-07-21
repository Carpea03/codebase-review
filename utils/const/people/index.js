const teamLink = '/people'
const profile = '/profile'

export const sideMenus = [
  {
    name: 'IP Attorneys',
    img: '/menus/people/sideMenus/empty-shield.svg',
    href: '/people',
  },
  {
    name: 'Patent attorneys',
    img: '/menus/people/sideMenus/empty-hammer.svg',
    href: '',
  },
  {
    name: 'Trade mark attorneys',
    img: '/menus/people/sideMenus/shield-check.svg',
    href: '',
  },
  {
    name: 'Commercial counsel',
    img: '/menus/people/sideMenus/peoples-two.svg',
    href: '',
  },
]

export const subMenus = [
  [
    { title: 'Sydney Team', bold: true, division: false, href: teamLink },
    { title: 'Chris Baxter', bold: false, division: false, href: profile },
    { title: 'Dr Qi Zhang', bold: false, division: false, href: profile },
    { title: 'Naleesha Niranjan', bold: false, division: false, href: profile },
    { title: 'Julia Caunt', bold: false, division: false, href: profile },
    { title: 'Andrew Balis', bold: false, division: false, href: profile },
    { title: 'Joanne Li', bold: false, division: false, href: profile },
    { title: 'Dr Richard Grant', bold: false, division: false, href: profile },
    { title: '', bold: false, division: true },
  ],
  [
    { title: 'Merlbourne Team', bold: true, division: false, href: teamLink },
    { title: 'Martin Earley', bold: false, division: false, href: profile },
    { title: 'Warren Chandler', bold: false, division: false, href: profile },
    { title: 'Dr Seán Klinkradt', bold: false, division: false, href: profile },
    { title: 'Jarrod Lichtblau', bold: false, division: false, href: profile },
    { title: 'Willem du Preez', bold: false, division: false, href: profile },
    { title: '', bold: false, division: true, href: '' },
  ],
  [
    { title: 'About', bold: true, division: false },
    {
      title: 'The role of Australian patent attorneys',
      bold: false,
      division: false,
      href: '',
    },
    {
      title: 'How to choose an Australian patent attorney',
      bold: false,
      division: false,
      href: '',
    },
    {
      title: 'The role of Australian trade mark attorneys',
      bold: false,
      division: false,
      href: '',
    },
    {
      title: 'How to become a trade mark attorney',
      bold: false,
      division: false,
      href: '',
    },
  ],
]

export const subMenus1 = [
  [
    { title: 'Sydney Team', bold: true, division: false, href: teamLink },
    { title: 'Chris Baxter', bold: false, division: false, href: profile },
    { title: 'Dr Qi Zhang', bold: false, division: false, href: profile },
    { title: 'Naleesha Niranjan', bold: false, division: false, href: profile },
    { title: 'Andrew Balis', bold: false, division: false, href: profile },
    { title: 'Dr Richard Grant', bold: false, division: false, href: profile },
    { title: '', bold: false, division: true },
  ],
  [
    { title: 'Merlbourne Team', bold: true, division: false, href: teamLink },
    { title: 'Martin Earley', bold: false, division: false, href: profile },
    { title: 'Warren Chandler', bold: false, division: false, href: profile },
    { title: 'Dr Seán Klinkradt', bold: false, division: false, href: profile },
    { title: '', bold: false, division: true, href: '' },
  ],
  [
    { title: 'About', bold: true, division: false },
    {
      title: 'The role of Australian patent attorneys',
      bold: false,
      division: false,
      href: '',
    },
    {
      title: 'How to choose an Australian patent attorney',
      bold: false,
      division: false,
      href: '',
    },
    {
      title: 'How to become a trade mark attorney',
      bold: false,
      division: false,
      href: '',
    },
  ],
]

export const subMenus2 = [
  [
    { title: 'Sydney Team', bold: true, division: false, href: teamLink },
    { title: 'Chris Baxter', bold: false, division: false, href: profile },
    { title: 'Dr Qi Zhang', bold: false, division: false, href: profile },
    { title: 'Naleesha Niranjan', bold: false, division: false, href: profile },
    { title: 'Julia Caunt', bold: false, division: false, href: profile },
    { title: 'Andrew Balis', bold: false, division: false, href: profile },
    { title: '', bold: false, division: true },
  ],
  [
    { title: 'Merlbourne Team', bold: true, division: false, href: teamLink },
    { title: 'Martin Earley', bold: false, division: false, href: profile },
    { title: 'Warren Chandler', bold: false, division: false, href: profile },
    { title: 'Jarrod Lichtblau', bold: false, division: false, href: profile },
    { title: '', bold: false, division: true, href: '' },
  ],
  [
    { title: 'About', bold: true, division: false },
    {
      title: 'The role of Australian patent attorneys',
      bold: false,
      division: false,
      href: '',
    },
    {
      title: 'How to become a trade mark attorney',
      bold: false,
      division: false,
      href: '',
    },
  ],
]

export const subMenus3 = [
  [{ title: 'Dr John Baxter', bold: false, division: false, href: teamLink }],
]

export const peopleIndustry = [
  { id: 0, item: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  { id: 1, item: [2, 7, 6, 3, 4, 5] },
  { id: 2, item: [2, 7, 6, 3] },
  { id: 3, item: [8, 4, 5] },
  { id: 4, item: [7, 6, 1, 3, 5] },
]

export const profiles = [
  {
    id: 0,
    teamName: 'all',
    teamMembers: [
      {
        id: 1,
        linkId: 'julia-caunt',
        name: 'Julia Caunt',
        positions: ['Senior Associate'],
        url: '/professionalProfiles/peoples/julia.jpg',
        link: '/profile/julia-caunt',
      },
      {
        id: 2,
        linkId: 'chris-baxter',
        name: 'Chris Baxter',
        positions: ['Managing Director'],
        url: '/professionalProfiles/peoples/chris.jpg',
        link: '/profile/chris-baxter',
      },
      {
        id: 3,
        linkId: 'martin-earley',
        name: 'Martin Earley',
        positions: [
          'Director',
          'Victoria region manager',
        ],
        url: '/professionalProfiles/peoples/martin.jpg',
        link: '/profile/martin-earley',
      },
      {
        id: 4,
        linkId: 'dr-seán-klinkradt',
        name: 'Dr Seán Klinkradt',
        positions: ['Senior Associate'],
        url: '/professionalProfiles/peoples/sean.jpg',
        link: '/profile/dr-seán-klinkradt',
      },
      {
        id: 5,
        linkId: 'warren-chandler',
        name: 'Warren Chandler',
        positions: ['Senior Associate'],
        url: '/professionalProfiles/peoples/warren.jpg',
        link: '/profile/warren-chandler',
      },
      {
        id: 6,
        linkId: 'andrew-balis',
        name: 'Andrew Balis',
        positions: ['Associate'],
        url: '/professionalProfiles/peoples/andrew.jpg',
        link: '/profile/andrew-balis',
      },
      {
        id: 7,
        linkId: 'dr-qi-zhang',
        name: 'Dr Qi Zhang',
        positions: ['Principal'],
        url: '/professionalProfiles/peoples/qi.jpg',
        link: '/profile/dr-qi-zhang',
      },
      {
        id: 8,
        linkId: 'dr-richard-grant',
        name: 'Dr Richard Grant',
        positions: ['Senior Patent Attorney'],
        url: '/professionalProfiles/peoples/richard.jpg',
        link: '/profile/dr-richard-grant',
      },
      {
        id: 9,
        linkId: 'john-baxter',
        name: 'John Baxter',
        positions: ['Senior Commercial Counsel'],
        url: '/professionalProfiles/peoples/john.jpg',
        link: '',
      },
    ],
  },
  {
    id: 1,
    teamName: 'Sydney teams',
    teamMembers: [
      {
        id: 1,
        linkId: 'julia-caunt',
        name: 'Julia Caunt',
        positions: ['Senior Associate'],
        url: '/professionalProfiles/peoples/julia.jpg',
        link: '/profile/julia-caunt',
      },
      {
        id: 2,
        linkId: 'chris-baxter',
        name: 'Chris Baxter',
        positions: ['Managing Director'],
        url: '/professionalProfiles/peoples/chris.jpg',
        link: '/profile/chris-baxter',
      },
      {
        id: 3,
        linkId: 'martin-earley',
        name: 'Martin Earley',
        positions: [
          'Director',
          'Victoria region manager',
        ],
        url: '/professionalProfiles/peoples/martin.jpg',
        link: '/profile/martin-earley',
      },
      {
        id: 4,
        linkId: 'dr-seán-klinkradt',
        name: 'Dr Seán Klinkradt',
        positions: ['Senior Associate'],
        url: '/professionalProfiles/peoples/sean.jpg',
        link: '/profile/dr-seán-klinkradt',
      },
      {
        id: 5,
        linkId: 'warren-chandler',
        name: 'Warren Chandler',
        positions: ['Senior Associate'],
        url: '/professionalProfiles/peoples/warren.jpg',
        link: '/profile/warren-chandler',
      },
      {
        id: 6,
        linkId: 'andrew-balis',
        name: 'Andrew Balis',
        positions: ['Associate'],
        url: '/professionalProfiles/peoples/andrew.jpg',
        link: '/profile/andrew-balis',
      },
      {
        id: 7,
        linkId: 'dr-qi-zhang',
        name: 'Dr Qi Zhang',
        positions: ['Principal'],
        url: '/professionalProfiles/peoples/qi.jpg',
        link: '/profile/dr-qi-zhang',
      },
      {
        id: 8,
        linkId: 'dr-richard-grant',
        name: 'Dr Richard Grant',
        positions: ['Senior Patent Attorney'],
        url: '/professionalProfiles/peoples/richard.jpg',
        link: '/profile/dr-richard-grant',
      },
      {
        id: 9,
        linkId: 'john-baxter',
        name: 'John Baxter',
        positions: ['Senior Commercial Counsel'],
        url: '/professionalProfiles/peoples/john.jpg',
        link: '',
      },
    ],
  },
  {
    id: 2,
    teamName: 'Melbourne teams',
    teamMembers: [
      {
        id: 1,
        linkId: 'julia-caunt',
        name: 'Julia Caunt',
        positions: ['Senior Associate'],
        url: '/professionalProfiles/peoples/julia.jpg',
        link: '/profile/julia-caunt',
      },
      {
        id: 2,
        linkId: 'chris-baxter',
        name: 'Chris Baxter',
        positions: ['Managing Director'],
        url: '/professionalProfiles/peoples/chris.jpg',
        link: '/profile/chris-baxter',
      },
      {
        id: 3,
        linkId: 'martin-earley',
        name: 'Martin Earley',
        positions: [
          'Director',
          'Victoria region manager',
        ],
        url: '/professionalProfiles/peoples/martin.jpg',
        link: '/profile/martin-earley',
      },
      {
        id: 4,
        linkId: 'dr-seán-klinkradt',
        name: 'Dr Seán Klinkradt',
        positions: ['Senior Associate'],
        url: '/professionalProfiles/peoples/sean.jpg',
        link: '/profile/dr-seán-klinkradt',
      },
      {
        id: 5,
        linkId: 'warren-chandler',
        name: 'Warren Chandler',
        positions: ['Senior Associate'],
        url: '/professionalProfiles/peoples/warren.jpg',
        link: '/profile/warren-chandler',
      },
      {
        id: 6,
        linkId: 'andrew-balis',
        name: 'Andrew Balis',
        positions: ['Associate'],
        url: '/professionalProfiles/peoples/andrew.jpg',
        link: '/profile/andrew-balis',
      },
      {
        id: 7,
        linkId: 'dr-qi-zhang',
        name: 'Dr Qi Zhang',
        positions: ['Principal'],
        url: '/professionalProfiles/peoples/qi.jpg',
        link: '/profile/dr-qi-zhang',
      },
      {
        id: 8,
        linkId: 'dr-richard-grant',
        name: 'Dr Richard Grant',
        positions: ['Senior Patent Attorney'],
        url: '/professionalProfiles/peoples/richard.jpg',
        link: '/profile/dr-richard-grant',
      },
      {
        id: 9,
        linkId: 'john-baxter',
        name: 'John Baxter',
        positions: ['Senior Commercial Counsel'],
        url: '/professionalProfiles/peoples/john.jpg',
        link: '',
      },
    ],
  },
]
