import Listwish1 from '../Main/Images/Listwish1'
import Listwish2 from '../Main/Images/Listwish2'
import Listwish3 from '../Main/Images/Listwish3'
import Listwish4 from '../Main/Images/Listwish4'
import Tentare1 from '../Main/Images/Tentare1'
import Tentare2 from '../Main/Images/Tentare2'
import Tentare3 from '../Main/Images/Tentare3'
import Tentare4 from '../Main/Images/Tentare4'
import Zippal1 from '../Main/Images/Zippal1'
import Zippal2 from '../Main/Images/Zippal2'
import Zippal3 from '../Main/Images/Zippal3'
import Zippal4 from '../Main/Images/Zippal4'
import Zippal5 from '../Main/Images/Zippal5'

export const projectData = [
  {
    id: 1,
    images: [
      { id: 1, url: Listwish1 },
      { id: 2, url: Listwish2 },
      { id: 3, url: Listwish3 },
      { id: 4, url: Listwish4 }
    ],
    content: {
      title: "ListWish",
      desc:
        "DiscCaddy is your companion on the course. With DiscCaddy you can: keep track of your round by creating a scorecard, add the discs you own to your DiscCaddy bag, and get a recommended disc based on your selected shot type and the discs you own. DiscCaddy helps you think about shot shapes and disc flight characteristics. It also allows you to view all your previous scorecards to track your scores over time.",
      stack: {
        client: "JavaScript, React, React Router, Context, Jest",
        server: "Node.js, Express.js, bcryptjs, JWT, PostgreSQL, Mocha, Chai",
      },
      links: {
        client: "https://github.com/lipcowan/listWish-client",
        server: "https://github.com/lipcowan/listWish-server",
        live: "https://listwish.vercel.app/",
      },
    },
  },
  {
    id: 2,
    images: [
      { id: 1, url: Tentare1 },
      { id: 2, url: Tentare2 },
      { id: 3, url: Tentare3 },
      { id: 4, url: Tentare4 }
    ],
    content: {
      title: "Tentare",
      desc:
        `Tentare was created with the purpose of learning Italian through the tried and true method of spaced repetition. Spaced repetition concept is a learning technique that allows a user to review material at gradually increasing intervals. Once the Italian word presented is translated correctly, the word will be "pushed" back into the "deck" of words and will be encountered less often, whereas a word translated incorrectly will appear sooner so that they user can have more exposure to that specific word.`,
      stack: {
        client: "JavaScript, React, React Router, Context, Cypress",
        server: "Node.js, Express.js, bcryptjs, JWT, PostgreSQL, Mocha, Chai",
      },
      links: {
        client: "https://github.com/lipcowan/Tentare-Client",
        server: "https://github.com/lipcowan/Tentare-Api",
        live: "https://tentare.vercel.app/",
      },
    },
  },
  {
    id: 3,
    images: [
      { id: 1, url: Zippal1 },
      { id: 2, url: Zippal2 },
      { id: 3, url: Zippal3 },
      { id: 4, url: Zippal4 },
      { id: 5, url: Zippal5 },
    ],
    content: {
      title: "Zip Pal",
      desc:
        "Zip Pal is a pen pal app developed to help users escape the isolation of quarantine during the COVID-19 pandemic. The app aims to replicate a real pen pal experience. To accomplish this, there is a 6-hour delay before a sent message can be read, users take turns sending messages, and users are given random pen pals and decide to initiate a conversation based on a brief bio. These constraints reduce the pressure of immediate responses and promote long-form, thoughtful messages.",
      stack: {
        client: "JavaScript, React, React Router, Context, Jest, Enzyme",
        server: "Node.js, Express.js, bcryptjs, JWT, xss, PostgreSQL, Mocha, Chai",
      },
      links: {
        client: "https://github.com/lipcowan/ZipPal-Client",
        server: "https://github.com/lipcowan/ZipPal-Server",
        live: "https://zippals.vercel.app/",
      },
    },
  },
];
