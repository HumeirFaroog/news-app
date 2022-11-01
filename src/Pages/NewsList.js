import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { NewsItem } from './NewsItem'


const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=fashion&apiKey=ca9debf7530745fbbe4d42143694d7ff')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
        
    },[])
  return (
    <div>
        {articles.map(article => {
            return (
                <NewsItem 
                    urlToImage={article.urlToImage}
                    title={article.title}
                    description={article.description}
                    publishedAt={article.publishedAt}
                    url={article.url}
                />
            )
        })}
     
    </div>
  )
}

export default NewsList