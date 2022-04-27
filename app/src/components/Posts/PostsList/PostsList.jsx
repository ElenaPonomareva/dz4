import { useContext } from 'react'
import { PostsContext } from '../Posts'
import PostsItem from '../PostsItem/PostsItem'

function PostsList() {
  const { posts } = useContext(PostsContext)

  console.log({ posts })

  return (
    <div className="d-flex justify-content-center">
      <div className="list-group">
        {posts.map((post) => (
          <PostsItem key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}

export default PostsList
