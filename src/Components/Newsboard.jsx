import { useEffect, useState } from "react"
import Newsitem from "./Newsitem"

const Newsboard = ({ category,country,searchQuery }) => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    let url = "";
    if(searchQuery){
      url=`https://gnews.io/api/v4/search?q=${searchQuery}&lang=en&country=${country}&token=${import.meta.env.VITE_API_KEY}`
    }
    else{
      url=`https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=${country}&token=${import.meta.env.VITE_API_KEY}`
    }

    fetch(url)
      .then(res => res.json())  
      .then(data => setArticles(data.articles))
  }, [category,country,searchQuery])

  return (
    <>
      <h2 className="text-center mt-5">Latest <span className="badge bg-danger">News</span></h2>
      <div className="d-flex flex-wrap justify-content-center">
        {articles.map((news, index) => {
          return <Newsitem key={index} title={news.title} description={news.description} src={news.image} url={news.url} />
        })}
      </div>
    </>
  )
}

export default Newsboard