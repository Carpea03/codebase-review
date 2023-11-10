const postFields = `
  _id,
  _type,
  name,
  title,
  date,
  excerpt,
  coverImage,
  category,
  metaDescription,
  tag,
  "slug": slug.current,
  "author": author->{name, picture, role, bio},
`

export const indexQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`

export const indexQueryTop3 = `
*[_type == "post"] | order(date desc, _updatedAt desc)[0..3] {
  ${postFields}
}`

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`
