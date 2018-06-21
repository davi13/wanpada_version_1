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
      avatar: require('./assets/avatar.png'),
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
    text: 'Alexis x2, Daviel et Gilles ? Êtes vous prêt à casser la baraque ?!',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: require('./assets/avatar.png'),
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
    text: "Salut toute l'équipe ! Votre groupe est exceptionnellement stylé !",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: require('./assets/avatar.png'),
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
