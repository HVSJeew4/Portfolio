import matter from 'gray-matter'

const postModules = import.meta.glob('./posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

function calculateReadingTime(content) {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / 200))
  return `${minutes} min read`
}

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '')
}

function parsePost(path, rawContent) {
  const { data, content } = matter(rawContent)
  const slug = slugFromPath(path)

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? new Date().toISOString(),
    tags: Array.isArray(data.tags) ? data.tags : [],
    excerpt: data.excerpt ?? '',
    content,
    readingTime: calculateReadingTime(content),
  }
}

const allPosts = Object.entries(postModules)
  .map(([path, rawContent]) => parsePost(path, rawContent))
  .sort((firstPost, secondPost) => new Date(secondPost.date) - new Date(firstPost.date))

export function getAllPosts() {
  return allPosts
}

export function getFeaturedPosts(limit = 3) {
  return allPosts.slice(0, limit)
}

export function getAllTags() {
  return [...new Set(allPosts.flatMap((post) => post.tags))].sort()
}

export function getPostBySlug(slug) {
  return allPosts.find((post) => post.slug === slug)
}

// Future scalability:
// This file is the seam for moving to a headless CMS, MDX, or an API-backed content source.
// The components can keep consuming the same post shape while the implementation changes underneath.
