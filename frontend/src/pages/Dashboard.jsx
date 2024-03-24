import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {ESQUEMA_POSTS} from '../data.js'


const Dashboard = () => {

  const [posts, setPosts] = useState(ESQUEMA_POSTS)

  return (
    <section className='dashboard'>
      {
        posts.length ? <div className="container dashboard_container">
          {
            posts.map(post => {

             return (
              <article key={post.id} className='dashboard_post'>
              <div className='dashboard_post-info'>
                <div className='dashboard_post-miniatura'>
                  <img src={post.miniatura} alt="" />
                </div>
                <h5>{post.title}</h5>
                
              </div>
              <div className='dashboard_post-actions'>
                <Link to={`/posts/${post.id}`} className='btn sm'>View</Link>
                <Link to={`/posts/${post.id}/edit`} className='btn sm primary'>Edit</Link>
                <Link to={`/posts/${post.id}/delete`} className='btn sm danger'>Delete</Link>
              </div>
            </article>
             )
            })
          }
        
        </div> : <h2 className='center'>Usted no tiene posts aun</h2>
      }
    </section>
  )
}

export default Dashboard
