import React from 'react';
import CommentService from '../../../services/api/comment';
import FormComment from './Form';
import swal from 'sweetalert'

const CreateComment = (props) => {
  const { poll_id, api } = props;
  const service = new CommentService(api);

  function createComment(body) {
    const { tokens } = props;
    const payload = {
      comment: {
        body: body,
        commentable_id: poll_id,
        commentable_type: "WaveCitizen::Poll"
      }
    }

    const successCallback = () => {
      swal(`Tu comentario se ha creado exitosamente`, {
        icon: "success",
      }).then(()=> {
        window.location.reload()
      });
    }

    const errorCallback = (err) => {
      swal(`Hubo un error, no se ha podido crear tu comentario`, {
        icon: "error",
      })
    }

    service.create({payload, tokens, successCallback, errorCallback})
  }

  return (
    <FormComment
      action={createComment}
    />
  )
}

export default CreateComment;