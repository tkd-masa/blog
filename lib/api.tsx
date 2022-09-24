import { createClient } from 'microcms-js-sdk'
import { perPage } from 'lib/constants'
import * as Api from 'types/api'

const postFields: string = 'title,slug,eyecatch,publishDate,content,categories,toc_visible'

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN ?? '',
  apiKey: process.env.API_KEY ?? '',
})

export const getPostBySlug: Api.GetPostBySlug = async (slug: string | string[] | undefined) => {
  try {
    const post = await client.get({
      endpoint: 'blogs',
      queries: {
        fields: postFields,
        filters: `slug[equals]${slug}`,
      },
    })
    return post.contents[0]
  } catch (err) {
    console.log('-- getPostBySlug --')
    console.log(err)
  }
}

export const getAllSlugs: Api.GetAllSlugs = async (limit = 100) => {
  try {
    const slugs = await client.get({
      endpoint: 'blogs',
      queries: { fields: 'title,slug', orders: '-publishDate', limit },
    })
    return slugs.contents
  } catch (err) {
    console.log(' -- getAllSlugs --')
    console.log('err')
  }
}

export const getAllPostsById: Api.GetAllPostsById = async (id: number, PER_PAGE: number) => {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        fields: postFields,
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

export const getAllPosts: Api.GetAllPosts = async (limit = 100) => {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        fields: postFields,
        orders: '--publishDate',
        limit,
      },
    })
    return posts.contents
  } catch (err) {
    console.log('~~ getAllPosts ~~')
    console.log(err)
  }
}

export const getAllCategories: Api.GetAllCategories = async () => {
  try {
    const categories = await client.get({
      endpoint: 'categories',
      queries: {
        fields: 'name,id,slug',
      },
    })
    return categories.contents
  } catch (err) {
    console.log('!-- getAllCategories --')
    console.log(err)
  }
}

export const getCategoryName: Api.GetCategoryName = async (catslug: string) => {
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

export const getAllPostsByCategory: Api.GetAllPostsByCategory = async (
  catName: string | string[] | undefined,
  limit = 100
) => {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        fields: postFields,
        filters: `categories[contains]${catName}`,
        orders: '-publishDate',
        limit,
      },
    })
    return posts.contents
  } catch (err) {
    console.log('~~ getAllPostsByCategory ~~')
    console.log(err)
  }
}

export const getAllPostsByCategoryAndId: Api.GetAllPostsByCategoryAndId = async (
  catName: string | string[] | undefined,
  id: number
) => {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        fields: postFields,
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
