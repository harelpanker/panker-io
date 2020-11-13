import uuid from 'react-uuid';

const pricingList = [
  {
    id: uuid(),
    title: 'Single Page',
    img: './images/brush-icon.svg',
    price: '349',
    tags: [
        { id: uuid(), tag: 'One Page' },
        { id: uuid(), tag: 'Lead Form to Bring in New Clients' },
        { id: uuid(), tag: 'SEO + Google Analytics' },
        { id: uuid(), tag: 'Mobile-Friendly / Responsive Design' },
        { id: uuid(), tag: 'Online Training' },
        { id: uuid(), tag: 'Ready in 1 weeks' },
    ]
  },
  {
    id: uuid(),
    title: 'Full Site',
    img: './images/puzzle-icon.svg',
    price: '749',
    tags: [
        { id: uuid(), tag: 'Up to 10 Conversion-Optimized Pages' },
        { id: uuid(), tag: 'Lead Form to Bring in New Clients' },
        { id: uuid(), tag: 'SEO + Google Analytics' },
        { id: uuid(), tag: 'Mobile-Friendly / Responsive Design' },
        { id: uuid(), tag: 'Online Training' },
        { id: uuid(), tag: 'Up to 3 Rounds of Revisions' },
        { id: uuid(), tag: 'Lead Management System' },
        { id: uuid(), tag: 'Ready in 2 weeks' },
    ]
  },
  {
    id: uuid(),
    title: 'E-Commerce',
    img: './images/tag-icon.svg',
    price: '999',
    tags: [
        { id: uuid(), tag: 'Up to 10 Conversion-Optimized Pages' },
        { id: uuid(), tag: 'Lead Form to Bring in New Clients' },
        { id: uuid(), tag: 'SEO + Google Analytics' },
        { id: uuid(), tag: 'Mobile-Friendly / Responsive Design' },
        { id: uuid(), tag: 'Online Training' },
        { id: uuid(), tag: 'Up to 3 Rounds of Revisions' },
        { id: uuid(), tag: 'Lead Management System' },
        { id: uuid(), tag: 'E-Commerce functionality' },
        { id: uuid(), tag: 'Ready in 2 weeks' },
    ]
  },
];

export default pricingList;
