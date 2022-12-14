export type GetPostBySlug = (slug: string | string[] | undefined) => Promise<{
  title: string
  slug: string
  eyecatch: {
    url: string
    height: number
    width: number
    blurDataURL: string | undefined
  }
  publishDate: string
  content: string
  categories: string[]
  toc_visible: boolean
}>

export type GetAllSlugs = (limit: number = 100) => Promise<
  Array<{
    title: string
    slug: string
  }>
>

export type GetAllPostsById = (
  id: number,
  PER_PAGE: number
) => Promise<{
  contents: Array<{
    title: string
    slug: string
    eyecatch: {
      url: string
      height: number
      width: number
      blurDataURL: string | undefined
    }
    publishDate: string
    content: string
    categories: string[]
    toc_visible: boolean
  }>
  totalCount: number
  offset: number
  limit: number
}>

export type GetAllPosts = (limit: number = 100) => Promise<
  Array<{
    title: string
    slug: string
    eyecatch: {
      url: string
      height: number
      width: number
      blurDataURL: string | undefined
    }
    publishDate: string
    content: string
    categories: string[]
    toc_visible: boolean
  }>
>

export type GetAllCategories = () => Promise<
  Array<{
    name: string
    id: string
    slug: string
  }>
>

export type GetCategoryName = (catslug: string) => Promise<string>

export type GetAllPostsByCategory = (
  catName: string | string[] | undefined,
  limit = 100
) => Promise<
  Array<{
    title: string
    slug: string
    eyecatch: {
      url: string
      height: number
      width: number
      blurDataURL: string | undefined
    }
    publishDate: string
    content: string
    categories: string[]
    toc_visible: boolean
  }>
>

export type GetAllPostsByCategoryAndId = (
  catName: string | string[] | undefined,
  id: number
) => Promise<{
  contents: Array<{
    title: string
    slug: string
    eyecatch: {
      url: string
      height: number
      width: number
      blurDataURL: string | undefined
    }
    publishDate: string
    content: string
    categories: string[]
    toc_visible: boolean
  }>
  totalCount: number
  offset: number
  limit: number
}>
