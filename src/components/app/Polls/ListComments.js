import React from 'react';
import CardComment from '../CardComment';

const ListComments = (props) => {
  const { poll, currentUser } = props;
  const comments = poll.comments;

  const commentsExist = () => (poll && comments && comments.length > 0)

  return (
    <div className="list-comments">
      { commentsExist() ? (
        comments.map((item)=> {
          return (
            <CardComment
              key={item.id}
              comment={item}
              currentUser={currentUser}
            />
          )
        })
        ) : ( <p>No hay comentarios </p> )
      }
    </div>
  )
}

export default ListComments;