import React, { useState } from 'react';
import LoadingButton from '../../common/ui/LoadingButton';
import { StyledTextAreaFeed } from '../../styled';
import { Form } from 'antd';

const FormComment = (props) => {
  let [body, setBody] = useState(props.body);

  return (
    <Form className="comment-form">
      <Form.Item>
        <StyledTextAreaFeed placeholder="Comenta..." value={body} onChange={(e) => setBody(e.target.value)} />
        <LoadingButton title="Comentar" action={() => props.action(body)} />
      </Form.Item>
    </Form>
  )
}

export default FormComment;