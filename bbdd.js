import 'dotenv/config';

export const projects = [
    {
        name:'PomoDoIt',
        description:'A productivity SPA that combines the Pomodoro technique and the use of todos for help you with your time administration.',
        technologies: [{ img: process.env.DOMAIN_URL + '/images/nextjs.svg', name: 'nextjs' }, { img: process.env.DOMAIN_URL + '/images/styledcomponents.svg', name: 'styledcomponents' }, { img: process.env.DOMAIN_URL + '/images/express.svg', name: 'express' }, { img: process.env.DOMAIN_URL + '/images/mongodb.svg', name: 'mongodb' }],
        img: process.env.DOMAIN_URL + '/images/pomodoit.png',
        url:'https://pomodoit-client.vercel.app/'
    },
    {
        name:'Pet Shelter',
        description:'A simple SPA that tries to simulate an adoption system for a pet shelter',
        technologies: [{ img: process.env.DOMAIN_URL + '/images/react.svg', name: 'react' }, { img: process.env.DOMAIN_URL + '/images/bootstrap.svg', name: 'bootstrap' }, { img: process.env.DOMAIN_URL + '/images/reactrouter.svg', name: 'reactrouter' }, { img: process.env.DOMAIN_URL + '/images/socketio.svg', name: 'socketio' }],
        img: process.env.DOMAIN_URL + '/images/pet-shelter.png',
        url:'https://github.com/abelqh9/pet-shelter'
    },
    {
        name:'Countries App',
        description:'A basic SPA created only with vanilla js (frontend mentor challenge)',
        technologies: [{ img: process.env.DOMAIN_URL + '/images/html.svg', name: 'html' }, { img: process.env.DOMAIN_URL + '/images/css.svg', name: 'css' }, { img: process.env.DOMAIN_URL + '/images/javascript.svg', name: 'javascript' }],
        img: process.env.DOMAIN_URL + '/images/countries-app.png',
        url:'https://countries-app-neon.vercel.app/'
    },
    {
        name:'Bookmark Landing Page',
        description:'A responsive landing page (frontend mentor challenge)',
        technologies: [{ img: process.env.DOMAIN_URL + '/images/html.svg', name: 'html' }, { img: process.env.DOMAIN_URL + '/images/sass.svg', name: 'sass' }, { img: process.env.DOMAIN_URL + '/images/javascript.svg', name: 'javascript' }],
        img: process.env.DOMAIN_URL + '/images/bookmark-landing-page.png',
        url:'https://bookmark-landing-page-abelqh9.vercel.app/'
    },
];

export const technologiesWithMoreExperience = [
    { img: process.env.DOMAIN_URL + '/images/html.svg', name: 'html' },
    { img: process.env.DOMAIN_URL + '/images/css.svg', name: 'css' },
    { img: process.env.DOMAIN_URL + '/images/bootstrap.svg', name: 'bootstrap' },
    { img: process.env.DOMAIN_URL + '/images/sass.svg', name: 'sass' },
    { img: process.env.DOMAIN_URL + '/images/javascript.svg', name: 'javascript' },
    { img: process.env.DOMAIN_URL + '/images/react.svg', name: 'react' },
    { img: process.env.DOMAIN_URL + '/images/nextjs.svg', name: 'nextjs' },
    { img: process.env.DOMAIN_URL + '/images/styledcomponents.svg', name: 'styledcomponents' },
    { img: process.env.DOMAIN_URL + '/images/express.svg', name: 'express' },
    { img: process.env.DOMAIN_URL + '/images/node.svg', name: 'node' },
    { img: process.env.DOMAIN_URL + '/images/mongodb.svg', name: 'mongodb' },
    { img: process.env.DOMAIN_URL + '/images/git.svg', name: 'git' },
    { img: process.env.DOMAIN_URL + '/images/github.svg', name: 'github' },
]

export const technologiesWithLessExperience = [
    { img: process.env.DOMAIN_URL + '/images/python.svg', name: 'python' },
    { img: process.env.DOMAIN_URL + '/images/flask.svg', name: 'flask' },
    { img: process.env.DOMAIN_URL + '/images/java.svg', name: 'java' },
    { img: process.env.DOMAIN_URL + '/images/spring.svg', name: 'spring' },
    { img: process.env.DOMAIN_URL + '/images/mysql.svg', name: 'mysql' },
]