import * as React from "react"
import Breadcrumbs, {
  type BreadcrumbItem,
} from "../../common/breadcrumbs/breadcrumbs"
import Layout from "../../common/layout/layout"
import type { BlogArticleSummary } from "../../../types/blog.types"
import "./blog-article.scss"

interface BlogArticleProps {
  article: BlogArticleSummary
  breadcrumbs: BreadcrumbItem[]
  children: React.ReactNode
}

const BlogArticle: React.FC<BlogArticleProps> = ({
  article,
  breadcrumbs,
  children,
}) => (
  <Layout className="blog-article-page">
    <article className="blog-article">
      <header className="blog-article__hero">
        <div className="blog-article__hero-container container">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="blog-article__title">{article.title}</h1>
          <div className="blog-article__meta">
            <time dateTime={article.publishedAt}>{article.publishedLabel}</time>
            <span aria-hidden="true">•</span>
            <span>By {article.author}</span>
          </div>
          <img
            className="blog-article__hero-image"
            src={article.image}
            alt={article.imageAlt}
            width={1600}
            height={1067}
            fetchPriority="high"
          />
        </div>
      </header>
      <div className="blog-article__content container">{children}</div>
    </article>
  </Layout>
)

export default BlogArticle
