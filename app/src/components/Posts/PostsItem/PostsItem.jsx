const { Link } = require('react-router-dom')

function PostsItem({
  title, post, id, photo,
}) {
  return (
    <Link
      className="list-group-item list-group-item-action"
      to={`/posts/${id}`}
    >
      <span className="pe-7">{title}</span>
      <span>
        <div className="card" style={{ width: '22rem' }}>
          <img src={photo} className="card-img-top" alt="Basic example" />
        </div>
      </span>
      <span>{post}</span>
    </Link>
  )
}

export default PostsItem
