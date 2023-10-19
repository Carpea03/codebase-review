const teamLink = '/people'
const profile = '/attorneys'


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

export const awards = [
  { id: 0, title: 'IP Stars', width: 80, height: 26 },
  { id: 1, title: 'IAM 100', width: 55, height: 32 },
]

export const profiles = [
  {
    id: 0,
    teamName: 'all',
    teamMembers: [
      // {
      //   id: 1,
      //   linkId: 'julia-caunt',
      //   name: 'Julia Caunt',
      //   positions: ['Senior Associate'],
      //   url: '/professionalProfiles/peoples/julia.jpg',
      //   link: '/attorneys/julia-caunt',
      //   awards: []
      // },
      {
        id: 1,
        linkId: 'chris-baxter',
        name: 'Chris Baxter',
        positions: ['Managing Director'],
        url: '/professionalProfiles/profiles/chris.jpg',
        link: '/attorneys/chris-baxter',
        zh: "https://www.baxterip.com.au/zh/%E6%82%89%E5%B0%BC/%E5%85%8B%E9%87%8C%E6%96%AF%E5%B7%B4%E5%85%8B%E6%96%AF%E7%89%B9",
        awards: [0, 1],
        isShow: true,
      },
      {
        id: 2,
        linkId: 'martin-earley',
        name: 'Martin Earley',
        positions: ['Director'],
        url: '/professionalProfiles/profiles/martin.jpg',
        link: '/attorneys/martin-earley',
        zh: "https://www.baxterip.com.au/zh/%E5%A2%A8%E5%B0%94%E6%9C%AC/%E9%A9%AC%E4%B8%81%E5%8E%84%E8%80%8C%E5%88%A9",
        awards: [1],
        isShow: true,
      },
      {
        id: 3,
        linkId: 'sean-klinkradt',
        name: 'Dr Seán Klinkradt',
        positions: ['Senior Associate'],
        url: '/professionalProfiles/profiles/sean.jpg',
        link: '/attorneys/sean-klinkradt',
        zh: "https://www.baxterip.com.au/zh/%E5%A2%A8%E5%B0%94%E6%9C%AC/%E8%82%96%E6%81%A9%E5%85%8B%E6%9E%97%E5%85%8B%E6%8B%89%E5%BE%B7",
        awards: [1],
        isShow: true,
      },
      {
        id: 4,
        linkId: 'warren-chandler',
        name: 'Warren Chandler',
        positions: ['Senior Associate'],
        url: '/professionalProfiles/profiles/warren.jpg',
        link: '/attorneys/warren-chandler',
        zh: "https://www.baxterip.com.au/zh/%E5%A2%A8%E5%B0%94%E6%9C%AC/%E6%B2%83%E4%BC%A6%E9%92%B1%E5%BE%B7%E5%8B%92",
        awards: [],
        isShow: true,
      },
      // {
      //   id: 5,
      //   linkId: 'andrew-balis',
      //   name: 'Andrew Balis',
      //   positions: ['Associate'],
      //   url: '/professionalProfiles/profiles/andrew.jpg',
      //   link: '/attorneys/andrew-balis',
      //   zh: "https://www.baxterip.com.au/zh/%E6%82%89%E5%B0%BC/%E5%AE%89%E5%BE%B7%E9%B2%81%E5%B7%B4%E5%88%A9%E6%96%AF",
      //   awards: [],
      //   isShow: true,
      // },
      {
        id: 6,
        linkId: 'qi-zhang',
        name: 'Dr Qi Zhang',
        positions: ['Principal'],
        url: '/professionalProfiles/profiles/qi.jpg',
        link: '/attorneys/qi-zhang',
        zh: "https://www.baxterip.com.au/zh/%E6%82%89%E5%B0%BC/%E5%BC%A0%E6%97%97%E5%8D%9A%E5%A3%AB",
        awards: [],
        isShow: true,
      },
      {
        id: 7,
        linkId: 'richard-grant',
        name: 'Dr Richard Grant',
        positions: ['Senior Patent Attorney'],
        url: '/professionalProfiles/profiles/richard.jpg',
        link: '/attorneys/richard-grant',
        zh: "https://www.baxterip.com.au/zh/%E6%82%89%E5%B0%BC/%E7%90%86%E6%9F%A5%E5%BE%B7%E6%A0%BC%E5%85%B0%E7%89%B9%E5%8D%9A%E5%A3%AB",
        awards: [],
        isShow: true,
      },
      {
        id: 8,
        linkId: 'john-baxter',
        name: 'John Baxter',
        positions: ['Senior Commercial Counsel'],
        url: '/professionalProfiles/peoples/john.jpg',
        link: '',
        awards: [],
        isShow: false,
      },
    ],
  },
  {
    id: 1,
    teamName: 'Sydney teams',
    teamMembers: [
      {
        id: 1,
        linkId: 'chris-baxter',
        name: 'Chris Baxter',
        positions: ['Managing Director'],
        url: '/professionalProfiles/profiles/chris.jpg',
        link: '/attorneys/chris-baxter',
        awards: [0, 1],
      },
      // {
      //   id: 2,
      //   linkId: 'andrew-balis',
      //   name: 'Andrew Balis',
      //   positions: ['Associate'],
      //   url: '/professionalProfiles/profiles/andrew.jpg',
      //   link: '/attorneys/andrew-balis',
      //   awards: [],
      // },
      {
        id: 3,
        linkId: 'qi-zhang',
        name: 'Dr Qi Zhang',
        positions: ['Principal'],
        url: '/professionalProfiles/profiles/qi.jpg',
        link: '/attorneys/qi-zhang',
        awards: [],
      },
      {
        id: 4,
        linkId: 'richard-grant',
        name: 'Dr Richard Grant',
        positions: ['Senior Patent Attorney'],
        url: '/professionalProfiles/profiles/richard.jpg',
        link: '/attorneys/richard-grant',
        awards: [],
      },
    ],
  },
  {
    id: 2,
    teamName: 'Melbourne teams',
    teamMembers: [
      {
        id: 1,
        linkId: 'martin-earley',
        name: 'Martin Earley',
        positions: [
          'Director',
          'Victoria region manager',
        ],
        url: '/professionalProfiles/profiles/martin.jpg',
        link: '/attorneys/martin-earley',
        awards: [1],
      },
      {
        id: 2,
        linkId: 'sean-klinkradt',
        name: 'Dr Seán Klinkradt',
        positions: ['Senior Associate'],
        url: '/professionalProfiles/profiles/sean.jpg',
        link: '/attorneys/sean-klinkradt',
        awards: [1],
      },
      {
        id: 3,
        linkId: 'warren-chandler',
        name: 'Warren Chandler',
        positions: ['Senior Associate'],
        url: '/professionalProfiles/profiles/warren.jpg',
        link: '/attorneys/warren-chandler',
        awards: [],
      },
    ],
  },
]
