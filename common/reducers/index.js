// import { combineReducers } from 'redux'

const initialState = {
  projects: {
    1: {
      id: 1,
      title: 'hey',
      slug: 'test',
      content: 'A lorem ipsum dolor sit amet',
      url: 'lulutypeface.com',
      images: [],
      category: 1
    },
    2: {
      id: 2,
      title: 'go',
      slug: 'test2',
      content: 'B lorem ipsum dolor sit amet',
      url: 'blahblah.com',
      images: [],
      category: 2
    },
    3: {
      id: 3,
      title: 'lets',
      slug: 'test3',
      content: 'C lorem ipsum dolor sit amet',
      url: 'heyhey.com',
      images: [],
      category: 1
    }
  },
  categories: {
    1: {
      id: 1,
      name: 'category A'
    },
    2: {
      id: 2,
      name: 'category B'
    }
  },
  products: {
    1: {
      id: 1,
      title: 'Cephalonia Typeface',
      price: '£40',
      content: 'A mono-weight, bifurcated serif typeface in all caps. Based off of an old classic French biscuit logo, this distinctive vintage display typeface can also evoke edgier sentiments when set in a moodier context.',
      heroImage: '/static/images/shop-placeholder.jpg',
      slug: 'cephalonia-typeface',
      images: [
        'urlA',
        'urlB'
      ],
      buyText: 'regular & bold',
      buyUrl: 'http://example.com'
    },
    2: {
      id: 2,
      title: 'LuLu Typeface',
      price: '£30',
      content: 'Lorem ipsum dolor sit ifurcated consectetur adipiscing typeface in all caps. Based off of an old classic French biscuit logo, this distinctive vintage display typeface can also evoke edgier sentiments when set in a moodier context.',
      heroImage: '/static/images/shop-placeholder.jpg',
      slug: 'lulu-typeface',
      images: [
        'urlA',
        'urlB'
      ],
      buyText: 'regular & bold',
      buyUrl: 'http://example.com'
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
