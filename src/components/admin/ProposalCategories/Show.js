import React from 'react';
import { Descriptions, Card, Icon } from 'antd';
import { Link } from 'react-router-dom';

const ProposalCategoryShowCard = (props) => {
  const {
    id,
    name
  } = props.proposal_category;

  return (
    <div className="admin-container">
      <Card>
        <div className="card-actions">
          <Link to={`/admin/proposal_category/${id}/update`}>Editar<Icon type="edit"/></Link>
        </div>
        <Descriptions title="Información del País" layout="vertical">
          <Descriptions.Item label="Nombre">{name}</Descriptions.Item>
          <Descriptions.Item label="Pais">{props.country.name}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  )
}

export default ProposalCategoryShowCard;
