import { useEffect } from 'react'

const DEFAULT_DESCRIPTION =
  'Portfolio and engineering blog of Subhash Jeewantha, an Associate Software Engineer focused on Microsoft Power Platform, system design, and business solution delivery.'

export default function Seo({ title, description = DEFAULT_DESCRIPTION }) {
  useEffect(() => {
    document.title = title

    let meta = document.querySelector('meta[name="description"]')

    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', description)
  }, [description, title])

  return null
}
