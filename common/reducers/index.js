// import { combineReducers } from 'redux'

const initialState = {
  projects: {
    1: {
      id: '1',
      title: 'hey',
      slug: 'test',
      content: 'A lorem ipsum dolor sit amet',
      url: 'lulutypeface.com',
      images: [],
      category: 1
    },
    2: {
      id: '2',
      title: 'go',
      slug: 'test2',
      content: 'B lorem ipsum dolor sit amet',
      url: 'blahblah.com',
      images: [],
      category: 2
    },
    3: {
      id: '3',
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
