import {
    IconOne,
    IconTwo,
    IconThree,
    IconFour,
    IconFive,
    IconSix,
    AuthorOne,
    AuthorTwo,
    AuthorThree,
} from './images';

// Feature Section Content
export const FEATURES_DATA = [{
        title: 'Domain Registration & Web Hosting',
        description: 'We have support team for 24/7 operation. They provide help and ongoing assistance at any time.',
        icon: 'flaticon-trophy violate',
        animation: true,
    },
    {
        title: 'Website Design & Development',
        description: 'Transferring from another host? Our expert support team is standing by to transfer your site.',
        icon: 'flaticon-startup yellow',
        animation: true,
    },
    {
        title: 'Dedicated Server & Cloud Hosting',
        description: 'LiteSpeed Web Server is a high-performance HTTP server and known for its high performance.',
        icon: 'flaticon-creative green',
        animation: true,
    },
];

// FAQ Section Content
export const FAQ_DATA = [{
        "expend": true,
        "title": "What kind of research does openstreet provide?",
        "description": "Openstreet provides top-level ratings matrix for stocks as well as Stock-specific research which is broken down into company analysis, insider analysis and institutional analysis. "
    },
    {
        "title": "What does the top-level ratings matrix consist of and how is it computed?",
        "description": "The top-level rating matrix is computed through the aggregation of the metrics in the following 8 risk categories by listing, then calculation of the CDF for each of the listings, based on the distribution obtained. "
    },
    {
        "title": "What is the universe of stocks that are screened in this report?",
        "description": "Openstreet mainly analyzes stocks in the S&P 500 index. These stocks are the major movers of the stock market."
    },
    {
        "title": "What data is used to prepare the research report?",
        "description": "OpenStreet derives analytics from Quandl, Sharadar fundamental data which is extracted, standardized and organized from the company filings."
    }
];

// Service Section Content
export const SERVICES_DATA = [{
        title: 'Development Server ',
        description: 'Get Lightspeed Development Server for your website and fly in the web',
        icon: `${IconOne}`,
    },
    {
        title: 'Web Protection',
        description: 'Best Protection and some tools are provided with our Web servers .',
        icon: `${IconTwo}`,
    },
    {
        title: 'E-commerce Shop',
        description: 'You can build any kind of E-commerce Shop with payment security tools',
        icon: `${IconThree}`,
    },
    {
        title: 'Money Back Guarantee',
        description: 'We have provided 30 days money back guarantee for our customer',
        icon: `${IconFour}`,
    },
    {
        title: 'Client Satisfaction',
        description: 'Client Satisfaction is our first priority and We are best at it',
        icon: `${IconFive}`,
    },
    {
        title: '24/7 Online Support',
        description: 'A Dedicated support team is always ready to provide best support ',
        icon: `${IconSix}`,
    },
];

export const MENU_ITEMS = [{
        label: 'Home',
        path: '#banner_section',
        offset: '70',
    },
    {
        label: 'Feature',
        path: '#feature_section',
        offset: '70',
    },
    {
        label: 'Service',
        path: '#service_section',
        offset: '70',
    },
    {
        label: 'Testimonial',
        path: '#testimonial_section',
        offset: '70',
    },
    {
        label: 'FAQ',
        path: '#faq_section',
        offset: '70',
    },
    {
        label: 'Contact',
        path: '#contact_section',
        offset: '70',
    },
];

export const FOOTER_WIDGET = [{
        title: 'About Us',
        menuItems: [{
                url: '#',
                text: 'Support Center',
            },
            {
                url: '#',
                text: 'Customer Support',
            },
            {
                url: '#',
                text: 'About Us',
            },
            {
                url: '#',
                text: 'Copyright',
            },
            {
                url: '#',
                text: 'Popular Campaign',
            },
        ],
    },
    {
        title: 'Our Information',
        menuItems: [{
                url: '#',
                text: 'Return Policy',
            },
            {
                url: '#',
                text: 'Privacy Policy',
            },
            {
                url: '#',
                text: 'Terms & Conditions',
            },
            {
                url: '#',
                text: 'Site Map',
            },
            {
                url: '#',
                text: 'Store Hours',
            },
        ],
    },
    {
        title: 'My Account',
        menuItems: [{
                url: '#',
                text: 'Press inquiries',
            },
            {
                url: '#',
                text: 'Social media directories',
            },
            {
                url: '#',
                text: 'Images & B-roll',
            },
            {
                url: '#',
                text: 'Permissions',
            },
            {
                url: '#',
                text: 'Speaker requests',
            },
        ],
    },
    {
        title: 'Policy',
        menuItems: [{
                url: '#',
                text: 'Application security',
            },
            {
                url: '#',
                text: 'Software principles',
            },
            {
                url: '#',
                text: 'Unwanted software policy',
            },
            {
                url: '#',
                text: 'Responsible supply chain',
            },
        ],
    },
];

export const MONTHLY_PRICING_TABLE = [{
        freePlan: true,
        name: 'Basic Account',
        description: 'For Small teams or group who need to build website ',
        price: '$0',
        priceLabel: 'Only for first month',
        buttonLabel: 'CREATE FREE ACCOUNT',
        url: '#',
        listItems: [{
                content: 'Drag & Drop Builder',
            },
            {
                content: '1,000s of Templates Ready',
            },
            {
                content: 'Blog Tools',
            },
            {
                content: 'eCommerce Store ',
            },
            {
                content: '30+ Webmaster Tools',
            },
        ],
    },
    {
        name: 'Business Account',
        description: 'For Mediums teams or group who need to build website ',
        price: '$9.87',
        priceLabel: 'Per month & subscription yearly',
        buttonLabel: 'START FREE TRIAL',
        url: '#',
        listItems: [{
                content: 'Drag & Drop Builder',
            },
            {
                content: '1,000s of Templates Ready',
            },
            {
                content: 'Blog Tools',
            },
            {
                content: 'eCommerce Store ',
            },
            {
                content: '30+ Webmaster Tools',
            },
        ],
    },
    {
        name: 'Premium Account',
        description: 'For Large teams or group who need to build website ',
        price: '$12.98',
        priceLabel: 'Per month & subscription yearly',
        buttonLabel: 'START FREE TRIAL',
        url: '#',
        listItems: [{
                content: 'Drag & Drop Builder',
            },
            {
                content: '1,000s of Templates Ready',
            },
            {
                content: 'Blog Tools',
            },
            {
                content: 'eCommerce Store ',
            },
            {
                content: '30+ Webmaster Tools',
            },
        ],
    },
];

export const YEARLY_PRICING_TABLE = [{
        freePlan: true,
        name: 'Basic Account',
        description: 'For a single client or team who need to build website ',
        price: '$0',
        priceLabel: 'Only for first month',
        buttonLabel: 'CREATE FREE ACCOUNT',
        url: '#',
        listItems: [{
                content: 'Drag & Drop Builder',
            },
            {
                content: '1,000s of Templates Ready',
            },
            {
                content: 'Blog Tools',
            },
            {
                content: 'eCommerce Store ',
            },
            {
                content: '30+ Webmaster Tools',
            },
        ],
    },
    {
        name: 'Business Account',
        description: 'For Small teams or group who need to build website ',
        price: '$6.00',
        priceLabel: 'Per month & subscription yearly',
        buttonLabel: 'START FREE TRIAL',
        url: '#',
        listItems: [{
                content: 'Unlimited secure storage',
            },
            {
                content: '2,000s of Templates Ready',
            },
            {
                content: 'Blog Tools',
            },
            {
                content: '24/7 phone support',
            },
            {
                content: '50+ Webmaster Tools',
            },
        ],
    },
    {
        name: 'Premium Account',
        description: 'For Large teams or group who need to build website ',
        price: '$9.99',
        priceLabel: 'Per month & subscription yearly',
        buttonLabel: 'START FREE TRIAL',
        url: '#',
        listItems: [{
                content: 'Drag & Drop Builder',
            },
            {
                content: '3,000s of Templates Ready',
            },
            {
                content: 'Advanced branding',
            },
            {
                content: 'Knowledge base support',
            },
            {
                content: '80+ Webmaster Tools',
            },
        ],
    },
];

export const TESTIMONIALS = [{
        review: 'Best working experience  with this amazing team & in future, we want to work together',
        name: 'Jon Doe',
        designation: 'CEO of Dell Co.',
        avatar: `${AuthorOne}`,
    },
    {
        review: 'Impressed with master class support of the team and really look forward for the future.',
        name: 'Jon Doe',
        designation: 'Co Founder of IBM',
        avatar: `${AuthorTwo}`,
    },
    {
        review: 'I have bought more than 10 themes on ThemeForest, and this is the first one I review.',
        name: 'Jeny Doe',
        designation: 'Manager of Hp co.',
        avatar: `${AuthorThree}`,
    },
];

export const DOMAIN_NAMES = [{
        label: '.com',
        value: 'com',
    },
    {
        label: '.net',
        value: 'net',
    },
    {
        label: '.org',
        value: 'org',
    },
    {
        label: '.co',
        value: 'co',
    },
    {
        label: '.edu',
        value: 'edu',
    },
    {
        label: '.me',
        value: 'me',
    },
];

export const DOMAIN_PRICE = [{
        content: '.com $9.26',
    },
    {
        content: '.sg $7.91',
    },
    {
        content: '.space $12.54',
    },
    {
        content: '.info $9.13',
    },
    {
        content: '& much more',
        url: '#',
    },
];