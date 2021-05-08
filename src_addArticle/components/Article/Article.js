import React,{useContext} from 'react';
import {ArticleContext} from "../../context/articleContext"

export default function Article(props) {
    const {setArticles} = useContext(ArticleContext);
    const deleteID  = props.element.id
    return (
        <div className="article">
            <h1>{props.element.title}</h1>
            <span style={{marginRight: "25px"}}>{props.element.body}</span>
            <button onClick={()=>{setArticles({type: "DELETE_ARTICLE",  deleteID})}}>X</button>
        </div>
    )
}
