import React from 'react';
import { Descriptions, Card, Icon } from 'antd';
import { Link } from 'react-router-dom';

const TypeCandidateShowCard = (props) => {
  const {
    id,
    name
  } = props.type_candidate;

  return (
    <div className="admin-container">
      <Card>
        <div className="card-actions">
          <Link to={`/admin/type_candidate/${id}/update`}>Editar<Icon type="edit"/></Link>
        </div>
        <Descriptions title="Información del tipo de candidatura" layout="vertical">
          <Descriptions.Item label="Nombre">{name}</Descriptions.Item>
          <Descriptions.Item label="Pais">{props.country.name}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  )
}

export default TypeCandidateShowCard;
