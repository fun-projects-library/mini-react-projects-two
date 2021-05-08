import React from "react"
import Articles from "./containers/Articles"
import AddArticle from "./components/AddArticle/AddArticle";
import ArticleProvider from "./context/articleContext"

function App() {
  return (
    <ArticleProvider>
      <AddArticle />
      <Articles />
    </ArticleProvider>
  )
}
export default App
