import React from 'react';
import { Descriptions, Card, Icon } from 'antd';
import { Link } from 'react-router-dom';

const CitizenShowCard = (props) => {
  const {
    id,
    name,
    nickname,
    email,
    status_citizen
  } = props.citizen;

  return (
    <div className="admin-container">
      <Card>
        {/* <Link to={`/admin/citizen/${id}/update`}><Icon type="edit"/></Link> */}
        <Descriptions title="Información del Ciudadano" layout="vertical">
          <Descriptions.Item label="Nombre">{name}</Descriptions.Item>
          <Descriptions.Item label="Usuario">{nickname}</Descriptions.Item>
          <Descriptions.Item label="Email">{email}</Descriptions.Item>
          <Descriptions.Item label="Status de ciudadano">{status_citizen}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  )
}

export default CitizenShowCard;