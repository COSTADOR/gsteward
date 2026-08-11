import React from "react"

const SITE_URL = "https://www.gsteward.com"
const DEFAULT_IMAGE = "/images/og-image.png"

interface SeoProps {
  title: string
  description: string
  pathname: string
  image?: string
}

const toAbsoluteUrl = (value: string) =>
  value.startsWith("http") ? value : `${SITE_URL}${value}`

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  pathname,
  image = DEFAULT_IMAGE,
}) => {
  const pageUrl = toAbsoluteUrl(pathname)
  const imageUrl = toAbsoluteUrl(image)

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={pageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <link rel="canonical" href={pageUrl} />
    </>
  )
}

export default Seo
