

export const reducer = (state, action) => {
  console.log(action.deleteID)
    switch (action.type) {
      case "ADD_ARTICLE":
        return [
          ...state,
          {
            id: Math.floor(Math.random()*1000),
                title: action.article.title,
                body: action.article.body,
          },
        ];
        case "DELETE_ARTICLE": 
        return state.filter((item) => item.id !== action.deleteID);
      default:
       return state
    }
  }
  