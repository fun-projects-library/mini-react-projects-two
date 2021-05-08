import React, { useContext, useState } from "react";
import Article from "../components/Article/Article"
import { ArticleContext } from "../context/articleContext";



const Articles = () => {

  const {articles} = useContext(ArticleContext);
  
  return (
    <div>
      {articles.map((element,index)=>{return <Article element={element} key={index}/>})}
    </div>
  )
}

export default Articles