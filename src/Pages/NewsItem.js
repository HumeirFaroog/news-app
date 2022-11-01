import React from 'react'
import './items.css'
import { navBar } from './navBar'

export const NewsItem = ({urlToImage, title, description, publishedAt, url }) => {
  return (
    <div className="cards">
        <div className="card">
            <img className="news-img" src={urlToImage} alt={urlToImage} />
            <div class="text">
            <h3>{title}</h3>
            <date>{publishedAt}</date>
            <p class="content">{description}</p>
            <a href={url}>Source of Information</a>
            </div>
            
        </div>
    </div>
  )
}
