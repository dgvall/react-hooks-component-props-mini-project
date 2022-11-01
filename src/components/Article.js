import React from "react"

function Article({posts}) {
 
  const articles = posts.map(({id, title, date = "N/A", preview}) => {

    return (
      <article key = {id}>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
      </article>
    )
  })

  return (
    <>
    {articles}
    </>
  )
}

export default Article