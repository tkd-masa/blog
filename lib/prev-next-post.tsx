export const prevNextPost = (
  allSlugs: Array<{ title: string; slug: string }>,
  currentSlug: string | string[] | undefined
): Array<{
  title: string
  slug: string
}> => {
  const numberOfPosts = allSlugs.length

  const index = allSlugs.findIndex(({ slug }: { slug: string }) => slug === currentSlug)

  const prevPost = index + 1 === numberOfPosts ? { title: '', slug: '' } : allSlugs[index + 1]

  const nextPost = index === 0 ? { title: '', slug: '' } : allSlugs[index - 1]

  return [prevPost, nextPost]
}
