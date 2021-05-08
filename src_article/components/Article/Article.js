import React from 'react'

export default function Article(props) {
    return (
        <div className="article">
            <h1>{props.element.title}</h1>
            <p>{props.element.body}</p>
        </div>
    )
}
