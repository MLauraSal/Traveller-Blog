import { useState } from 'react'
import React from 'react'
import PostItem from '../components/PostItem'
import { ESQUEMA_POSTS } from '../data'

const CategoryPosts = () => {

  const [posts, setPosts] = useState(ESQUEMA_POSTS)

  return (

    
    
    <section className='posts'>

        {posts.length > 0 ? <div className='container posts_container'>

            {
                posts.map(({id, miniatura, category, title, description, authorID}) => 
            
                <PostItem key={id} postID={id} miniatura={miniatura} category={category} title={title} description={description} authorID={authorID}/>)
            }
        </div> : <h2 className='center'>No posts found</h2>} 

    </section>
  )
}

export default CategoryPosts
