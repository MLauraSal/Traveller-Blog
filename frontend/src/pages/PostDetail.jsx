import React from 'react'
import PostAuthor from '../components/PostAuthor'
import {Link} from 'react-router-dom'
import Miniatura from '../images/blog6.jpg'



const PostDetail = () => {

  return (

    <section className='post-detail'>

      <div className='container post-detail_container'>

        <div className='post-detail_header'>
          <PostAuthor/>
          <div className='post-detail_buttons'>
            <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>

        <h1>This is the post title</h1>

        <div className='post-detail-miniatura'>
          <img src={Miniatura} alt="" />
        </div>
        
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam odio, provident dolore unde, possimus quaerat ab dolor nobis minus ducimus iure voluptatibus, rerum iusto fugit tenetur maxime libero dolorem hic beatae. Unde vel, voluptatum alias molestiae tenetur quod voluptates itaque?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam odio, provident dolore unde, possimus quaerat ab dolor nobis minus ducimus iure voluptatibus, rerum iusto fugit tenetur maxime libero dolorem hic beatae. Unde vel, voluptatum alias molestiae tenetur quod voluptates itaque?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam odio, provident dolore unde, possimus quaerat ab dolor nobis minus ducimus iure voluptatibus, rerum iusto fugit tenetur maxime libero dolorem hic beatae. Unde vel, voluptatum alias molestiae tenetur quod voluptates itaque?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt beatae earum perspiciatis illum cumque quis assumenda labore incidunt distinctio?</p>

      </div>

    </section>
  )
}

export default PostDetail
