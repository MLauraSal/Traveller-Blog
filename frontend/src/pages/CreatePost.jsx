import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


const CreatePost = () => {

  const[title, setTitle] = useState('')
  const [category, setCategory] = useState('Uncategorized')
  const [description, setDescription] = useState('')
  const [miniatura, setMiniatura] = useState('')

  const modules = {
    toolbar: [
      [{'header': [1, 2, 4, 5, 6, false]}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list':'bullet'}, {'indent': '-1'}, {'indent': '-1'}],
      ['link', 'image'],
      ['clear']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  const POST_CATEGORIES = ['Uncategorize', 'Guia de viajes', 'Guia de ciudades', 'Paises', 'Itinerarios','Tips', 'Consejos', 'Aerolineas']
  return (

    <section className='create-post'>

      <div className='container'>
        <h2>Create Post</h2>
        <p className='form_error-message'> This is a error message</p>
      </div>

      <form className='form create-post_form'>
        <input type="text" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus />
        <select name="category" value={category} onChange={e => setCategory(e.target.value)} >
          {
            POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)
          } 
        </select>
        <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription} className='ql-editor'/>
        <input type="file" value={miniatura} onChange={e => setMiniatura(e.target.files[0])} accept='png, jpg, jpge' />
        <button type='submit' className='btn primary'>Create</button>
      </form>
    </section>
  )
}

export default CreatePost
