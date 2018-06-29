export default [
  {
    _id: Math.round(Math.random() * 1000000),
    text: '#awesome',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Developer',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: '',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: require('./assets/images/Avatar.jpg'),
    },
    image: 'https://lh3.googleusercontent.com/-uXipYA5hSKc/VVWKiFIvo-I/AAAAAAAAAhQ/vkjLyZNEzUA/w800-h800/1.jpg',
    sent: true,
    received: true,
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Daviel, Alexis, Alexis et Gilles. Le groupe des tueurs !',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Developer',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Alors moi je vis ici, à PA-NAME ! Cest une ville vraiment cool pour le code, tu verras ! Il y a beaucoup dopportunités ! Tu peux me retrouver à cet endroit !',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: require('./assets/images/Avatar.jpg'),
    },
    sent: true,
    received: true,
    location: {
      latitude: 48.864601,
      longitude: 2.398704,
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Where are you?',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Developer',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "Salut Alexis ! Ravi de pouvoir échanger avec toi ! Le concept WanPada est vraiment top tu trouves pas ? Bon du coup je vois que tu veux devenir développeur... EXCELLENT CHOIX ! Il y a beaucoup de travail ! Surtout en React, React Native... Ca tombe bien, c'est justement ce que fait La Capsule Academy. Si tu veux plus d'informations n'hésite pas ! A ta dispo. Je peux te faire rencontrer Noël (pas le père), et Marlène ! Il y a aussi Annaelle, c'est la stagiaire... Elle est canon et sympas ! Tu verras, ça vaut le coup de venir étudier ici !!!",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: require('./assets/images/Avatar.jpg'),
    },
    sent: true,
    received: true,
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Are you building a chat app?',
    createdAt: new Date(),
    user: {
      _id: 1,
      name: 'Developer',
    },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Bienvenue jeune WanPada !',
    createdAt: new Date(),
    system: true,
  },
];
