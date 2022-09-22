import { createClient } from 'microcms-js-sdk'
import { perPage } from 'lib/constants'

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || '',
  apiKey: process.env.API_KEY || '',
})

export const getPostBySlug = async (slug: string | string[] | undefined) => {
  try {
    const post = await client.get({
      endpoint: 'blogs',
      queries: { filters: `slug[equals]${slug}` },
    })
    return post.contents[0]
  } catch (err) {
    console.log('-- getPostBySlug --')
    console.log(err)
  }
}

export const getAllSlugs = async (limit = 100) => {
  try {
    const slugs = await client.get({
      endpoint: 'blogs',
      queries: { fields: 'title,slug', orders: '-publishDate', limit: limit },
    })
    return slugs.contents
  } catch (err) {
    console.log(' -- getAllSlugs --')
    console.log('err')
  }
}

export const getAllPostsById = async (id: number, PER_PAGE: number) => {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        fields: 'title,slug,eyecatch,publishDate,categories',
        orders: '--publishDate',
        offset: (id - 1) * PER_PAGE,
        limit: PER_PAGE,
      },
    })
    return posts
  } catch (err) {
    console.log('~~ getPostsById ~~')
    console.log(err)
  }
}

export const getAllPosts = async (limit = 100) => {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        fields: 'title,slug,eyecatch,publishDate,categories',
        orders: '--publishDate',
        limit: limit,
      },
    })
    return posts.contents
  } catch (err) {
    console.log('~~ getAllPosts ~~')
    console.log(err)
  }
}

export const getAllCategories = async (limit = 100) => {
  try {
    const categories = await client.get({
      endpoint: 'categories',
      queries: {
        fields: 'name,id,slug',
        limit: limit,
      },
    })
    return categories.contents
  } catch (err) {
    console.log('!-- getAllCategories --')
    console.log(err)
  }
}

export const getCategoryName = async (catslug: string) => {
  try {
    const catName = await client.get({
      endpoint: 'categories',
      queries: {
        fields: 'name',
        filters: `slug[equals]${catslug}`,
      },
    })
    return catName.contents[0].name
  } catch (err) {
    console.log('!-- getCategoryName --')
    console.log(err)
  }
}

export const getAllPostsByCategory = async (catName: string | string[] | undefined, limit = 100) => {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        filters: `categories[contains]${catName}`,
        orders: '-publishDate',
        limit: limit,
      },
    })
    return posts.contents
  } catch (err) {
    console.log('~~ getAllPostsByCategory ~~')
    console.log(err)
  }
}

export const getAllPostsByCategoryAndId = async (catName: string | string[] | undefined, id: number) => {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        filters: `categories[contains]${catName}`,
        orders: '-publishDate',
        offset: (id - 1) * perPage,
        limit: perPage,
      },
    })
    return posts
  } catch (err) {
    console.log('~~ getAllPostsByCategoryAndId ~~')
    console.log(err)
  }
}
