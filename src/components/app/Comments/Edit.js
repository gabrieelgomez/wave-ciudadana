import React from 'react';
import CommentService from '../../../services/api/comment';
import FormComment from './Form';
import swal from 'sweetalert'

const EditComment = (props) => {
  const { comment } = props;
  const service = new CommentService(props.api);

  function editComment(editBody) {
    const { tokens } = props;
    const id = comment.id;

    const payload = {
      comment: {
        body: editBody
      }
    }

    const successCallback = () => {
      swal(`Tu comentario se ha editado exitosamente`, {
        icon: "success",
      }).then(()=> {
        window.location.reload()
      });
    }

    const errorCallback = (err) => {
      swal(`Hubo un error, no se ha podido editar tu comentario`, {
        icon: "error",
      })
    }

    service.update({payload, id, tokens, successCallback, errorCallback})
  }

  return (
    <FormComment 
      body={comment.body}
      action={editComment}
    />
  )
}

export default EditComment;