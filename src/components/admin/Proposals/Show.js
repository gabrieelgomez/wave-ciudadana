import React from 'react';
import { Descriptions, Icon } from 'antd';
import { StyledCard } from '../../styled';
import { Link } from 'react-router-dom';

const ProposalShowCard = (props) => {
  const {
    id,
    title,
    description
  } = props.proposal;

  return (
    <div className="admin-container">
      <StyledCard>
        <div className="card-actions">
          <Link to={`/admin/proposal/${id}/update`}>Editar<Icon type="edit"/></Link>
          <span onClick={props.handleDelete}>Eliminar<Icon type="delete"/></span>
        </div>
        <Descriptions title="Información de la propuesta" layout="vertical">
          <Descriptions.Item label="Título">{title}</Descriptions.Item>
          <Descriptions.Item label="Descripción">{description}</Descriptions.Item>
          <Descriptions.Item label="Usuario">{props.proposal_user.name}</Descriptions.Item>
          <Descriptions.Item label="Categoría de Propuesta">{props.proposal_category.name}</Descriptions.Item>
        </Descriptions>
      </StyledCard>
    </div>
  )
}

export default ProposalShowCard;
