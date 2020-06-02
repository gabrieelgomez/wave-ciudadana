import React from 'react';
import CardComment from '../CardComment';

const ListComments = (props) => {
  const { poll, currentUser, api, tokens } = props;
  const comments = poll.comments;

  const commentsExist = () => (poll && comments && comments.length > 0)

  return (
    <div className="list-comments">
      { commentsExist() ? (
        comments.map((item)=> {
          return (
            <CardComment
              key={item.id}
              api={api}
              tokens={tokens}
              currentUser={currentUser}
              comment={item}
            />
          )
        })
        ) : ( <p>No hay comentarios </p> )
      }
    </div>
  )
}

export default ListComments;