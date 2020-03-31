import React from 'react';
import { Descriptions, Card, Icon } from 'antd';
import { Link } from 'react-router-dom';

const ProposalShowCard = (props) => {
  const {
    id,
    title,
    description
  } = props.proposal;
  debugger
  return (
    <div className="admin-container">
      <Card>
        <div className="card-actions">
          <Link to={`/admin/proposal/${id}/update`}>Editar<Icon type="edit"/></Link>
          <span onClick={props.handleDelete}>Eliminar<Icon type="delete"/></span>
        </div>
        <Descriptions title="Información de la propuesta" layout="vertical">
          <Descriptions.Item label="ID">{id}</Descriptions.Item>
          <Descriptions.Item label="Título">{title}</Descriptions.Item>
          <Descriptions.Item label="Descripción">{description}</Descriptions.Item>
          <Descriptions.Item label="Usuario">{props.proposal_user.name}</Descriptions.Item>
          <Descriptions.Item label="Categoría de Propuesta">{props.proposal_category.name}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  )
}

export default ProposalShowCard;
