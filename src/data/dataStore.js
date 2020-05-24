export const settings = {
  listCreatorText: 'Add new list',
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  defaultListDescription: '<p>Happy chappy me</p>',
  defaultColumnIcon: 'list-alt',
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  headerIcon: 'rainbow',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple app, with lists, columns and cards',
};

export const info = {
  title: 'What no one really know',
  image: 'https://i.postimg.cc/zG1745k2/hero-2.jpg',
  altImage: 'secret',
  description: 'Are you ready?',
  context: '...',
};

export const faqData = {
  title: 'If there is something you consider',
  image: 'https://i.postimg.cc/3Ry2dbBD/hero-3.jpg',
  altImage: 'illumination',
  description: 'But don&prime;t know how to ask',
  context: '...',
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to dream of',
    description: 'Never ending list of amazing things',
    image: 'https://i.postimg.cc/J4XKTtjB/hero-1.jpg',
    altImage: 'starring sky',
  },
  {
    id: 'list-2',
    title: 'Things to dream of',
    description: 'Never ending list of amazing things',
    image: 'https://i.postimg.cc/J4XKTtjB/hero-1.jpg',
    altImage: 'starring sky',
  },
  {
    id: 'list-3',
    title: 'Things to dream of',
    description: 'Never ending list of amazing things',
    image: 'https://i.postimg.cc/J4XKTtjB/hero-1.jpg',
    altImage: 'starring sky',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'For myself',
    icon: 'smile-beam',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'For you',
    icon: 'smile-wink',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'For us',
    icon: 'laugh-wink',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
