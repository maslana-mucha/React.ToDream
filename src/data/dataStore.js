export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  defaultListDescription: '<p>Happy chappy me</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to dream of',
  description: 'Never ending list of amazing things',
  image: './src/images/hero_1.jpg',
  altImage: 'starring sky',
  columns: [
    {
      key: 0,
      title: 'For myself',
      icon: 'smile-beam',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'For you',
      icon: 'smile-wink',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'For us',
      icon: 'laugh-wink',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to dream of',
    description: 'Never ending list of amazing things',
    image: './src/images/hero_1.jpg',
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
