import React from "react"
import Article from "./Article"

function ArticleList(props) {
  return (
    <main>
      <Article posts = {props.blogData.posts}/>
    </main>
  )
}

export default ArticleList