import { DefaultConfigProps } from '@types';
import {
  carelibrary,
  identitykey,
  smdlogo,
  documentImg,
  dbslogo,
  drivertoklogo,
  fosterapplogo,
  address,
  aml,
  assisted,
  biometric,
  buzzhrlogo,
  mortgagebasket,
  rndlogo,
  globalMindedImage,
  highlyAutomatedImage,
  userFocusedImage,
  fastDecisions,
  fileCoverage,
  moreConversion,
  simpleExperiance,
  documentHome,
  drawingHome,
  identityHome,
  convertMore,
  lineOnboarding,
  reduceFriction,
  verifyFaster,
  complyImage,
  fakeidImage,
  convertUsersImage,
  reduceFrictionImage,
  softwareHero,
  identityHeroImage,
  proofHero,
  detectFack,
  complyRegulation,
  instantDesision,
  fewerManual,
  betterFraud,
  scalability,
} from '@images';

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const REQUEST_STATUS = {
  IDEL: 'idel',
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILURE: 'failure',
  NOCONTENT: 'nocontent',
};

export const themeConfig: DefaultConfigProps = {
  defaultPath: '/dashboard',
  fontFamily: `'Public Sans', sans-serif`,
  i18n: 'en',
  miniDrawer: false,
  container: true,
  mode: 'light',
  presetColor: 'default',
  themeDirection: 'ltr',
};

// header data

export const Services = [
  {
    id: 1,
    link: '/services/identity-verification-solution',
    image: identitykey,
    title: 'Identity Verification Solution',
    description: 'Full-service identity verification solution',
  },
  {
    id: 2,
    image: documentImg,
    link: '/services/document-verification-software',
    title: 'Document Verification Software',
    description: 'Verify identity documents in real-time',
  },
  {
    id: 3,
    image: address,
    link: '/services/proof-of-address',
    title: 'Proof of Address',
    description: 'Automate your Proof of Address process',
  },
];

export const Product = [
  {
    id: 1,
    image: mortgagebasket,
    link: '/',
    title: 'Mortgage Basket',
    description: 'Mortgage and solicitor services',
  },
  {
    id: 2,
    image: dbslogo,
    link: '/',
    title: 'Check My DBS',
    description: 'Ensuring the safety of organizations',
  },
  {
    id: 3,
    image: fosterapplogo,
    link: '/',
    title: 'Foster App',
    description: 'HR files & foster parent files',
  },
  {
    id: 4,
    image: rndlogo,
    link: '/',
    title: 'RND Tax Claims',
    description: 'Tax Claims management system',
  },
  {
    id: 5,
    image: drivertoklogo,
    link: '/',
    title: 'Driver Tok',
    description: 'Solutions to charging stations',
  },
  {
    id: 6,
    image: carelibrary,
    link: '/',
    title: 'Care Library',
    description: 'Shift management system',
  },
  {
    id: 7,
    image: smdlogo,
    link: '/',
    title: 'Share My Dine',
    description: 'Dining services',
  },
  {
    id: 8,
    image: buzzhrlogo,
    link: '/',
    title: 'BuzzHR',
    description: 'Employee management system',
  },
];

export const Resources = [
  {
    id: 1,
    title: 'Case Studies',
    link: '/',
    description: 'Who we’re working with',
  },
  {
    id: 2,
    title: 'Help Center',
    link: '/',
    description: 'FAQs',
  },
  {
    id: 3,
    title: 'Documentation',
    link: '/',
    description: 'Find answers to your questions',
  },
];

export const About = [
  {
    id: 1,
    title: 'Our Mission',
    link: '/',
    description: ' Identity Gram timeline & meet our team',
  },
  {
    id: 2,
    title: 'Careers',
    link: '/',
    description: 'Join the growing Identity Gram team',
  },
  {
    id: 3,
    title: 'Partner With Us',
    link: '/',
    description: ' Access the Identity Gram press kit',
  },
];

export const pages = [
  {
    id: 0,
    name: 'Services',
    items: Services,
  },
  {
    id: 1,
    name: 'Products',
    items: Product,
  },
  {
    id: 2,
    name: 'Resources',
    items: Resources,
  },
  {
    id: 3,
    name: 'About',
    items: About,
  },
];

export const salesSiteFooterData = [
  {
    title: 'Services',
    content: [
      {
        subTitle: 'Identity Verification Solution',
        link: '/services/identity-verification-solution',
      },
      {
        subTitle: 'Document Verification Software',
        link: '/services/document-verification-software',
      },
      { subTitle: 'Proof of Address', link: '/services/proof-of-address' },
    ],
  },
  {
    title: 'Resources',
    content: [
      { subTitle: 'Case Studies', link: '' },
      { subTitle: 'Help Center', link: '' },
      { subTitle: 'Documentation', link: '' },
    ],
  },
  {
    title: 'About',
    content: [
      { subTitle: 'Our Mission', link: '' },
      { subTitle: 'Careers', link: '' },
      { subTitle: 'Partner With Us', link: '' },
    ],
  },
];

export const PolicyLinks = [
  {
    id: 1,
    name: 'Privacy Policy',
    link: '/',
    divider: '|',
  },
  {
    id: 1,
    name: 'Cookie Policy',
    link: '/',
    divider: '|',
  },
  {
    id: 1,
    name: 'Responsibility Disclosure',
    link: '/',
    divider: '|',
  },
  {
    id: 1,
    name: 'Security and Compliance',
    link: '/',
    divider: '|',
  },
  {
    id: 1,
    name: 'Recruitment Policy',
    link: '/',
    divider: '',
  },
];

export const complianceAndFraud = [
  {
    title: 'Highly automated',
    subTitle: '98% check automation rate powered by AI.',
    image: highlyAutomatedImage,
  },
  {
    title: 'User focused',
    subTitle: '95% of users get through on their first try.',
    image: userFocusedImage,
  },
  {
    title: 'Global minded',
    subTitle: 'Government-issued IDs covered',
    image: globalMindedImage,
  },
];

export const solutionCardDataOfHome = [
  {
    title: 'Fast Decisions',
    subTitle:
      '98% check automation rate gets customers through in about 6 seconds.',
    image: fastDecisions,
  },
  {
    title: 'Simple Experience',
    subTitle:
      'Real-time end user feedback and fewer steps gets 95% of users through on the first try.',
    image: simpleExperiance,
  },
  {
    title: 'File Coverage',
    subTitle:
      'An unmatched 10K+, and growing, government-issued IDs are covered.',
    image: fileCoverage,
  },
  {
    title: 'More Conversions',
    subTitle:
      'Up to 30% more customer conversions with superior accuracy and user experience.',
    image: moreConversion,
  },
];

export const serviceCardDataOfHome = [
  {
    id: 1,
    title: 'Identity Verification Solution',
    subTitle: 'Full-service online identity verification ',
    image: identityHome,
    slideImage: identityHeroImage,
  },
  {
    id: 2,
    title: 'Document Verification Software',
    subTitle: 'Full-service online identity verification ',
    image: documentHome,
    slideImage: softwareHero,
  },
  {
    id: 3,
    title: 'Proof of Address',
    subTitle: 'Full-service online identity verification ',
    image: drawingHome,
    slideImage: proofHero,
  },
];

export const solutionCardDataOfIdentityVerification = [
  {
    title: 'Convert more users',
    subTitle:
      'With Identity Gram superior accuracy and user experience,convert more real customers.',
    image: convertMore,
  },
  {
    title: 'Reduce friction',
    subTitle:
      'Get users through identity verification in fewer steps and unnecessary user actions.',
    image: reduceFriction,
  },
  {
    title: 'Verify faster',
    subTitle:
      'Get accurate results in an average of 6 seconds and increase customer retention customer retention.',
    image: verifyFaster,
  },
  {
    title: 'Streamline onboarding',
    subTitle:
      'Up to 30% more customer conversions with superior accuracy and user experience.',
    image: lineOnboarding,
  },
];

export const softwareCardDataOfDocumentVerification = [
  {
    title: 'Detect fake & tampered IDs',
    subTitle:
      'With Identity Gram superior accuracy and user experience, convert more real customers.',
    image: detectFack,
  },
  {
    title: 'Extract & verify data',
    subTitle:
      'Get users through identity verification in fewer steps and unnecessary user actions.',
    image:  reduceFriction,
  },
  {
    title: 'Comply with regulations',
    subTitle:
      'Get accurate results in an average of 6 seconds and increase customer retention.',
    image: complyRegulation,
  },
  {
    title: 'Convert more users',
    subTitle:
      'Up to 30% more customer conversions with superior accuracy and user experience.',
    image: convertMore,
  },
];

export const standingCardDataOfDocumentVerification = [
  {
    title: 'Highly automated',
    subTitle: '98% check automation rate powered by AI.',
    image: highlyAutomatedImage,
  },
  {
    title: 'User focused',
    subTitle: '95% of users get through on their first try.',
    image: userFocusedImage,
  },
  {
    title: 'Global minded',
    subTitle: 'Government-issued IDs covered',
    image: globalMindedImage,
  },
];

export const proofCardDataOfProofAddress = [
  {
    title: 'Instant decisions',
    subTitle:
      'Instantly approve honest users instead of making them wait hours, days, or even weeks.',
    image: instantDesision,
  },
  {
    title: 'Fewer manual processes',
    subTitle:
      'Reduce human error and the need for manual resources by automating POA data extraction.',
    image: fewerManual,
  },
  {
    title: 'Better fraud detection',
    subTitle:
      'Identity Gram’s data-driven fraud detection is consistent, auditable, and reliably detects fraudulent forms of identification.',
    image: betterFraud,
  },
  {
    title: 'Scalability',
    subTitle:
      'Identity Gram’s POA can grow with your company’s needs and keep up with times of increased user demand.',
    image: scalability,
  },
];
