// import { combineReducers } from 'redux'

const initialState = {
  projects: {
    1: {
      id: 1,
      title: 'Cephalonia',
      slug: 'test',
      content: 'A lorem ipsum dolor sit amet',
      url: 'lulutypeface.com',
      images: [],
      category: 1
    },
    2: {
      id: 2,
      title: 'Film Typography',
      slug: 'test2',
      content: 'B lorem ipsum dolor sit amet',
      url: 'blahblah.com',
      images: [],
      category: 2
    },
    3: {
      id: 3,
      title: 'Lulu Typeface',
      slug: 'lulu',
      content: 'Lorem ipsum dolor sit ifurcated consectetur adipiscing typeface in all caps. Based off of an old classic French biscuit logo, this distinctive vintage display typeface can also evoke edgier sentiments when set in a moodier context.',
      credits: 'Design and development was in collaboration with lorem ipsum dolor sit amet consectetur.',
      url: 'example.com',
      images: [
        '/static/images/projects-placeholder-1.jpg',
        '/static/images/projects-placeholder-2.jpg',
        '/static/images/projects-placeholder-3.jpg'
      ],
      category: 1
    }
  },
  categories: {
    1: {
      id: 1,
      name: 'Brand'
    },
    2: {
      id: 2,
      name: 'Web'
    },
    3: {
      id: 3,
      name: 'Type'
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
        '/static/images/projects-placeholder-1.jpg',
        '/static/images/projects-placeholder-2.jpg'
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
        '/static/images/projects-placeholder-1.jpg',
        '/static/images/projects-placeholder-2.jpg',
        '/static/images/projects-placeholder-3.jpg'
      ],
      buyText: 'regular & bold',
      buyUrl: 'http://example.com'
    }
  },
  articles: {
    1: {
      id: 1,
      slug: 'screen-feast-app',
      title: 'Screen Feast App',
      topic: 'Design Notes',
      date: 'August 2014',
      intro: 'Coming to iOS app design for the first time on a big project was a daunting but exciting challenge.',
      content: `As our prescriptions grew ever more detailed, responsive web design signaled a way out. Beyond offering a means of building device-agnostic layouts, RWD initiated a period of reappraisal; not since the adoption of web standards has our industry seen such radical realignment of thought and practice.
In the five years since Ethan Marcotte’s article first graced these pages, thousands of websites have launched with responsive layouts at their core. During this time, we’ve experimented with new ways of working, and refined our design and development practice so that it’s more suited to a fluid, messy medium.
As we emerge from this period of enlightenment, we need to consolidate our learning and consider how we build upon it.`
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

export function articles (
  state = initialState.articles,
  action
) {
  return state
}
