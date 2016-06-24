// import { combineReducers } from 'redux'

const initialState = {
  projects: {
    1: {
      id: 1,
      title: 'IM Global',
      slug: 'im-global',
      content: 'A lorem ipsum dolor sit amet',
      url: 'imglobalfilm.com',
      images: [],
      category: 1
    },
    2: {
      id: 2,
      title: 'Move',
      slug: 'move',
      content: 'B lorem ipsum dolor sit amet',
      url: 'wearemove.com',
      images: [],
      category: 1
    },
    3: {
      id: 3,
      title: 'Sloe Films',
      slug: 'sloe-films',
      content: 'Lorem ipsum dolor sit ifurcated consectetur adipiscing typeface in all caps. Based off of an old classic French biscuit logo, this distinctive vintage display typeface can also evoke edgier sentiments when set in a moodier context.',
      credits: 'Design and development was in collaboration with lorem ipsum dolor sit amet consectetur.',
      images: [
        '/static/images/projects-placeholder-1.jpg',
        '/static/images/projects-placeholder-2.jpg',
        '/static/images/projects-placeholder-3.jpg'
      ],
      category: 1
    },
    4: {
      id: 4,
      title: 'Cookie Studio',
      slug: 'cookie-studio',
      content: 'B lorem ipsum dolor sit amet',
      url: 'cookiestudio.tv',
      images: [],
      category: 2
    },
    5: {
      id: 5,
      title: 'Leapfrog Investments',
      slug: 'leapfrog-investments',
      content: 'B lorem ipsum olor sit amet',
      url: 'leapfroginvest.com',
      images: [],
      category: 2
    },
    6: {
      id: 6,
      title: 'Tina Hillier',
      slug: 'tina-hillier',
      content: 'B lorem ipsum dolor sit amet',
      url: 'tinahillier.com',
      images: [],
      category: 2
    },
    7: {
      id: 7,
      title: 'FIL Guadalajara 2015',
      slug: 'fil-guadalajara-2015',
      content: 'B lorem ipsum dolor sit amet',
      images: [],
      category: 3
    },
    8: {
      id: 8,
      title: 'South Asian Literature Festival',
      slug: 'south-asian-literature-festival',
      content: 'B lorem ipsum dolor sit amet',
      images: [],
      category: 3
    },
    9: {
      id: 9,
      title: 'The Synthesis of Movement',
      slug: 'the-synthesis-of-movement',
      content: 'B lorem ipsum dolor sit amet',
      images: [],
      category: 3
    },
    10: {
      id: 10,
      title: 'Cephalonia',
      slug: 'cephalonia-typeface',
      content: 'B lorem ipsum dolor sit amet',
      url: 'youworkforthem.com',
      images: [],
      category: 4
    },
    11: {
      id: 11,
      title: 'Lu Lu',
      slug: 'lu-lu',
      content: 'B lorem ipsum dolor sit amet',
      url: 'myfonts.com',
      images: [],
      category: 4
    },
    12: {
      id: 12,
      title: 'Miscellaneous',
      slug: 'miscellaneous',
      content: 'B lorem ipsum dolor sit amet',
      images: [],
      category: 5
    }
  },
/* Categories: Digital, Brand, Print etc
========================================================================== */
  categories: {
    1: {
      id: 1,
      name: 'Brand'
    },
    2: {
      id: 2,
      name: 'Digital'
    },
    3: {
      id: 3,
      name: 'Print'
    },
    4: {
      id: 4,
      name: 'Type'
    },
    5: {
      id: 5,
      name: 'Lettering'
    }
  },
  products: {
    1: {
      id: 1,
      title: 'Cephalonia Typeface',
      price: '$30',
      content: 'Cephalonia is an all caps geometric sans-serif that draws its inspiration from classical greek engravings. Its unique crossbars in the letters O, E, F and D are the most notable examples of this greek influence.',
      heroImage: '/static/images/Cephalonia-1.jpg',
      slug: 'cephalonia-typeface',
      images: [
        '/static/images/Cephalonia-2.jpg',
        '/static/images/Cephalonia-3.jpg',
        '/static/images/Cephalonia-4.jpg',
        '/static/images/Cephalonia-5.png',
        '/static/images/Cephalonia-6.jpg',
        '/static/images/Cephalonia-7.png',
        '/static/images/Cephalonia-8.jpg'
      ],
      buyText: 'buy cephalonia | ',
      buyUrl: 'https://www.youworkforthem.com/font/T4519/cephalonia'
    },
    2: {
      id: 2,
      title: 'Lu Lu Typeface',
      price: '$45',
      content: 'A mono-weight, bifurcated serif typeface in all caps. Based off of an old classic French biscuit logo. This distinctive vintage display typeface can also evoke edgier sentiments when set in a moodier context, as well as making for a playful option when set in a soft colour palette.',
      heroImage: '/static/images/Lu-Lu-1.jpg',
      slug: 'lulu-typeface',
      images: [
        '/static/images/Lu-Lu-2.jpg',
        '/static/images/Lu-Lu-3.jpg',
        '/static/images/Lu-Lu-4.jpg',
        '/static/images/Lu-Lu-5.jpg',
        '/static/images/Lu-Lu-6.jpg'
      ],
      buyText: 'Buy Lu Lu | ',
      buyUrl: 'https://www.myfonts.com/fonts/design-by-pascal/lu-lu/'
    }
  }
}

export function projects (
  state = initialState.projects,
  action
) {
  return state
}

export function categories (
  state = initialState.categories,
  action
) {
  return state
}

export function products (
  state = initialState.products,
  action
) {
  return state
}
