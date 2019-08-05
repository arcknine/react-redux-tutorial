const initState = {
  posts: [
    {id: 1, title: 'title 1', body: 'Lorem ipsum dolor sit amet consectetur'},
    {id: 2, title: 'title 2', body: 'Lorem ipsum dolor sit amet consectetur'},
    {id: 3, title: 'title 3', body: 'Lorem ipsum dolor sit amet consectetur'}
  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter((post) => {
      return action.id !== post.id
    })
    return {
      ...state,
      posts: newPosts
    }
  }

  return state;
}

export default rootReducer;