import React, { useState } from "react"
import "./video-showcase.scss"

const VIDEO_ID = "buivH-dyhI4"
const VIDEO_TITLE = "Good Steward Cleaning video"
const YOUTUBE_CHANNEL_URL =
  "https://www.youtube.com/@GoodStewardCommercialPropertyS"

const VideoShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="video-showcase" aria-labelledby="video-showcase-title">
      <div className="video-showcase__container container">
        <div className="video-showcase__header">
          <h2
            id="video-showcase-title"
            className="video-showcase__title title-lg"
          >
            See Our Team in Action
          </h2>
          <p className="video-showcase__description">
            Meet the people behind Good Steward Cleaning and see the care our
            team brings to every property.
          </p>
        </div>

        <div className="video-showcase__player">
          {isPlaying ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title={VIDEO_TITLE}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              className="video-showcase__facade"
              onClick={() => setIsPlaying(true)}
              aria-label={`Play ${VIDEO_TITLE}`}
            >
              <img
                src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt=""
                width="1280"
                height="720"
                loading="lazy"
                decoding="async"
              />
              <span className="video-showcase__play" aria-hidden="true">
                <span />
              </span>
            </button>
          )}
        </div>

        <a
          className="video-showcase__channel-link"
          href={YOUTUBE_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch more on YouTube
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}

export default VideoShowcase
