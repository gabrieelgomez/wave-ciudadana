import React from 'react';
import { Descriptions, Card, Icon } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';

const PollShowCard = (props) => {
  moment.locale('es')

  const {
    id,
    title,
    description,
    due_date
  } = props.poll;

  const formatDueDateShow = moment.utc(due_date).format("L");

  return (
    <div className="admin-container">
      <Card>
        <div className="card-actions">
          <Link to={`/admin/poll/${id}/update`}>Editar<Icon type="edit"/></Link>
          <span onClick={props.handleDelete}>Eliminar<Icon type="delete"/></span>
        </div>
        <Descriptions title="Información de la Encuesta" layout="vertical">
          <Descriptions.Item label="Título">{title}</Descriptions.Item>
          <Descriptions.Item label="Descripción">{description}</Descriptions.Item>
          <Descriptions.Item label="Usuario">{props.poll_user.name}</Descriptions.Item>
          <Descriptions.Item label="Fecha de Vencimiento">{due_date ? formatDueDateShow : ''}</Descriptions.Item>
          <Descriptions.Item label="Categoría de Encuesta">{props.poll_category.name}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  )
}

export default PollShowCard;
