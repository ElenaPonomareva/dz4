import Form from '../Form/Form'
import { usePostsContext } from '../Posts'

function PostForm() {
  const { addPost } = usePostsContext()

  const submitHandler = async (e) => {
    e.preventDefault()

    console.log()

    const formData = Object.fromEntries(new FormData(e.target).entries())

    const response = await fetch('http://localhost:3000/api/v1/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.status === 201) {
      const postFromServer = await response.json()
      addPost(postFromServer)
      e.target.reset()
    } else {
      alert('Wrong data')
    }
  }

  return (
    <Form
      onSubmit={submitHandler}
    />
  )
}

export default PostForm
