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
    status_citizen,
    type_candidacy
  } = props.citizen;

  const isCandidate = status_citizen === 'candidate'

  return (
    <div className="admin-container">
      <Card>
        <div className="card-actions">
          <Link to={`/admin/citizen/${id}/update`}>Editar<Icon type="edit"/></Link>
          <span onClick={props.handleDelete}>Eliminar<Icon type="delete"/></span>
        </div>
        <Descriptions title="Información del Ciudadano" layout="vertical">
          <Descriptions.Item label="Status de ciudadano">{status_citizen}</Descriptions.Item>
          { isCandidate ? (
            <Descriptions.Item label="Tipo de Candidatura">{type_candidacy !== null ? type_candidacy.name : 'No tiene tipo de candidatura'}</Descriptions.Item>
            ) : ( '' )
          }
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