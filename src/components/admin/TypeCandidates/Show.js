import React from 'react';
import { Descriptions, Card, Icon } from 'antd';
import { Link } from 'react-router-dom';

const TypeCandidateShowCard = (props) => {
  const {
    id,
    name,
    country_id
  } = props.type_candidate;

  return (
    <div className="admin-container">
      <Card>
        <Link to={`/admin/type_candidate/${id}/update`}><Icon type="edit"/></Link>
        <Descriptions title="Información del tipo de candidatura" layout="vertical">
          <Descriptions.Item label="Nombre">{name}</Descriptions.Item>
          <Descriptions.Item label="ID Pais">{country_id}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  )
}

export default TypeCandidateShowCard;