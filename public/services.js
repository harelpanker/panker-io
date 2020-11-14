import uuid from 'react-uuid';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'; // secure
import PaletteIcon from '@material-ui/icons/Palette'; // design
import AdjustIcon from '@material-ui/icons/Adjust'; // seo

const services = [
  {
    id: uuid(),
    title: 'design and build',
    body:
      'I design products and services that put the experience of your customers and the positive impact on your business in the center.',
    icon: <PaletteIcon />,
  },
  {
    id: uuid(),
    title: 'hosting, security, and maintenance',
    body:
      "Powered by Amazon Web Services & Fastly, I'm using the best hosting out there making sure your website is in good hands. You will never need to update your site or create a backup, You are covered!",
    icon: <VerifiedUserIcon />,
  },
  {
    id: uuid(),
    title: 'Search engine optimization (SEO)',
    body:
      'I create the website with the best SEO practice in mind, as well as connecting it to google platforms so people can find you with ease.',
    icon: <AdjustIcon />,
  },
  // {
  //   id: uuid(),
  //   title: 'MAINTENANCE & Advanced CMS',
  //   body:
  //     'You will never need to update your website to perform well, manage security, or create a backup, and your website will be ease to use.',
  //   img: './images-what-we-deliver/use.svg',
  // },
];

export default services;
