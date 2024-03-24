import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar1 from '../images/avatar8.jpg';
import Avatar2 from '../images/avatar4.jpg';
import Avatar3 from '../images/avatar10.jpg';
import Avatar4 from '../images/avatar2.jpg';
import Avatar5 from '../images/avatar1.jpg';

const authorData = [
  { id: 1, avatar: Avatar5, name: 'Sofia Perez', posts: 3 },
  { id: 2, avatar: Avatar4, name: 'Angel Gonzales', posts: 5 },
  { id: 3, avatar: Avatar2, name: 'Marcela Garcia', posts: 0 },
  { id: 4, avatar: Avatar1, name: 'Nicolas Suarez', posts: 2 },
  { id: 5, avatar: Avatar3, name: 'Paola Muñiz', posts: 1 },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorData);

  return (
    <section className='authors'>
      {authors.length > 0 ? (
        <div className='container authors_container'>
          {authors.map(({ id, avatar, name, posts }) => (
            <Link key={id} to={`/posts/users/${id}`} className='author'>
              <div className='author_avatar'>
                <img src={avatar} alt={`Avatar de ${name}`} />
              </div>
              <div className='author_info'>
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h2 className='center'>No se encontraron autores</h2>
      )}
    </section>
  );
};

export default Authors;
