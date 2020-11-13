import Listwish1 from '../Main/Images/Listwish1.png'
import Listwish2 from '../Main/Images/Listwish2.png'
import Listwish3 from '../Main/Images/Listwish3.png'
import Listwish4 from '../Main/Images/Listwish4.png'
import Tentare1 from '../Main/Images/Tentare1.png'
import Tentare2 from '../Main/Images/Tentare2.png'
import Tentare3 from '../Main/Images/Tentare3.png'
import Tentare4 from '../Main/Images/Tentare4.png'
import Zippal1 from '../Main/Images/Zippal1.png'
import Zippal2 from '../Main/Images/Zippal2.png'
import Zippal3 from '../Main/Images/Zippal3.png'
import Zippal4 from '../Main/Images/Zippal4.png'
import Zippal5 from '../Main/Images/Zippal5.png'

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
        `I wanted to make an app that non-profits could use for their wishlists, they're always in need of items for donations but often getting items they don't actually need. ListWish was the first ever app I made myself, it's still a work in progress but I'm proud of it.`,
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
