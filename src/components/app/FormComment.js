import React, { useState } from 'react';
import swal from 'sweetalert'
import { Form } from 'antd';
import { StyledTextAreaFeed, StyledButton } from '../styled';
import CommentService from '../../services/api/comment';

const FormComment = (props) => {
  let [body, setBody] = useState("");

  const { poll_id } = props;
  const service = new CommentService(props.api);

  function createComment() {
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
    <Form className="comment-form" onSubmit={()=> createComment()}>
      <Form.Item>
        <StyledTextAreaFeed placeholder="Comenta..." value={body} onChange={(e)=> setBody(e.target.value)} />
        <StyledButton onClick={()=> createComment()}>Comentar</StyledButton>
      </Form.Item>
    </Form>
  )
}

export default FormComment;