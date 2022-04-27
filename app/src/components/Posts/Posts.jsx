import PostForm from './PostForm/PostForm'
import PostsList from './PostsList/PostsList'

const {
  createContext, useState, useEffect, useContext,
} = require('react')

const PostsContext = createContext()

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/posts')
      .then((response) => response.json())
      .then((dataFromServer) => setPosts(dataFromServer))
  }, [])

  const addPost = (newPost) => {
    setPosts((prev) => [...prev, newPost])
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <PostsContext.Provider value={{ posts, addPost }}>
      <PostForm />

      <hr className="mb-4" />

      <PostsList />
    </PostsContext.Provider>
  )
}

export default Posts

const usePostsContext = () => useContext(PostsContext)

export {
  PostsContext,
  usePostsContext,
}
