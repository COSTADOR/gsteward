import type { BreadcrumbItem } from "../components/common/breadcrumbs/breadcrumbs"
import { LOCAL_BUSINESS_ID, SITE_URL } from "../constants/seo.const"
import type { BlogArticleSummary } from "../types/blog.types"
import type { FaqItem } from "../types/faq.types"
import { createFaqSchema } from "./faq-schema"
import { createBreadcrumbSchema } from "./service-schema"

interface BlogArticleSchemaOptions {
  article: BlogArticleSummary
  breadcrumbs: BreadcrumbItem[]
  faqItems: FaqItem[]
}

const toAbsoluteUrl = (value: string) =>
  value.startsWith("http") ? value : `${SITE_URL}${value}`

export const createBlogArticleSchema = ({
  article,
  breadcrumbs,
  faqItems,
}: BlogArticleSchemaOptions) => {
  const pageUrl = toAbsoluteUrl(article.path)
  const imageUrl = toAbsoluteUrl(article.image)
  const breadcrumbSchema = createBreadcrumbSchema(breadcrumbs, article.path)
  const faqSchema = createFaqSchema(faqItems)
  const { "@context": breadcrumbContext, ...breadcrumbNode } = breadcrumbSchema
  const { "@context": faqContext, ...faqNode } = faqSchema

  void breadcrumbContext
  void faqContext

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl}#article`,
        headline: article.title,
        description: article.description,
        image: imageUrl,
        datePublished: article.publishedAt,
        dateModified: article.modifiedAt,
        inLanguage: "en-US",
        author: {
          "@type": "Person",
          name: article.author,
        },
        publisher: {
          "@id": LOCAL_BUSINESS_ID,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
      },
      breadcrumbNode,
      {
        "@id": `${pageUrl}#faq`,
        ...faqNode,
      },
    ],
  }
}
