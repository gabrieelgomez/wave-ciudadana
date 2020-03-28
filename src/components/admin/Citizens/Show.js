import React from 'react';
import { Descriptions, Card, Icon } from 'antd';
import { Link } from 'react-router-dom';

const CitizenShowCard = (props) => {
  const {
    id,
    name,
    nickname,
    email,
    description,
    status_citizen
  } = props.citizen;

  return (
    <div className="admin-container">
      <Card>
        <div className="card-actions">
          <Link to={`/admin/citizen/${id}/update`}>Editar<Icon type="edit"/></Link>
        </div>
        <Descriptions title="Información del Ciudadano" layout="vertical">
          <Descriptions.Item label="Status de ciudadano">{status_citizen}</Descriptions.Item>
          <Descriptions.Item label="Usuario">{nickname}</Descriptions.Item>
          <Descriptions.Item label="Nombre">{name}</Descriptions.Item>
          <Descriptions.Item label="Email">{email}</Descriptions.Item>
          <Descriptions.Item label="Descripción">{description}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  )
}

export default CitizenShowCard;