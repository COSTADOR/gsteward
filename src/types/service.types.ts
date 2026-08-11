import type { IGatsbyImageData } from "gatsby-plugin-image"

export interface Service {
  title: string
  description: string
  tags: string[]
  image: IGatsbyImageData
  imageAlt?: string
  href?: string
}
