import { useEffect, useRef } from 'react'

function Form({
  onSubmit, title = '', post = '', photo = '', tag = '',
}) {
  const formRef = useRef(null)

  useEffect(() => {
    formRef.current.elements.title.value = title
    formRef.current.elements.post.value = post
    formRef.current.elements.photo.value = photo
    formRef.current.elements.tag.value = tag
  }, [])

  return (
    <form ref={formRef} className="d-flex flex-column align-items-center mb-3" onSubmit={onSubmit}>
      <div className="mb-3">
        <input type="text" name="title" placeholder="Заголовок" className="form-control" id="exampleInputEmail1" />
      </div>
      <div className="mb-3">
        <input type="text" name="post" placeholder="Текст поста" className="form-control" id="exampleInputEmail1" />
      </div>
      <div className="mb-3">
        <input type="text" name="photo" placeholder="Добавить фото" className="form-control" id="exampleInputEmail1" />
      </div>
      <div className="mb-3">
        <input type="text" name="tag" placeholder="Тэг" className="form-control" id="exampleInputEmail1" />
      </div>

      <button type="submit" className="btn btn-primary">Опубликовать</button>
    </form>
  )
}

export default Form
