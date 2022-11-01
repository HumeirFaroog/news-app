import React from 'react'
import './items.css'

export const NewsItem = ({urlToImage, title, description, publishedAt, url }) => {
  return (
    <div className="news-pp">
        <div className="news-items">
            <img className="news-img" src={urlToImage} alt={urlToImage} />
            <h3>{title}</h3>
            <date>{publishedAt}</date>
            <p>{description}</p>
            <a href={url}>Source of Information</a>
            
        </div>
    </div>
  )
}
