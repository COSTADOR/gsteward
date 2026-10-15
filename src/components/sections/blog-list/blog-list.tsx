import * as React from "react"
import { Link } from "gatsby"
import type { BlogArticleSummary } from "../../../types/blog.types"
import "./blog-list.scss"

interface BlogListProps {
  articles: BlogArticleSummary[]
}

const BlogList: React.FC<BlogListProps> = ({ articles }) => {
  const pageSize = 12
  const [visibleCount, setVisibleCount] = React.useState(pageSize)
  const sortedArticles = [...articles].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  )
  const visibleArticles = sortedArticles.slice(0, visibleCount)
  const hasMoreArticles = visibleCount < sortedArticles.length

  return (
    <section className="blog-list" aria-labelledby="latest-articles-title">
      <div className="blog-list__container container">
        <div className="blog-list__heading">
          <h2 className="blog-list__title title-lg" id="latest-articles-title">
            Latest articles
          </h2>
        </div>
        <div
          className={`blog-list__grid ${
            sortedArticles.length === 1 ? "blog-list__grid--single" : ""
          }`}
        >
          {visibleArticles.map(article => (
            <article className="blog-card" key={article.path}>
              <Link
                className="blog-card__image-link"
                to={article.path}
                aria-label={`Read ${article.title}`}
              >
                <img
                  className="blog-card__image"
                  src={article.image}
                  alt={article.imageAlt}
                  width={1600}
                  height={1067}
                  loading="lazy"
                />
              </Link>
              <div className="blog-card__content">
                <time
                  className="blog-card__date"
                  dateTime={article.publishedAt}
                >
                  {article.publishedLabel}
                </time>
                <h3 className="blog-card__title">
                  <Link to={article.path}>{article.title}</Link>
                </h3>
                <p className="blog-card__excerpt">{article.excerpt}</p>
                <Link
                  to={article.path}
                  className="button button--secondary with-icon icon-right blog-card__link"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
        {hasMoreArticles && (
          <div className="blog-list__more">
            <button
              type="button"
              className="button button--primary"
              onClick={() => setVisibleCount(count => count + pageSize)}
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default BlogList
