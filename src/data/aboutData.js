import profilePic from '../Main/Images/profileOld.jpg'
import coffeeAndCode from '../Main/Images/coffeeComputer.jpg'
import thinkPic from '../Main/Images/think.jpg'

export const aboutMeData = [
    {
      img: profilePic,
      imgAltText: 'Lip staring up lazily',
      content: [
        `I'm always thinking...`,
        `Whether it's about how to improve an app I made, creating something new, or how I can help someone else with what they're stuck on...`,
        `I'm always thinking.`
      ],
      animatedDirection: 'right',
    },
    {
      img: coffeeAndCode,
      imgAltText: 'survival needs, coffee and a computer',
      content: [
        'I need coffee and my computer to survive... ',
        `BUT, once I have everything I need, I'm always excited and ready to tackle another day`, 
        `I currently work with JavaScript, React, Node.js, Express, and PostgreSQL`,
        `I'm really excited to begin mastering new languages, frameworks, and environments.`
      ],
      animatedDirection: 'left',
    },
    {
      img: thinkPic,
      imgAltText: 'I enjoy thinking about things differently',
      content: [
        'While I do EAT SLEEP & BREATHE programing these days, I also like to take a step back and refresh so I can come back with a new perspective',
        `Sometimes we don't even know what we don't know, you know?`,
        `If I'm not working on my computer, or catching up with the latest netflix series, I'm probably reading a book about magic and other worlds`
      ],
      animatedDirection: 'right',
    },
  ]